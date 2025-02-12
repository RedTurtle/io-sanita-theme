import React from 'react';
import { useSelector } from 'react-redux';
import { Progress } from 'design-react-kit';
import { useIntl, defineMessages } from 'react-intl';
import './page-loader.scss';

const messages = defineMessages({
  loadingPage: {
    id: 'Loading page...',
    defaultMessage: 'Sto caricando la pagina richiesta...',
  },
});

const PageLoader = () => {
  const contentLoading = useSelector((state) => state.content.get.loading);
  const intl = useIntl();

  return contentLoading ? (
    <div className="iosanita-page-loader">
      <Progress
        indeterminate
        label={intl.formatMessage(messages.loadingPage)}
      />
    </div>
  ) : (
    <></>
  );
};
export default PageLoader;
