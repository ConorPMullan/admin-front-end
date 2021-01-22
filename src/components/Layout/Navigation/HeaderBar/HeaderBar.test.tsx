import React from 'react';
import { cleanup } from '@testing-library/react';
import { render } from '@utils/test';
import HeaderBar from './index';
import {
  HeaderAppBar,
  HeaderIconButton,
  HeaderMenuIcon,
  HeaderToolbar,
} from './styled';

afterEach(cleanup);

describe('Testing HeaderBar Component', () => {
  test('renders the header app container and default layout', () => {
    const isDrawerOpen = false;
    const handleDrawerOpen = jest.fn();
    const { getByRole } = render(
      <HeaderBar
        isDrawerOpen={isDrawerOpen}
        handleDrawerOpen={handleDrawerOpen}
      />
    );
    expect(getByRole(HeaderAppBar)).toBeInTheDocument();
    expect(getByRole(HeaderIconButton)).toBeInTheDocument();
    expect(getByRole(HeaderMenuIcon)).toBeInTheDocument();
    expect(getByRole(HeaderToolbar)).toBeInTheDocument();
  });
});
