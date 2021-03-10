import React from 'react';
import { cleanup } from '@testing-library/react';
import DialogContainer from './';
import { TestUtils } from '@test-utils';

afterEach(cleanup);

const testId = 'test';
const dialogTitleId = '-dialog-title-text';
const dialogSubtitleId = '-dialog-subtitle-text';
const dialogCloseId = '-dialog-close-button';

describe('DialogContainer Tests', () => {
  test('default rendering of the DialogContainer', async () => {
    const mockFunc = jest.fn();
    const testTitle = 'testTitle';
    const { queryByText, queryByTestId } = TestUtils.render(
      <DialogContainer
        id={testId}
        isOpen={false}
        title={testTitle}
        onClose={mockFunc}
      />
    );
    expect(queryByTestId(testId + dialogTitleId)).toBeNull();
    expect(queryByTestId(testId + dialogSubtitleId)).toBeNull();
    expect(queryByTestId(testId + dialogCloseId)).toBeNull();
  });

  test('Rendering of the DialogContainer when isOpen is true', async () => {
    const mockFunc = jest.fn();
    const testTitle = 'testTitle';
    const { getByTestId, getByText, queryByTestId } = TestUtils.render(
      <DialogContainer
        id={testId}
        isOpen={true}
        title={testTitle}
        onClose={mockFunc}
      />
    );
    expect(getByText(testTitle)).toBeInTheDocument();
    expect(queryByTestId(testId + dialogSubtitleId)).toBeNull();
    expect(getByTestId(testId + dialogCloseId)).toBeInTheDocument();
  });

  test('Setting Subtitle on DialogContainer', async () => {
    const mockFunc = jest.fn();
    const testTitle = 'testTitle';
    const testSubtitle = 'testSubtitle';
    const { getByTestId, getByText } = TestUtils.render(
      <DialogContainer
        id={testId}
        isOpen={true}
        title={testTitle}
        subtitle={testSubtitle}
        onClose={mockFunc}
      />
    );
    expect(getByText(testTitle)).toBeInTheDocument();
    expect(getByText(testSubtitle)).toBeInTheDocument();
    expect(getByTestId(testId + dialogCloseId)).toBeInTheDocument();
  });
});
