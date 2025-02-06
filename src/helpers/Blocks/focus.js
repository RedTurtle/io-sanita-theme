import { useState, useEffect } from 'react';
import config from '@plone/volto/registry';

export const handleKeyDownOwnFocusManagement = (
  e,
  props,
  {
    disableEnter = false,
    disableArrowUp = false,
    disableArrowDown = false,
  } = {},
) => {
  const {
    index,
    block,
    blockNode,
    onFocusPreviousBlock = () => {},
    onFocusNextBlock = () => {},
    onSelectBlock = () => {},
    onAddBlock = () => {},
  } = props;
  const isMultipleSelection = e.shiftKey;

  if (e.key === 'ArrowUp' && !disableArrowUp) {
    onFocusPreviousBlock(block, blockNode.current, isMultipleSelection);
    e.preventDefault();
  }
  if (e.key === 'ArrowDown' && !disableArrowDown) {
    onFocusNextBlock(block, blockNode.current, isMultipleSelection);
    e.preventDefault();
  }
  if (e.key === 'Enter' && !disableEnter) {
    onSelectBlock(onAddBlock(config.settings.defaultBlockType, index + 1));

    e.preventDefault();
  }
};

/*HOOK to handle detached blocks with own focus management*/
export const useHandleDetachedBlockFocus = (
  blockProps,
  defaultSelectedField,
) => {
  const [selectedField, setSelectedField] = useState(defaultSelectedField);
  const { selected, onSelectBlock, block } = blockProps;

  useEffect(() => {
    if (selected && !selectedField) {
      setSelectedField(defaultSelectedField);
    } else if (!selected) {
      setSelectedField(null);
    }
  }, [selected]);

  useEffect(() => {
    const handleEnter = (e) => {
      if (selected && !selectedField) {
        handleKeyDownOwnFocusManagement(e, blockProps);
      }
    };
    const blockNode = blockProps.blockNode;

    if (blockNode && blockNode.current) {
      blockNode.current.addEventListener('keydown', handleEnter, false);
      return function cleanup() {
        if (blockNode?.current) {
          blockNode.current.removeEventListener('keydown', handleEnter, false);
        }
      };
    }
  }, [selected, selectedField]);

  return { selectedField, setSelectedField };
};
