import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { IPropsMaterial } from '@interfaces';
import { Theme } from '@material-ui/core/styles';
import styled from 'styled-components';

const materialStyles = (theme: Theme) => ({
  paper: {
    padding: theme.spacing(2),
  },
});

export const MuiPaper = styled(Paper)<IPropsMaterial>`
  display: flex;
  overflow: auto;
  flex-direction: column;

  ${({ theme }) => {
    const classes = materialStyles(theme);
    return {
      ...classes.paper,
    };
  }};
`;

export const MuiGrid = styled(Grid)<IPropsMaterial>``;
export const MuiTypography = styled(Typography)<IPropsMaterial>``;
