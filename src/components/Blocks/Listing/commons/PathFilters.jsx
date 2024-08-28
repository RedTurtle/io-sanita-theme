export const getPathFiltersButtons = (show_path_filters, path_filters) => {
  show_path_filters && path_filters
    ? Object.keys(path_filters)
        .map((k) => {
          return {
            label: path_filters[k].label,
            path: path_filters[k].path?.[0],
          };
        })
        .filter((f) => f.path)
    : null;
};

const PathFilters = ({
  path_filters,
  show_path_filters,
  additionalFilters,
  addFilters,
}) => {
  let currentPathFilter = additionalFilters
    ?.filter((f) => {
      return f.i === 'path';
    })
    ?.map((f) => {
      return f.v;
    });

  const [pathFilter, setPathFilter] = useState(currentPathFilter?.[0] || null);

  const path_filters_buttons = getPathFiltersButtons(
    show_path_filters,
    path_filters,
  );

  const addPathFilter = (path) => {
    let new_path = pathFilter === path ? null : path;
    setPathFilter(new_path);
    let filters = [];
    if (new_path) {
      filters = [
        {
          i: 'path',
          o: 'plone.app.querystring.operation.string.absolutePath',
          v: new_path,
        },
      ];
    }
    addFilters(filters);
  };

  return (
    path_filters_buttons && (
      <Col md={title ? 6 : 12} className="path-filter-buttons">
        <div className="path-filter-buttons-wrapper">
          {path_filters_buttons.map((button, i) => (
            <Button
              key={i}
              color="primary"
              outline={button.path['@id'] !== pathFilter}
              size="xs"
              icon={false}
              tag="button"
              className="ms-3"
              onClick={(e) => {
                addPathFilter(button.path['@id']);
              }}
            >
              {button.label}
            </Button>
          ))}
        </div>
      </Col>
    )
  );
};

export default PathFilters;
