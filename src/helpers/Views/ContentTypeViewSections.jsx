import React from 'react';

import config from '@plone/volto/registry';

const ContentTypeViewSections = ({ content, defaultSections }) => {
  if (!content) {
    return <></>;
  }

  let sections =
    config.views?.ioSanitaContentTypesViewsConfig?.[content['@type']]
      ?.sections ?? defaultSections;
  const pushable_sections =
    config.views?.ioSanitaContentTypesViewsConfig?.[content['@type']]
      ?.pushSections;

  if (pushable_sections?.length > 0) {
    pushable_sections.forEach((p) => {
      const i =
        p.atIndex > sections?.length - 1 ? sections?.length - 1 : p.atIndex;
      if (sections[i].key !== p.key) {
        sections.splice(i, 0, p);
      }
    });
  }

  return sections?.length > 0 ? (
    sections.map((section, i) => (
      <section.component
        content={content}
        {...section.props}
        key={`${content['@id']}-section-${i}`}
      />
    ))
  ) : (
    <></>
  );
};

export default React.memo(ContentTypeViewSections);
