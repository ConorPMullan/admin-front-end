import React from 'react';
import { cleanup } from '@testing-library/react';
import { renderWithRouter } from '@test-utils';
import NavigationItem from './index';

afterEach(cleanup);

describe('NavigationItem Tests', () => {
  test('Renders the NavigationItem', () => {
    const testId = 'nav-item-test';
    const linkContent = 'Test Link Content';
    const { getByTestId, getByText } = renderWithRouter(
      <NavigationItem
        dataTestId={testId}
        to={'/test-route'}
        text={linkContent}
      />
    );
    const navListItem = getByTestId(testId);
    const navListItemContent = getByText(linkContent);
    expect(navListItem).toBeInTheDocument();
    expect(navListItemContent).toBeInTheDocument();
  });
});
