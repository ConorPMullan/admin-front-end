import React, { ChangeEvent, ReactElement, useState } from 'react';
import * as z from 'zod';
import LoginImageSource from '@assets/images/login-image-1.png';
import PFXLogoWhite from '@assets/images/pfx-logo-white.png';
import Paper from '@material-ui/core/Paper';
import {
  Login as LoginConstants,
  Validation as ValidationConstants,
} from '@constants';
import { IUserCredentials } from '@interfaces';
import { AuthService, ValidationService } from '@services';
import { Auth } from '@contexts';
import { AxiosError } from 'axios';
import { ZodError, ZodIssue } from 'zod';
import {
  LoginContainer,
  LoginImage,
  LogoImage,
  MuiGrid,
  LoadingAnimation,
  LoadingWrapper,
  LoginFormWrapper,
  AvatarContainer,
  AvatarIcon,
  MuiTypography,
  MuiTextField,
  MuiButton,
  FormWrapper,
} from './styled';

const Login: React.FC = (): ReactElement => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);
  const [requestError, setRequestError] = useState<AxiosError>();
  const [showErrors, setErrorVisibility] = useState<boolean>(false);
  const [validationErrors, setValidationErrors] = useState<ZodIssue[]>([]);

  const context = React.useContext(Auth.AuthContext);

  const buildFormValidation = () => {
    return z.object({
      [ValidationConstants.LOGIN_FORM_EMAIL.FIELD]:
        ValidationConstants.LOGIN_FORM_EMAIL.VALIDATION,
      [ValidationConstants.LOGIN_FORM_PASSWORD.FIELD]:
        ValidationConstants.LOGIN_FORM_PASSWORD.VALIDATION,
    });
  };

  const updateErrorState = (field: string) => {
    const updatedErrors = ValidationService.removeError(
      validationErrors,
      field
    );
    setValidationErrors(updatedErrors);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateErrorState(ValidationConstants.LOGIN_FORM_EMAIL.FIELD);
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateErrorState(ValidationConstants.LOGIN_FORM_PASSWORD.FIELD);
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formParse = buildFormValidation();

    try {
      formParse.parse({
        [ValidationConstants.LOGIN_FORM_EMAIL.FIELD]: email,
        [ValidationConstants.LOGIN_FORM_PASSWORD.FIELD]: password,
      });

      setLoading(true);
      setRequestError(undefined);
      submitLogin();
    } catch (err) {
      if (err && err instanceof ZodError) {
        setErrorVisibility(true);
        setValidationErrors(err.errors);
      }
    }
  };

  const submitLogin = () => {
    const userCredentials: IUserCredentials = {
      email,
      password,
    };

    AuthService.login(userCredentials)
      .then((response) => {
        if (context) {
          const userSession = response.data;
          context.updateUserSession(userSession);
        }
      })
      .catch((err: AxiosError) => {
        setRequestError(err);
        setLoading(false);
      });
  };

  return (
    <LoginContainer container component="main">
      <LoginImage item xs={false} sm={4} md={7} $src={LoginImageSource} />
      <MuiGrid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
      >
        <LoginFormWrapper>
          <MuiGrid>
            <LogoImage $src={PFXLogoWhite} />
          </MuiGrid>
          <MuiTypography component="h1" variant="h5">
            {LoginConstants.SIGN_IN}
          </MuiTypography>
          <MuiTypography variant="subtitle1">
            {LoginConstants.WELCOME}
          </MuiTypography>
          <FormWrapper
            datat-testid="login-form"
            onSubmit={handleSubmit}
            noValidate
          >
            <MuiTextField
              error={
                showErrors &&
                ValidationService.isFieldValid(
                  validationErrors,
                  ValidationConstants.LOGIN_FORM_EMAIL.FIELD
                )
              }
              helperText={
                showErrors &&
                ValidationService.getErrorMessage(
                  validationErrors,
                  ValidationConstants.LOGIN_FORM_EMAIL.FIELD
                )
              }
              inputProps={{ 'data-testid': 'login-field-email' }}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={handleEmailChange}
              autoFocus
            />
            <MuiTextField
              error={
                showErrors &&
                ValidationService.isFieldValid(
                  validationErrors,
                  ValidationConstants.LOGIN_FORM_PASSWORD.FIELD
                )
              }
              helperText={
                showErrors &&
                ValidationService.getErrorMessage(
                  validationErrors,
                  ValidationConstants.LOGIN_FORM_PASSWORD.FIELD
                )
              }
              inputProps={{ 'data-testid': 'login-field-password' }}
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={handlePasswordChange}
              autoComplete="current-password"
            />
            {requestError && (
              <MuiTypography data-testid="login-error" color="error">
                {LoginConstants.INVALID_CREDENTIALS}
              </MuiTypography>
            )}
            {isLoading ? (
              <LoadingWrapper>
                <LoadingAnimation data-testid="login-loading" />
              </LoadingWrapper>
            ) : (
              <MuiButton
                data-testid="login-form-button-submit"
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                {LoginConstants.SIGN_IN}
              </MuiButton>
            )}
          </FormWrapper>
        </LoginFormWrapper>
      </MuiGrid>
    </LoginContainer>
  );
};

export default Login;
