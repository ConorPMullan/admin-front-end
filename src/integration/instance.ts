import axios from 'axios';
import ApiUrls from './api-urls';

const Instance = axios.create({ baseURL: ApiUrls.BASE_URL });

export default Instance;
