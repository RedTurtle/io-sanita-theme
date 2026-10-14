/**
 * @module components/theme/Unauthorized/Unauthorized
 *
 * original: https://raw.githubusercontent.com/plone/volto/19.4.1/packages/volto/src/components/theme/Unauthorized/Unauthorized.jsx
 *
 * CUSTOMIZATIONS:
 * - renders io-sanita-theme's Unauthorized (SPID and operator login) for
 *   everyone; upstream's redirect of anonymous users to /login is not adopted
 * - props are forwarded, so that its withServerErrorCode(401) gets the
 *   staticContext and SSR answers 401
 * - displayName "unauthorized" like upstream, used by View for the
 *   view-unauthorized body class
 */

import React from 'react';

import { Unauthorized as UnauthorizedIoSanita } from 'io-sanita-theme/components';

/**
 * unauthorized function.
 * @function Unauthorized
 * @returns {string} Markup of the unauthorized page.
 */
const Unauthorized = (props) => {
  return <UnauthorizedIoSanita {...props} />;
};

Unauthorized.displayName = 'unauthorized';

export default Unauthorized;
