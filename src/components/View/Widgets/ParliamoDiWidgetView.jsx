import React from 'react';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';
import { AGGREGATION_PAGE_ARGOMENTO } from 'io-sanita-theme/config/ioSanitaConfig';
import { Chip, ChipLabel } from 'design-react-kit';

const ParliamoDiWidgetView = ({ value, children, className }) => {
  return value?.length > 0 ? (
    <div className="topics-view-widget">
      {value.map((item, i) => (
        <UniversalLink
          href={AGGREGATION_PAGE_ARGOMENTO + item.token}
          key={item.token}
          className="text-decoration-none me-2 d-inline-block"
        >
          <Chip color="accent" simple>
            <ChipLabel>{item.title}</ChipLabel>
          </Chip>
        </UniversalLink>
      ))}
    </div>
  ) : (
    ''
  );
};

export default ParliamoDiWidgetView;
