/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled from 'styled-components';
import Container, { ContainerProps } from '@material-ui/core/Container';
import { Theme } from '@material-ui/core/styles';

const materialStyles = (theme: Theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  toolbar: {
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
});

export const PageMain = styled.main`
  flex-grow: 1;
  height: 100vh;
  overflow: auto;
`;

export const PageToolbar = styled.div`
  ${({ theme }) => {
    const classes = materialStyles(theme);
    let styles = {};
    styles = {
      ...classes.toolbar,
    };
    return styles;
  }};
`;

export const PageContentContainer = styled(Container)<ContainerProps>`
  ${({ theme }) => {
    const classes = materialStyles(theme);
    return {
      ...classes.container,
    };
  }};
`;
