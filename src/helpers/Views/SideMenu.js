//Hook per avere i SideMenu elements di una pagina
export const useSideMenu = (content, documentBody) => {
  const [sideMenuElements, setSideMenuElements] = useState(null);
  const [observer, setObserver] = useState(null);
  const updateSideMenuOnLoadingBlocks =
    config.settings?.italiaThemeViewsConfig?.[content['@type']]
      ?.updateSideMenuOnLoadingBlocks ?? false;
  const SideMenuComponent =
    config.settings?.italiaThemeViewsConfig?.[content['@type']]?.sideMenu ??
    SideMenu;

  useEffect(() => {
    if (documentBody.current) {
      if (__CLIENT__) {
        setSideMenuElements(documentBody.current);
      }
    }
  }, [content.description, content.title, documentBody]);

  //observer is needed for loadable blocks like listing and rss, if you want to use their title's for SideMenu

  useEffect(() => {
    if (!updateSideMenuOnLoadingBlocks) return;

    if (!observer) {
      const obs = updateSideMenuOnLoadingBlocks
        ? new MutationObserver((mutationList) => {
            setSideMenuElements(documentBody.current);
          })
        : null;
      setObserver(obs);
    }
    if (observer) {
      observer.observe(documentBody.current, {
        //attributes: true,
        childList: true,
        subtree: true,
      });
    }
    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [observer, setObserver, documentBody, updateSideMenuOnLoadingBlocks]);

  return { sideMenuElements, setSideMenuElements, SideMenu: SideMenuComponent };
};
