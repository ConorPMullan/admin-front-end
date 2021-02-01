import React, { ChangeEvent, ReactElement, useState } from 'react';
import LoginImageSource from '@assets/images/login-image-1.png';
import Paper from '@material-ui/core/Paper';
import { Login as LoginConstants } from '@constants';
import { IUserCredentials } from '@interfaces';
import { AuthService } from '@services';
import { Auth } from '@contexts';
import { AxiosError } from 'axios';

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

const Login: React.FC = (): ReactElement => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<AxiosError>();

  const context = React.useContext(Auth.AuthContext);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(undefined);

    // TODO: validation engine call here

    const userCredentials: IUserCredentials = {
      email,
      password,
    };

    AuthService.login(userCredentials)
      .then((response) => {
        const userSession = response.data;
        if (context) {
          context.updateUserSession(userSession);
        }
      })
      .catch((err: AxiosError) => {
        setError(err);
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
          <FormWrapper onSubmit={handleSubmit} noValidate>
            <MuiTextField
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
            {error && (
              <MuiTypography color="error">
                {LoginConstants.INVALID_CREDENTIALS}
              </MuiTypography>
            )}
            {isLoading ? (
              <LoadingWrapper>
                <LoadingAnimation />
              </LoadingWrapper>
            ) : (
              <MuiButton
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
