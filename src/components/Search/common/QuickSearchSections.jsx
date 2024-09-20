import React from 'react';
import cx from 'classnames';
import { useIntl, defineMessages } from 'react-intl';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Button } from 'design-react-kit';
import { SearchUtils } from 'io-sanita-theme/helpers';

import './quickSearchSections.scss';

const { parseFetchedSections } = SearchUtils;

const messages = defineMessages({
  quick_search: {
    id: 'quick-search-title',
    defaultMessage: 'Ricerca rapida',
  },
});

const QuickSearchSections = ({ onClick, scrollOnMobile = false }) => {
  const intl = useIntl();
  const location = useLocation();

  //const content = useSelector((state) => state.content.subrequests[id]?.data);
  const fetched_sections = useSelector(
    (state) => state?.searchFilters?.result?.sections,
  );

  const sections = parseFetchedSections(fetched_sections ?? [], location);
  const keys = Object.keys(sections ?? {});

  return keys?.length > 0 ? (
    <div className="quick-search-sections">
      <h3 className="h6 mb-0 title">
        {intl.formatMessage(messages.quick_search)}
      </h3>
      <div
        className={cx('quick-search-items d-flex flex-wrap', {
          'scroll-on-mobile': scrollOnMobile,
        })}
      >
        {keys.map((id) => {
          const section = sections[id];
          return (
            <Button
              key={id}
              color="link-accent"
              className="px-0 quick-item"
              size="sm"
              aria-label={section.title}
              onClick={() => onClick(section)}
            >
              {section.title}
            </Button>
          );
        })}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default QuickSearchSections;
