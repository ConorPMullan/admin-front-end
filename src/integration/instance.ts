import axios from 'axios';
import { ApiUrls } from '@integration';

const Instance = axios.create({ baseURL: ApiUrls.BASE_URL });

export default Instance;
