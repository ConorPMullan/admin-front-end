import styled from 'styled-components';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { Theme } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { IPropsMaterial } from '@interfaces';

const materialStyles = (theme: Theme) => ({
  paper: {
    margin: theme.spacing(8, 4),
  },
  image: {
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
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

export const LoginContainer = styled(Grid)<IPropsMaterial>`
  height: 100vh;
`;

export const LoginImage = styled(Grid)<IPropsMaterial>`
  background-image: ${({ $src }) => ($src ? `url(${$src})` : '')};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  ${({ theme }) => {
    const classes = materialStyles(theme);
    return classes.image;
  }};
`;

export const MuiGrid = styled(Grid)<IPropsMaterial>``;

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

export const MuiTypography = styled(Typography)<IPropsMaterial>``;
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

export const LoadingWrapper = styled.div`
  display: flex;
  width: 100%;

  ${({ theme }) => {
    const classes = materialStyles(theme);
    return classes.submit;
  }};
`;

export const LoadingAnimation = styled(CircularProgress)`
  margin: auto;
`;
