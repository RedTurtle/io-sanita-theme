import React from 'react';
import { useIntl, defineMessages } from 'react-intl';
import PropTypes from 'prop-types';
//import { Callout, CalloutTitle, CalloutText } from 'design-react-kit';
//import { Icon } from 'io-sanita-theme/components';
import { RichText } from 'io-sanita-theme/helpers';

// const messages = defineMessages({
//   ulteriori_info: {
//     id: 'ulteriori_info_icona',
//     defaultMessage: 'Ulteriori informazioni',
//   },
// });

const HelpBox = ({ text }) => {
  const intl = useIntl();
  return text ? (
    // <Callout>
    //   <CalloutTitle>
    //     <Icon
    //       icon="it-info-circle"
    //       aria-hidden
    //       title={intl.formatMessage(messages.ulteriori_info)}
    //     />
    //     <span className="visually-hidden">
    //       {intl.formatMessage(messages.ulteriori_info)}
    //     </span>
    //     <span className="text"> </span>
    //   </CalloutTitle>
    //   <CalloutText>
    <RichText data={text} /> //   </CalloutText> </Callout>
  ) : null;
};
HelpBox.propTypes = {
  text: PropTypes.object.isRequired,
};

export default HelpBox;
