import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useIntl, defineMessages } from 'react-intl';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Button } from 'design-react-kit';
import { SearchBar, QuickSearch } from 'io-sanita-theme/components';
import { SearchUtils } from 'io-sanita-theme/helpers';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';
import './quickSearchBlock.scss';

const messages = defineMessages({
  search_site: {
    id: 'quick-search-search_site',
    defaultMessage: 'Cerca nel sito',
  },
});

const Body = ({ data, id, isEditMode }) => {
  const intl = useIntl();
  const [searchableText, setSearchableText] = useState();
  const subsite = useSelector((state) => state.subsite?.data);

  useEffect(() => {
    if (searchableText?.length > 0) {
      window.location.href =
        window.location.origin +
        SearchUtils.getSearchParamsURL({
          searchableText,
          subsite,
          currentLang: intl.locale,
        });
    }
  }, [searchableText]);

  console.log(data.quick_links);
  return (
    <div
      className={cx(
        'full-width bg-primary-lightest py-4 quick-search-block mb-4',
        { block: !isEditMode },
      )}
    >
      <Container className="px-4">
        <Row>
          <Col xl={6}>
            <SearchBar
              id={id}
              title={data.title ?? intl.formatMessage(messages.search_site)}
              textDescription={data.description}
              value={searchableText}
              onChange={(v) => {
                setSearchableText(v);
              }}
              showSubmit={true}
            />
          </Col>
        </Row>

        {/* se non sono stati configurati quicklinks, mostro i link di "Ricerca rapida" */}
        {(data.quick_links ?? []).length == 0 ? (
          <QuickSearch
            onClick={(v) => {
              setSearchableText(v.title);
            }}
            scrollOnMobile={true}
          />
        ) : (
          // mostro i link rapidi
          <div className="quick-links">
            {data.quick_links
              .filter((l) => l.href?.length > 0)
              .map((link, i) => (
                <Button
                  tag={UniversalLink}
                  href={link.href[0]['@id']}
                  key={i}
                  color="primary"
                  outline={true}
                  size="xs"
                >
                  {link.title ??
                    link.href[0]?.title ??
                    link.href[0]?.Title ??
                    'Link rapido'}
                </Button>
              ))}
          </div>
        )}
      </Container>
    </div>
  );
};

export default Body;
