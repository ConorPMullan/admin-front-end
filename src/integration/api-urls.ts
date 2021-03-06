interface ApiUrlTypes {
  readonly AUTHENTICATION_BASE_URL: string;
  readonly AUTHENTICATION_REFRESH: string;
  readonly BASE_URL: string;
  readonly PRODUCTS: string;
  readonly GROUPS_PRODUCT_LINE_OPTIONS: string;
}

const ApiUrls: ApiUrlTypes = {
  AUTHENTICATION_BASE_URL:
    process.env.REACT_APP_AUTHENTICATION_API_URL ||
    'https://qa.pfe-testing.tk/api/authentication/',
  AUTHENTICATION_REFRESH: 'refresh/',
  BASE_URL:
    process.env.REACT_APP_API_URL || 'https://qa.admin.pfe-testing.tk/api/',
  PRODUCTS: 'v1/products/',
  GROUPS_PRODUCT_LINE_OPTIONS: '/v1/groups/productLineGroupOptions',
};

export default ApiUrls;
