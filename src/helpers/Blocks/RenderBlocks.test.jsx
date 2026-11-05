import React from 'react';
import { render } from '@testing-library/react';
import RenderBlocks from './RenderBlocks';

jest.mock('react-router-dom', () => ({
  useLocation: () => ({ pathname: '/test' }),
}));

jest.mock('@plone/volto/components/theme/View/RenderBlocks', () => ({
  __esModule: true,
  default: ({ content }) => (
    <ul>
      {content.blocks_layout.items.map((id) => (
        <li key={id}>{id}</li>
      ))}
    </ul>
  ),
}));

const content = {
  blocks: {
    title: { '@type': 'title' },
    folder: { '@type': 'listing', variation: 'simpleCard', querystring: {} },
    legacy: { '@type': 'listing' },
    gallery: { '@type': 'listing', variation: 'imageGallery' },
    query: {
      '@type': 'listing',
      querystring: { query: [{ i: 'portal_type', o: 'any', v: ['News'] }] },
    },
  },
  blocks_layout: { items: ['title', 'folder', 'legacy', 'gallery', 'query'] },
};

const renderedIds = (props) =>
  Array.from(
    render(
      <RenderBlocks content={content} {...props} />,
    ).container.querySelectorAll('li'),
  ).map((li) => li.textContent);

describe('RenderBlocks listing senza criteri', () => {
  it('li renderizza sulla pagina che possiede i blocchi', () => {
    expect(renderedIds()).toEqual(['folder', 'legacy', 'gallery', 'query']);
  });

  it('li nasconde quando i blocchi sono di un altro oggetto', () => {
    expect(renderedIds({ nested: true })).toEqual(['gallery', 'query']);
  });
});
