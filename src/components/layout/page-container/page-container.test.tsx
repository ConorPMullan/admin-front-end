import React from 'react';
import { cleanup } from '@testing-library/react';
import { render } from '@test-utils';
import PageContainer from './index';

afterEach(cleanup);

describe('PageContainer Tests', () => {
  test('renders the layout container', () => {
    const testText = 'testing';
    const { getByRole, getByText } = render(
      <PageContainer>
        <div>{testText}</div>
      </PageContainer>
    );
    expect(getByRole('main')).toBeInTheDocument();
    expect(getByText(testText)).toBeInTheDocument();
  });
});
