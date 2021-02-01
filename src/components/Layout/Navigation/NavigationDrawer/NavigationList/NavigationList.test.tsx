import React from 'react';
import { cleanup } from '@testing-library/react';
import { renderWithRouter } from '@utils/test';
import NavigationList from './index';

afterEach(cleanup);

describe('NavigationList Tests', () => {
  test('Renders the NavList and NavigationItem components as default', () => {
    const { getByTestId } = renderWithRouter(<NavigationList />);
    const navList = getByTestId('nav-list');
    const navItemHome = getByTestId('nav-item-home');
    const navItemHomeIcon = getByTestId('nav-item-home-icon');
    const navItemManageProducts = getByTestId('nav-item-manage-products');
    const navItemManageProductsIcon = getByTestId('nav-item-manage-products-icon');
    
    expect(navList).toBeInTheDocument();
    expect(navItemHome).toBeInTheDocument();
    expect(navItemHomeIcon).toBeInTheDocument();
    expect(navItemManageProducts).toBeInTheDocument();
    expect(navItemManageProductsIcon).toBeInTheDocument();
  });
});
