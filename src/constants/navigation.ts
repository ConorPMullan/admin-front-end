type NavigationTypes = {
  [key: string]: string;
};

const NAVIGATION_ROUTES: NavigationTypes = {
  LOGIN: '/login',
  HOME: '/home',
  WEB_ACCESS: '/web_access',
  RATINGS_AND_REVIEWS: '/ratings_and_reviews',
  ADDRESS: '/address',
  MANAGE_HOME: 'manage/home',
  MANAGE_SHOP_PRODUCTS: 'manage/shop_products',
  MANAGE_PRODUCT_DETAILS: 'manage/product_details',
  MANAGE_ACCOUNTS: 'manage/accounts',
  MANAGE_ORDERS: 'manage/orders',
  MANAGE_FAVORITES: 'manage/favorites',
  MANAGE_NOTIFICATIONS: 'manage/notifications',
  MANAGE_USER_PROFILE: 'manage/user_profile',
  MANAGE_GLOBAL_NAV: 'manage/global_nav',
  MANAGE_FOOTER: 'manage/footer',
};

const PAGE_TITLES: NavigationTypes = {
  LOGIN: 'Login',
  HOME: 'Home',
  WEB_ACCESS: 'Web Access',
  RATINGS_AND_REVIEWS: 'Ratings & Reviews',
  ADDRESS: 'Address',
  MANAGE_HOME: 'Manage Home',
  MANAGE_SHOP_PRODUCTS: 'Manage Shop Products',
  MANAGE_PRODUCT_DETAILS: 'Manage Product Details',
  MANAGE_ACCOUNTS: 'Manage Accounts',
  MANAGE_ORDERS: 'Manage Orders',
  MANAGE_FAVORITES: 'Manage Favorites',
  MANAGE_NOTIFICATIONS: 'Manage Notifications',
  MANAGE_USER_PROFILE: 'Manage User Profile',
  MANAGE_GLOBAL_NAV: 'Manage Global Navigation',
  MANAGE_FOOTER: 'Manage Footer',
};

export default { PAGE_TITLES, NAVIGATION_ROUTES };
