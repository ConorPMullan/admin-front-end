import React from 'react';
import { cleanup } from '@testing-library/react';
import { render } from '@utils/test';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { theme } from '@styled/theme';
import NavigationLink from './index';

afterEach(cleanup);

describe('Testing NavigationLink Component', () => {
  const history = createMemoryHistory();

  test('renders a navigation link', () => {
    history.push('/test');
    const { getByTestId } = render(
      <Router history={history}>
        <NavigationLink to="/">Test Link</NavigationLink>
      </Router>
    );
    expect(getByTestId('nav-link-container')).toBeInTheDocument();
  });

  test('has default styling when link is not active', () => {
    history.push('/not-active');
    const { getByTestId } = render(
      <Router history={history}>
        <NavigationLink to="/">Link</NavigationLink>
      </Router>
    );

    expect(getByTestId('nav-link-container')).not.toHaveStyle(
      `background-color: ${theme.colors.grey}`
    );
  });

  test('has custom styling when link is currently active', () => {
    history.push('/test');
    const { getByTestId } = render(
      <Router history={history}>
        <NavigationLink to="/test">Link</NavigationLink>
      </Router>
    );

    expect(getByTestId('nav-link-container')).toHaveStyle(
      `background-color: ${theme.colors.grey}`
    );
  });
});
