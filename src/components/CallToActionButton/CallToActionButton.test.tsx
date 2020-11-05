import React from 'react';
import { cleanup } from '@testing-library/react';
import { render } from '@utils/test';
import { theme } from '@styled/theme';
import CallToActionButton from './index';

afterEach(cleanup);

describe('Testing CallToActionButton component', () => {
  test('Renders a CallToActionButton component', () => {
    const { getByTestId } = render(
      <CallToActionButton dataTestId={'call-to-action-button'} label={'test'} />
    );
    expect(getByTestId('call-to-action-button')).toBeInTheDocument();
  });

  test("Has text that matches label prop that's passed to it", () => {
    const { getByTestId } = render(
      <CallToActionButton dataTestId={'call-to-action-button'} label={'test'} />
    );
    expect(getByTestId('call-to-action-button')).toHaveTextContent('test');
  });

  test('Has height that matches prop that is passed to it', () => {
    const { getByTestId } = render(
      <CallToActionButton
        dataTestId={'call-to-action-button'}
        label={'test'}
        height="100px"
      />
    );
    expect(getByTestId('call-to-action-button')).toHaveStyle('height: 100px');
  });

  test('Has default styling when not disabled or inverted', () => {
    const { getByTestId } = render(
      <CallToActionButton dataTestId={'call-to-action-button'} label={'test'} />
    );
    expect(getByTestId('call-to-action-button')).toHaveStyle(
      `background-color: ${theme.colors.orange}`
    );
  });

  test('Body of button is white when inverted', () => {
    const { getByTestId } = render(
      <CallToActionButton
        dataTestId={'call-to-action-button'}
        inverted={true}
        label={'test'}
      />
    );
    expect(getByTestId('call-to-action-button')).toHaveStyle(
      'background-color: transparent'
    );
  });

  test('Button is disabled when disabled prop is passed to it', () => {
    const { getByTestId } = render(
      <CallToActionButton
        dataTestId={'call-to-action-button'}
        disabled={true}
        label={'test'}
      />
    );
    expect(getByTestId('call-to-action-button')).toBeDisabled();
  });
});
