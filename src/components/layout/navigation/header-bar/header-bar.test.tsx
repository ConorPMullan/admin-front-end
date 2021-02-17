import React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';
import { TestUtils } from '@test-utils';
import HeaderBar from './index';

afterEach(cleanup);

describe('HeaderBar Tests', () => {
  test('Clicking on the Open Drawer button triggers callback', () => {
    const isDrawerOpen = false;
    const mockCallback = jest.fn();
    const { getByTestId } = TestUtils.render(
      <HeaderBar isDrawerOpen={isDrawerOpen} handleDrawerOpen={mockCallback} />
    );
    const openDrawerButton = getByTestId('open-drawer-button');
    expect(openDrawerButton).toBeInTheDocument();
    fireEvent.click(openDrawerButton);
    expect(mockCallback.mock.calls.length).toBe(1);
  });
});
