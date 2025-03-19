import React from 'react';
import cx from 'classnames';
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionBody,
} from 'design-react-kit';
import { useIntl, defineMessages } from 'react-intl';
import { useLocation, useHistory } from 'react-router-dom';

import { RenderBlocks } from '@plone/volto/components';
import { withBlockExtensions } from '@plone/volto/helpers';
import config from '@plone/volto/registry';

import { LinkMore } from 'io-sanita-theme/components';

import AccordionFilter from './AccordionFilter';
import Heading from './Heading';
import Container from './Container';
import { getPanels, accordionBlockHasValue, Icon } from './util';

import './view.scss';

const messages = defineMessages({
  vedi: {
    id: 'Vedi',
    defaultMessage: 'Vedi',
  },
  closeAccordion: {
    id: 'closeAccordion',
    defaultMessage: "Chiudi l'accordion",
  },
  openAccordion: {
    id: 'openAccordion',
    defaultMessage: "Apri l'accordion",
  },
});

const useQuery = (location) => {
  const { search } = location;
  return React.useMemo(() => new URLSearchParams(search), [search]);
};

const View = (props) => {
  const { data, className, block } = props;
  const intl = useIntl();
  const location = useLocation();
  const history = useHistory();
  const panels = getPanels(data.data);
  const metadata = props.metadata || props.properties;
  const diffView =
    location?.pathname.slice(
      location?.pathname.lastIndexOf('/'),
      location?.pathname.length,
    ) === '/diff';

  const [activeIndex, setActiveIndex] = React.useState([]);
  const [activePanel, setActivePanel] = React.useState([]);
  const [filterValue, setFilterValue] = React.useState('');
  const [itemToScroll, setItemToScroll] = React.useState('');
  const accordionConfig = config.blocks.blocksConfig.accordion;

  const query = useQuery(location);
  const activePanels = query.get('activeAccordion')?.split(',');
  const [firstIdFromPanels] = panels[0];

  const activePanelsRef = React.useRef(activePanels);
  const firstIdFromPanelsRef = React.useRef(firstIdFromPanels);

  const addQueryParam = (key, value) => {
    const searchParams = new URLSearchParams(location.search);
    searchParams.set(key, value);

    history.push({
      hash: location.hash,
      pathname: location.pathname,
      search: searchParams.toString(),
    });
  };

  const handleClick = (e, itemProps) => {
    const { index, id } = itemProps;
    const newIndex =
      activeIndex.indexOf(index) === -1
        ? data.non_exclusive
          ? [...activeIndex, index]
          : [index]
        : activeIndex.filter((item) => item !== index);

    const newPanel =
      activePanel.indexOf(id) === -1
        ? data.non_exclusive
          ? [...activePanel, id]
          : [id]
        : activePanel.filter((item) => item !== id);

    handleActiveIndex(newIndex, newPanel);
  };

  const handleActiveIndex = (index, id) => {
    setActiveIndex(index);
    setActivePanel(id);
    addQueryParam('activeAccordion', id);
  };

  const handleFilteredValueChange = (value) => {
    setFilterValue(value);
  };

  const scrollToElement = () => {
    if (!!activePanels && !!activePanels[0].length) {
      let element = document.getElementById(
        activePanels[activePanels.length - 1],
      );
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isExclusive = (id) => {
    return activePanel.includes(id);
  };

  React.useEffect(() => {
    !!activePanelsRef.current &&
      setItemToScroll(
        activePanelsRef.current[activePanelsRef.current?.length - 1],
      );
  }, []);

  React.useEffect(() => {
    if (data.collapsed) {
      setActivePanel(activePanelsRef.current || []);
    } else {
      if (!!activePanelsRef.current && !!activePanelsRef.current[0].length) {
        setActivePanel(activePanelsRef.current || []);
      } else {
        setActivePanel([
          firstIdFromPanelsRef.current,
          ...(activePanelsRef.current || []),
        ]);
      }
    }
  }, [data.collapsed]);

  return (
    <div className={cx('accordion-block', className)}>
      <div className="public-ui">
        <Container data={data}>
          {data.filtering && (
            <AccordionFilter
              block={block}
              config={accordionConfig}
              data={data}
              filterValue={filterValue}
              handleFilteredValueChange={handleFilteredValueChange}
            />
          )}
          <Accordion id={block + '-accordion'}>
            {panels
              .filter(
                (panel) =>
                  !data.filtering ||
                  filterValue === '' ||
                  (filterValue !== '' &&
                    panel[1].title
                      ?.toLowerCase()
                      .includes(filterValue.toLowerCase())),
              )
              .map(([id, panel], index) => {
                const active = isExclusive(id);
                const html_id = block + '-' + id + '-' + index;
                return accordionBlockHasValue(panel) ? (
                  <AccordionItem key={id} {...accordionConfig.options}>
                    <AccordionHeader
                      active={active}
                      onToggle={(e) => handleClick(e, { index, id })}
                      aria-controls={html_id}
                      aria-label={
                        active
                          ? intl.formatMessage(messages.closeAccordion)
                          : intl.formatMessage(messages.openAccordion) +
                            ' ' +
                            panel.title
                      }
                    >
                      <Heading type={data.title_size} id={html_id + '-title'}>
                        {panel?.title}
                      </Heading>
                    </AccordionHeader>

                    <AccordionBody
                      active={diffView ? true : active}
                      id={html_id}
                      role="region"
                      aria-labelledby={html_id + '-title'}
                    >
                      <RenderBlocks
                        {...props}
                        location={location}
                        metadata={metadata}
                        content={panel}
                      />

                      {panel.href && (
                        <LinkMore
                          href={[{ '@id': panel.href }]}
                          title={
                            panel.linkMoreTitle ||
                            intl.formatMessage(messages.vedi)
                          }
                        />
                      )}
                    </AccordionBody>
                  </AccordionItem>
                ) : null;
              })}
          </Accordion>
        </Container>
      </div>
    </div>
  );
};

export default withBlockExtensions(View);
