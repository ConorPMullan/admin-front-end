interface ApiUrlTypes {
  readonly AUTHENTICATION: string;
  readonly BASE: string;
}

const ApiUrls: ApiUrlTypes = {
  AUTHENTICATION:
    process.env.REACT_APP_AUTHENTICATION_API_URL ||
    'https://qa.pfe-testing.tk/api/authentication/',
  BASE: process.env.REACT_APP_API_URL || 'https://admin.qa.pfe-testing.tk/api/',
};

export default ApiUrls;
