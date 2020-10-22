import React from 'react';
import { cleanup, fireEvent } from '@testing-library/react';
import { renderWithRouter } from '@utils/test';
import { Navigation } from '@constants';
import SideNavigation from './index';

afterEach(cleanup);

describe('Testing SideNavigation Component', () => {
  test('renders the side navigation component', () => {
    const { getByRole } = renderWithRouter(<SideNavigation />);
    expect(getByRole('navigation')).toBeInTheDocument();
  });

  test('navigates to home page on click', () => {
    const { getByRole, history } = renderWithRouter(<SideNavigation />);

    // Mock push history function
    history.push = jest.fn();

    fireEvent.click(getByRole('link', { name: /home/i }));
    expect(history.push).toHaveBeenCalledWith(
      Navigation.NAVIGATION_ROUTES.HOME
    );
  });

  test('navigates to ratings and reviews page on click', () => {
    const { getByRole, history } = renderWithRouter(<SideNavigation />);
    history.push = jest.fn();
    fireEvent.click(getByRole('link', { name: /ratings and reviews/i }));
    expect(history.push).toHaveBeenCalledWith(
      Navigation.NAVIGATION_ROUTES.RATINGS_AND_REVIEWS
    );
  });

  test('navigates to address page on click', () => {
    const { getByRole, history } = renderWithRouter(<SideNavigation />);
    history.push = jest.fn();
    fireEvent.click(getByRole('link', { name: /address/i }));
    expect(history.push).toHaveBeenCalledWith(
      Navigation.NAVIGATION_ROUTES.ADDRESS
    );
  });

  test('navigates to web access page on click', () => {
    const { getByRole, history } = renderWithRouter(<SideNavigation />);
    history.push = jest.fn();
    fireEvent.click(getByRole('link', { name: /web access/i }));
    expect(history.push).toHaveBeenCalledWith(
      Navigation.NAVIGATION_ROUTES.WEB_ACCESS
    );
  });
});
