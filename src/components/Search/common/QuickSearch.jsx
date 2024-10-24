import React, { useEffect } from 'react';
import cx from 'classnames';
import { useIntl, defineMessages } from 'react-intl';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Button } from 'design-react-kit';
import { SearchUtils } from 'io-sanita-theme/helpers';
import { getSearchFilters } from 'io-sanita-theme/actions';

import './quickSearch.scss';
import { title } from 'process';

const messages = defineMessages({
  quick_search: {
    id: 'quick-search-title',
    defaultMessage: 'Ricerca rapida',
  },
  quick_search_item: {
    id: 'quick-search-item',
    defaultMessage: 'Effettua una ricerca per "{quick}"',
  },
});

const QuickSearch = ({ onClick, scrollOnMobile = false, titleTag = 'h2' }) => {
  const intl = useIntl();
  const location = useLocation();
  const dispatch = useDispatch();

  const searchFilters = useSelector((state) => state?.searchFilters);
  const items =
    SearchUtils.getItemsByPath(
      searchFilters?.result?.quick_search,
      location.pathname,
    ) ?? [];

  useEffect(() => {
    if (!searchFilters.loaded && !searchFilters?.loading) {
      dispatch(getSearchFilters());
    }
  }, []);

  const Tag = ({ tagName, children, ...props }) =>
    React.createElement(tagName, props, children);

  return items?.length > 0 ? (
    <div className="quick-search">
      <Tag tagName={titleTag} className="h6 mb-2 mb-lg-0 title">
        {intl.formatMessage(messages.quick_search)}
      </Tag>

      <div
        className={cx('quick-search-items d-flex flex-wrap', {
          'scroll-on-mobile': scrollOnMobile,
        })}
      >
        {items.map((item, i) => {
          return (
            <Button
              key={'quick-search' + i}
              color="link-accent"
              className={cx('px-0 quick-item', { 'py-lg-2': !scrollOnMobile })}
              size="sm"
              aria-label={item.title}
              onClick={() => onClick(item)}
              title={intl.formatMessage(messages.quick_search_item, {
                quick: item.title,
              })}
            >
              {item.title}
            </Button>
          );
        })}
      </div>
    </div>
  ) : (
    <></>
  );
};

export default QuickSearch;
