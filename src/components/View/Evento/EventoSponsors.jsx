import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { searchContent, resetSearchContent } from '@plone/volto/actions';
import { flattenToAppURL } from '@plone/volto/helpers';
import { defineMessages, useIntl } from 'react-intl';
import { Sponsors } from 'io-sanita-theme/components/View/Evento';
import {
  RichTextSection,
  contentFolderHasItems,
} from 'io-sanita-theme/helpers';

const messages = defineMessages({
  sponsors: {
    id: 'sponsors',
    defaultMessage: 'Sponsor',
  },
});

const EventoSponsors = ({ content }) => {
  const intl = useIntl();
  const dispatch = useDispatch();
  const folderName = 'sponsor-evento';
  const url = `${flattenToAppURL(content['@id'])}/${folderName}`;
  const searchResults = useSelector((state) => state.search.subrequests);
  const sponsors = searchResults?.[folderName]?.items || [];

  useEffect(() => {
    if (content?.items.some((e) => e.id === folderName)) {
      dispatch(
        searchContent(
          url,
          {
            'path.depth': 1,
            sort_on: 'getObjPositionInParent',
            metadata_fields: '_all',
          },
          folderName,
        ),
      );
    }
    return () => {
      dispatch(resetSearchContent(folderName));
    };
  }, [url]);

  // TO DO: il titolo degli sponsor non compare nel sideMenu laterale

  return sponsors.length > 0 && (
    <RichTextSection
        tag_id="sponsors"
        title={intl.formatMessage(messages.sponsors)}
      >
      <Sponsors sponsors={sponsors} />
    </RichTextSection>
  );
};

EventoSponsors.propTypes = {
  content: PropTypes.object.isRequired,
};

export default EventoSponsors;
