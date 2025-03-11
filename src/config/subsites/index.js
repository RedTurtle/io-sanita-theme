import loadable from '@loadable/component';

export const loadables = {
  'subsite-light-blue': loadable.lib(() =>
    import('io-sanita-theme/config/subsites/light-blue'),
  ),
  'subsite-light-pink': loadable.lib(() =>
    import('io-sanita-theme/config/subsites/light-pink'),
  ),
  'subsite-light-teal': loadable.lib(() =>
    import('io-sanita-theme/config/subsites/light-teal'),
  ),
  'subsite-light-yellow': loadable.lib(() =>
    import('io-sanita-theme/config/subsites/light-yellow'),
  ),
  'subsite-magenta': loadable.lib(() =>
    import('io-sanita-theme/config/subsites/magenta'),
  ),
  'subsite-teal': loadable.lib(() =>
    import('io-sanita-theme/config/subsites/teal'),
  ),
  'subsite-white': loadable.lib(() =>
    import('io-sanita-theme/config/subsites/white'),
  ),
  'subsite-yellow': loadable.lib(() =>
    import('io-sanita-theme/config/subsites/yellow'),
  ),
};
