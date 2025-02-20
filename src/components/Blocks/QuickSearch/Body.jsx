import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useIntl, defineMessages } from 'react-intl';
import { useSelector } from 'react-redux';
import { Container, Row, Col } from 'design-react-kit';
import { SearchBar, QuickSearch } from 'io-sanita-theme/components';
import { SearchUtils } from 'io-sanita-theme/helpers';
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
        <QuickSearch
          onClick={(v) => {
            setSearchableText(v.title);
          }}
          scrollOnMobile={true}
        />
      </Container>
    </div>
  );
};

export default Body;
