import React from 'react';
import { cleanup } from '@testing-library/react';
import { renderWithRouter } from '@utils/test';
import Layout from './index';

afterEach(cleanup);

describe('Testing Layout Component', () => {
  test('renders the layout container', () => {
    const { getByRole } = renderWithRouter(
      <Layout>
        <div>Test</div>
      </Layout>
    );

    expect(getByRole('main')).toBeInTheDocument();
  });
});
