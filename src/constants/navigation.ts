interface NavigationRoutes {
  LOGIN: string;
  HOME: string;
  MANAGE_PRODUCTS: string;
}

const NAVIGATION_ROUTES: NavigationRoutes = {
  LOGIN: '/login',
  HOME: '/home',
  MANAGE_PRODUCTS: '/manage/products',
};

const PAGE_TITLES: NavigationRoutes = {
  LOGIN: 'Login',
  HOME: 'Home',
  MANAGE_PRODUCTS: 'Manage Products',
};

export default { PAGE_TITLES, NAVIGATION_ROUTES };
