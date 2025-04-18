import React from 'react';
import UniversalLink from '@plone/volto/components/manage/UniversalLink/UniversalLink';
import { getAggregationPageUrl } from 'io-sanita-theme/helpers/aggregation';
import { Chip, ChipLabel } from 'design-react-kit';

const ParliamoDiWidgetView = ({ value, children, className }) => {
  return value?.length > 0 ? (
    <div className="topics-view-widget">
      {value.map((item, i) => (
        <UniversalLink
          href={getAggregationPageUrl('topics', item.token)}
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
