import loadable from '@loadable/component';
import { loadables as subsitesLoadables } from './subsites';

export const loadables = {
  reactSlick: loadable.lib(() => import('react-slick')),
  //rrule: loadable.lib(() => import('rrule')),
  htmlDiffLib: loadable.lib(() => import('htmldiff-js')),
  // Volto 19 no longer registers these, but volto-subblocks (used by the
  // form block) still injects them.
  reactDnd: loadable.lib(() => import('react-dnd')),
  reactDndHtml5Backend: loadable.lib(() => import('react-dnd-html5-backend')),
  ...subsitesLoadables,
};
