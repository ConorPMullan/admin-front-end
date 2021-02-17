import React from 'react';
import { cleanup } from '@testing-library/react';
import { TestUtils } from '@test-utils';
import Title from './index';

afterEach(cleanup);

const titleTextId = 'title-text';

describe('Title Tests', () => {
  test('renders the Title component', () => {
    const testText = 'testText';
    const { getByText, getByTestId } = TestUtils.render(
      <Title dataTestId={titleTextId}>{testText}</Title>
    );
    expect(getByTestId(titleTextId)).toBeInTheDocument();
    expect(getByText(testText)).toBeInTheDocument();
  });
});
