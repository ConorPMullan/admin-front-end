import React, { ReactElement } from 'react';
import { Navigation } from '@constants';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  useLocation,
} from 'react-router-dom';
import { Omit } from '@material-ui/types';
import ListItem from '@material-ui/core/ListItem';
import {
  NavigationListItemContainer,
  NavigationListItemIcon,
  NavigationListItemText,
} from './styled';

interface ListItemLinkProps {
  icon?: React.ReactElement;
  dataTestId: string;
  text: string;
  to: string;
}

const NavigationItem = (props: ListItemLinkProps): ReactElement => {
  const { icon, text, to, dataTestId } = props;

  const renderLink = React.useMemo(
    () =>
      React.forwardRef<never, Omit<RouterLinkProps, 'to'>>((itemProps, ref) => {
        // eslint-disable-next-line react/jsx-props-no-spreading
        return <RouterLink to={to} ref={ref} {...itemProps} />;
      }),
    [to]
  );

  const { pathname } = useLocation();
  const isActive =
    to !== Navigation.NAVIGATION_ROUTES.HOME &&
    pathname.toUpperCase() === to.toUpperCase();

  return (
    <NavigationListItemContainer data-testid={dataTestId}>
      <ListItem button component={renderLink} selected={isActive}>
        {icon ? <NavigationListItemIcon>{icon}</NavigationListItemIcon> : null}
        <NavigationListItemText primary={text} />
      </ListItem>
    </NavigationListItemContainer>
  );
};

NavigationItem.defaultProps = {
  icon: undefined,
};

export default NavigationItem;
