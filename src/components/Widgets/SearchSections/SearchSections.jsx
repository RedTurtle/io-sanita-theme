/**
 * Sections for search
 */
import React, { useState, useEffect } from 'react';
import cx from 'classnames';
import { useIntl, defineMessages } from 'react-intl';

import { FormGroup, Label, Collapse } from 'design-react-kit';
import { Icon, Checkbox } from 'io-sanita-theme/components';
import { SearchUtils } from 'io-sanita-theme/helpers';

const messages = defineMessages({
  searchInSection: {
    id: 'searchInSection',
    defaultMessage: 'Cerca nella sezione',
  },
  hideAllSections: {
    id: 'search-hideAllSections',
    defineMessages: 'Nascondi tutte le sezioni',
  },
  showAllSections: {
    id: 'search-showAllSections',
    defineMessages: 'Mostra tutte le sezioni',
  },
});

export default function SearchSections({
  sections,
  toggleGroups = false,
  value = [],
  setValue,
  title,
}) {
  const [collapse, setCollapse] = useState({});
  const intl = useIntl();
  useEffect(() => {
    if (Object.keys(collapse).length === 0) {
      let defaultCollapse = {};
      sections.forEach((s) => {
        defaultCollapse[s.id] = toggleGroups;
      });

      setCollapse(defaultCollapse);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sections]);

  const toggleCollapseGroup = (id) => {
    setCollapse((prevCollapse) => ({
      ...prevCollapse,
      [id]: !prevCollapse[id],
    }));
  };

  const toggleSection = (s, checked) => {
    let new_value = [...value];
    if (!checked) {
      const i = new_value.indexOf(s['@id']);

      if (i > -1) {
        new_value.splice(i, 1);
      }
      if (s.items?.length > 0) {
        s.items.forEach((c) => {
          const ic = new_value.indexOf(c['@id']);
          if (ic > -1) {
            new_value.splice(ic, 1);
          }
        });
      }
    } else {
      new_value.push(s['@id']);
      if (s.items?.length > 0) {
        s.items.forEach((c) => {
          new_value.push(c['@id']);
        });
      }
    }
    setValue(new_value);
  };

  return (
    <>
      {title && sections.length > 0 && (
        <h6 className="text-uppercase">
          {/* SECTION TITLE */}
          {title}
        </h6>
      )}
      {sections.map((s) => {
        const children =
          s.items?.length > 0 && s.items[0]['@id'] != s['@id'] ? s.items : [];
        const groupChecked = SearchUtils.isGroupChecked(s, value);
        const expanded = collapse[s.id] !== undefined && !collapse[s.id];
        return (
          <div className="mt-3" key={s.id}>
            <FormGroup check tag="div">
              <Checkbox
                id={s.id}
                indeterminate={SearchUtils.isGroupIndeterminate(
                  s,
                  groupChecked,
                  value,
                )}
                checked={groupChecked}
                onChange={(e) => toggleSection(s, e.currentTarget.checked)}
                aria-controls="search-results-region"
                aria-label={
                  intl.formatMessage(messages.searchInSection) + ' ' + s.title
                }
              />

              <Label
                check
                for={s.id}
                tag="label"
                className={cx('group-head', {
                  'text-primary': !toggleGroups,
                  'fw-bold': !toggleGroups,
                  indeterminate: SearchUtils.isGroupIndeterminate(
                    s,
                    groupChecked,
                    value,
                  ),
                })}
                widths={['xs', 'sm', 'md', 'lg', 'xl']}
              >
                {s.title}
              </Label>

              {toggleGroups && children.length > 0 && (
                <a
                  className="float-end"
                  href={`#section${s.id}Collapse`}
                  onClick={(e) => {
                    e.preventDefault();
                    toggleCollapseGroup(s.id);
                  }}
                  data-toggle="collapse"
                  aria-expanded={expanded}
                  aria-controls={`section${s.id}Collapse`}
                  aria-label={intl.formatMessage(
                    expanded
                      ? messages.hideAllSections
                      : messages.showAllSections,
                  )}
                >
                  <Icon
                    color="primary"
                    icon={expanded ? 'it-collapse' : 'it-expand'}
                    padding={false}
                    className="right"
                    aria-hidden={true}
                  />
                </a>
              )}
            </FormGroup>
            {children?.length > 0 && (
              <Collapse isOpen={expanded} id={`section${s.id}Collapse`}>
                {children.map((child) => (
                  <FormGroup
                    check
                    tag="div"
                    key={child.id}
                    className={cx({ 'ps-4': toggleGroups })}
                  >
                    <Checkbox
                      id={child.id}
                      checked={SearchUtils.isSectionChecked(child, value)}
                      onChange={(e) =>
                        toggleSection(child, e.currentTarget.checked)
                      }
                      aria-controls="search-results-region"
                      aria-label={
                        intl.formatMessage(messages.searchInSection) +
                        ' ' +
                        child.title
                      }
                    />
                    <Label
                      check
                      for={child.id}
                      tag="label"
                      widths={['xs', 'sm', 'md', 'lg', 'xl']}
                    >
                      {child.title}
                    </Label>
                  </FormGroup>
                ))}
              </Collapse>
            )}
          </div>
        );
      })}
    </>
  );
}
