import React from 'react';
import { cleanup, fireEvent, waitFor } from '@testing-library/react';
import { render } from '@test-utils';
import Login from './index';
import { AuthService } from '@services';
import { AxiosError } from 'axios';

afterEach(cleanup);

const emailFieldId = 'login-field-email';
const loadingAnimationId = 'login-loading';
const loadingErrorId = 'login-error';
const passwordFieldId = 'login-field-password';
const submitButtonId = 'login-form-button-submit';

describe('Login Tests', () => {
  test('renders the Login page', () => {
    const { getByTestId, queryByTestId } = render(<Login />);
    expect(getByTestId(emailFieldId)).toBeInTheDocument();
    expect(getByTestId(passwordFieldId)).toBeInTheDocument();
    expect(getByTestId(submitButtonId)).toBeInTheDocument();
    expect(queryByTestId(loadingAnimationId)).toBeNull();
    expect(queryByTestId(loadingErrorId)).toBeNull();
  });

  test('Simulating Email Input', () => {
    const { getByTestId } = render(<Login />);

    const emailField = getByTestId(emailFieldId) as HTMLInputElement;
    const emailText = 'testEmail';
    fireEvent.change(emailField, { target: { value: emailText } });

    expect(emailField.value).toBe(emailText);
  });

  test('Simulating Password Input', () => {
    const { getByTestId } = render(<Login />);

    const passwordField = getByTestId(passwordFieldId) as HTMLInputElement;
    const passwordText = 'testPass';
    fireEvent.change(passwordField, { target: { value: passwordText } });

    expect(passwordField.value).toBe(passwordText);
  });

  test('Form Submission with Email and Password set shows loading animation and hides submit button', async () => {
    const { getByTestId, queryByTestId } = render(<Login />);

    const submitButton = getByTestId(submitButtonId);
    fireEvent.click(submitButton);

    await getByTestId(loadingAnimationId);
    expect(queryByTestId(submitButtonId)).toBeNull();
  });

  test('Form Submission error shows error text', async () => {
    const { getByTestId, queryByTestId } = render(<Login />);

    const error: AxiosError = {
      config: {},
      isAxiosError: false,
      toJSON: () => Object,
      name: '',
      message: '',
    };

    const promise = Promise.reject(error);
    const mockResponse = jest.fn(() => promise);
    AuthService.login = mockResponse;

    const submitButton = getByTestId(submitButtonId);
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(getByTestId(loadingErrorId)).toBeInTheDocument();
    });
    expect(queryByTestId(loadingAnimationId)).toBeNull();
    expect(getByTestId(submitButtonId)).toBeInTheDocument();
  });
});