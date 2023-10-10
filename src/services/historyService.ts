import APIClient from './apiClient';
import History from '../entities/History';

export default new APIClient<History>('/history');
