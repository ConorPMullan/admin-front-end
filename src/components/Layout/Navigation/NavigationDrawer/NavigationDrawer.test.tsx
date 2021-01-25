import React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';
import { render } from '@utils/test';
import NavigationDrawer from './index';

afterEach(cleanup);

describe('NavigationDrawer Tests', () => {
  test('renders the header app container and default layout', () => {
    const isDrawerOpen = false;
    const mockCallback = jest.fn();
    const { getByTestId } = render(
      <NavigationDrawer
        isDrawerOpen={isDrawerOpen}
        handleDrawerClose={mockCallback}
      />
    );
    const closeDrawerButton = getByTestId('close-drawer-button');
    expect(closeDrawerButton).toBeInTheDocument();
    fireEvent.click(closeDrawerButton);
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
