import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { Theme } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

const materialStyles = (theme: Theme) => ({
  root: {
    height: '100vh',
  },
  paper: {
    margin: theme.spacing(8, 4),
  },
  image: {
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
});

interface IProps {
  component?: string | typeof Paper | null;
  elevation?: number;
  square?: boolean;
  $src?: string | undefined;
}

export const LoginContainer = styled(Grid)<IProps>`
  ${({ theme }) => {
    const classes = materialStyles(theme);
    return classes.root;
  }};
`;

export const LoginImage = styled(Grid)<IProps>`
  background-image: ${({ $src }) => ($src ? `url(${$src})` : '')};

  ${({ theme }) => {
    const classes = materialStyles(theme);
    return classes.image;
  }};
`;

export const MuiGrid = styled(Grid)<IProps>``;

export const LoginFormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ theme }) => {
    const classes = materialStyles(theme);
    return classes.paper;
  }};
`;

export const AvatarContainer = styled(Avatar)`
  ${({ theme }) => {
    const classes = materialStyles(theme);
    return classes.avatar;
  }};
`;

export const AvatarIcon = styled(LockOutlinedIcon)``;

export const MuiTypography = styled(Typography)<IProps>``;
export const MuiTextField = styled(TextField)``;

export const MuiButton = styled(Button)`
  ${({ theme }) => {
    const classes = materialStyles(theme);
    return classes.submit;
  }};
`;

export const FormWrapper = styled.form`
  ${({ theme }) => {
    const classes = materialStyles(theme);
    return classes.form;
  }};
`;
