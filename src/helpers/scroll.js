/* scrollIntoView:
pass ref prop (reactRef) or html id if item
*/
export const getMainOffset = () => {
  return __CLIENT__
    ? document.querySelector('.it-header-wrapper.it-header-sticky')
        ?.clientHeight + 20
    : 0;
};

export const scrollIntoView = ({
  ref,
  id,
  querySelector,
  behavior = 'smooth',
}) => {
  const mainOffset = getMainOffset();

  const selector = ref ? null : querySelector ?? '#' + id;

  const top = selector
    ? document.querySelector(selector).offsetTop - mainOffset
    : ref.getBoundingClientRect().top + window.scrollY - mainOffset;

  window.scrollTo({
    behavior,
    top: top,
  });
};
