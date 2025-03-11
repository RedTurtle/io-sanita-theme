import { useState, useEffect } from 'react';
import { useIntl } from 'react-intl';

import config from '@plone/volto/registry';

const RESOLVEUID_RE = /^[./]*resolve[Uu]id\/([^/]*)\/?(.*)$/;

export function isResolveUID(url) {
  const match = url?.match(RESOLVEUID_RE);
  return Boolean(match);
}

export const useHomePath = () => {
  const [path, setPath] = useState('/');

  const { locale } = useIntl();

  useEffect(() => {
    setPath(config.settings.isMultilingual ? '/' + locale : '/');
  }, [locale]);
  return path;
};
