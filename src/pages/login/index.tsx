import React, { ChangeEvent, ReactElement, useState } from 'react';
import LoginImageSource from '@assets/images/login-image-1.png';
import Paper from '@material-ui/core/Paper';
import { Login as LoginConstants } from '@constants';
import { IUserCredentials } from '@interfaces';
import { AuthService, ValidationService } from '@services';
import { Auth } from '@contexts';
import { AxiosError } from 'axios';
import * as z from 'zod';
import { ZodError, ZodIssue } from 'zod';
import {
  LoginContainer,
  LoginImage,
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

const validationEmail = 'email';
const validationPassword = 'password';

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
      [validationEmail]: z.string().email(),
      [validationPassword]: z.string().min(8),
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
    updateErrorState(validationEmail);
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateErrorState(validationPassword);
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formParse = buildFormValidation();

    try {
      formParse.parse({
        [validationEmail]: email,
        [validationPassword]: password,
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
          <AvatarContainer>
            <AvatarIcon />
          </AvatarContainer>
          <MuiTypography component="h1" variant="h5">
            {LoginConstants.SIGN_IN}
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
                  validationEmail
                )
              }
              helperText={
                showErrors &&
                ValidationService.getErrorMessage(
                  validationErrors,
                  validationEmail
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
                  validationPassword
                )
              }
              helperText={
                showErrors &&
                ValidationService.getErrorMessage(
                  validationErrors,
                  validationPassword
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
