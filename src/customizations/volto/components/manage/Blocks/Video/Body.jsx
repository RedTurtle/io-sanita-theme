/**
 * Body video block.
 * @module components/manage/Blocks/Video/Body
 *
 * original: https://raw.githubusercontent.com/plone/volto/19.4.1/packages/volto/src/components/manage/Blocks/Video/Body.jsx
 *
 * CUSTOMIZATIONS:
 * - kept on the semantic-ui Embed with our FontAwesome play icon: upstream's
 *   VideoEmbed (Volto 19) is not adopted, it would change the block's look
 * - YouTube/Vimeo URLs are parsed with videoUrlHelper (io-sanita-theme), the
 *   same rules checkIfValidVideoLink applies in Edit
 * - preview_image may be an external URL
 * - wrapped in ConditionalEmbed (volto-gdpr-privacy): the embed loads only
 *   after cookie consent
 * - external URLs play in a <video> tag when allowed (data.allowExternals or
 *   config.settings.videoAllowExternalsDefault)
 * - rendered on the client only, to avoid a hydration failure (588ee09)
 * - playlists read the list= parameter from the URL: upstream 19.4.1 no
 *   longer returns listID from getVideoIDAndPlaceholder, so its playlist
 *   embed points to "list=undefined"
 * - internal mp4 URLs are flattened also when they already contain @@download
 * - PeerTube, autoplay and title (new in Volto 19) are not supported: our
 *   Edit validation and sidebar don't offer them
 */

import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Embed, Message } from 'semantic-ui-react';
import cx from 'classnames';
import { ConditionalEmbed } from 'volto-gdpr-privacy';

import { isInternalURL, flattenToAppURL } from '@plone/volto/helpers/Url/Url';
import { videoUrlHelper } from 'io-sanita-theme/helpers';
import { FontAwesomeIcon } from 'io-sanita-theme/components';
import config from '@plone/volto/registry';

/**
 * Body video block class.
 * @class Body
 * @extends Component
 */
const Body = ({ data, isEditMode }) => {
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);
  const allowsExternals =
    data.allowExternals !== undefined
      ? !!data.allowExternals
      : !!config.settings.videoAllowExternalsDefault;

  let placeholder = null;
  let videoID = null;
  const listID = data.url?.match(/[?&]list=([^&#]+)/)?.[1] ?? null;
  if (data.url) {
    const [computedID, computedPlaceholder] = videoUrlHelper(
      data.url,
      data?.preview_image,
    );
    if (computedID) {
      videoID = computedID;
    }
    if (computedPlaceholder) {
      placeholder = computedPlaceholder;
    }
  }
  const ref = React.createRef();
  const onKeyDown = (e) => {
    if (e.nativeEvent.keyCode === 13) {
      //Enter
      ref.current.handleClick();
    }
  };
  const embedSettings = {
    placeholder: placeholder,
    icon: (
      <div
        className="icon-play"
        role="button"
        tabIndex={0}
        title="Load and Play video"
      >
        <FontAwesomeIcon icon={['fas', 'play']} />
      </div>
    ),
    defaultActive: false,
    autoplay: false,
    aspectRatio: '16:9',
    tabIndex: 0,
    onKeyPress: onKeyDown,
    ref: ref,
  };

  return isClient ? (
    <>
      {data.url && (
        <div
          className={cx('video-inner', {
            'full-width': data.align === 'full',
          })}
        >
          <ConditionalEmbed url={data.url} suppressHydrationWarning>
            {data.url.match('youtu') ? (
              <>
                {listID ? (
                  <Embed
                    suppressHydrationWarning
                    url={`https://www.youtube.com/embed/videoseries?list=${listID}`}
                    {...embedSettings}
                  />
                ) : (
                  <Embed id={videoID} source="youtube" {...embedSettings} />
                )}
              </>
            ) : (
              <>
                {data.url.match('vimeo') ? (
                  <Embed id={videoID} source="vimeo" {...embedSettings} />
                ) : (
                  <>
                    {data.url.match('.mp4') ? (
                      // eslint-disable-next-line jsx-a11y/media-has-caption
                      <video
                        src={
                          isInternalURL(data.url)
                            ? data.url.includes('@@download')
                              ? flattenToAppURL(data.url)
                              : `${flattenToAppURL(data.url)}/@@download/file`
                            : data.url
                        }
                        controls
                        poster={placeholder}
                        type="video/mp4"
                      />
                    ) : data.url && allowsExternals ? (
                      // eslint-disable-next-line jsx-a11y/media-has-caption
                      <video
                        src={data.url}
                        controls
                        poster={placeholder}
                        type="video/mp4"
                      />
                    ) : isEditMode ? (
                      <div>
                        <Message>
                          <center>
                            <FormattedMessage
                              id="Please enter a valid URL by deleting the block and adding a new video block."
                              defaultMessage="Please enter a valid URL by deleting the block and adding a new video block."
                            />
                          </center>
                        </Message>
                      </div>
                    ) : (
                      <div className="invalidVideoFormat" />
                    )}
                  </>
                )}
              </>
            )}
          </ConditionalEmbed>
        </div>
      )}
    </>
  ) : null;
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Body.propTypes = {
  data: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Body;
