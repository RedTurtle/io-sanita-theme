/* scrollIntoView:
pass ref prop (reactRef) or html id if item
*/
export const getMainOffset = () => {
  return __CLIENT__
    ? document.querySelector('.it-header-wrapper.it-header-sticky')
        ?.clientHeight + 20
    : 0;
};

export const scrollIntoView = ({ ref, id, behavior = 'smooth' }) => {
  const mainOffset = getMainOffset();

  const top = id
    ? document.querySelector('#' + id).offsetTop - mainOffset
    : ref.getBoundingClientRect().top + window.scrollY - mainOffset;

  window.scrollTo({
    behavior,
    top: top,
  });
};
