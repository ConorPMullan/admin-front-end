import React from 'react';
import { cleanup } from '@testing-library/react';
import { renderWithRouter } from '@utils/test';
import Layout from './index';

afterEach(cleanup);

describe('Layout Tests', () => {
  test('renders the layout container', () => {
    const mockDivId = 'mock-div';
    const { getByTestId } = renderWithRouter(
      <Layout>
        <div data-testid={mockDivId}>Test</div>
      </Layout>
    );
    expect(getByTestId(mockDivId)).toBeInTheDocument();
  });
});
