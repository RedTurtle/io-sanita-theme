import map from 'lodash/map';
import range from 'lodash/range';

import {
  createInnerPrefix,
  createInnerSuffix,
} from 'io-sanita-theme/components/Pagination/createPaginationItems/suffixFactories';

export const createSimpleRange = (start, end, pageFactory) =>
  map(range(start, end + 1), pageFactory);

export const createComplexRange = (options, pageFactory) => {
  const { activePage, boundaryRange, hideEllipsis, siblingRange, totalPages } =
    options;

  const ellipsisSize = hideEllipsis ? 0 : 1;
  const firstGroupEnd = boundaryRange;
  const firstGroup = createSimpleRange(1, firstGroupEnd, pageFactory);

  const lastGroupStart = totalPages + 1 - boundaryRange;
  const lastGroup = createSimpleRange(lastGroupStart, totalPages, pageFactory);

  const innerGroupStart = Math.min(
    Math.max(activePage - siblingRange, firstGroupEnd + ellipsisSize + 1),
    lastGroupStart - ellipsisSize - 2 * siblingRange - 1,
  );
  const innerGroupEnd = innerGroupStart + 2 * siblingRange;
  const innerGroup = createSimpleRange(
    innerGroupStart,
    innerGroupEnd,
    pageFactory,
  );

  return [
    ...firstGroup,
    !hideEllipsis &&
      createInnerPrefix(firstGroupEnd, innerGroupStart, pageFactory),
    ...innerGroup,
    !hideEllipsis &&
      createInnerSuffix(innerGroupEnd, lastGroupStart, pageFactory),
    ...lastGroup,
  ].filter(Boolean);
};
