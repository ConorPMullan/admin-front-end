import React from 'react';
import { cleanup } from '@testing-library/react';
import { render } from '@utils/test';
import PageContainer from './index';

afterEach(cleanup);

describe('Testing PageContainer Component', () => {
  test('renders the page container', () => {
    const { getByTestId } = render(<PageContainer />);
    expect(getByTestId('page-content-container')).toBeInTheDocument();
  });
});
