/*
 * Search component.
 * @module components/theme/Search/Search
 *
 * original: https://raw.githubusercontent.com/plone/volto/19.4.1/packages/volto/src/components/theme/Search/Search.jsx
 *
 * CUSTOMIZATIONS:
 * - the whole component is replaced by io-sanita-theme's own Search, which
 *   implements the AgID search layout; none of upstream's implementation is
 *   reused, so upstream changes to it do not need to be merged here.
 * - re-exported directly rather than through loadable(). This component is
 *   registered as the '/**''/search' route in addonRoutes, and a lazy component
 *   used as a route component renders nothing on the first client render while
 *   the server rendered it in full. React then fails hydration outside a
 *   Suspense boundary and discards the entire hydrated tree, re-rendering the
 *   whole root on the client. A route component is always needed for the route
 *   it serves, so code-splitting it buys nothing.
 */

export default from 'io-sanita-theme/components/Search/Search';
