import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import { Theme } from '@material-ui/core/styles';
import styled from 'styled-components';

const materialStyles = (theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  label: {
    fontWeight: theme.typography.fontWeightBold,
  },
});

export const ProductDetailsFormContainer = styled.div`
  ${({ theme }) => {
    const classes = materialStyles(theme);
    return classes.root;
  }};
  display: flex;
  flex-grow: 1;
`;

export const MuiTabs = styled(Tabs)`
  ${({ theme }) => {
    const classes = materialStyles(theme);
    return classes.tabs;
  }};
`;

export const FieldLabel = styled(Typography)`
  ${({ theme }) => {
    const classes = materialStyles(theme);
    return classes.label;
  }};
  display: flex;
  align-items: center;
  height: 100%;
`;

export const FieldValue = styled(Typography)`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const DividerWrapper = styled.div`
  padding: 16px 0px;
  width: 100%;
`;
export const MuiDivider = styled(Divider)``;
export const MuiGrid = styled(Grid)``;
export const MuiTab = styled(Tab)``;
export const MuiTextField = styled(TextField)`
  width: 100%;
`;
export const MuiTypography = styled(Typography)``;
