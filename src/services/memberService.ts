import APIClient from './apiClient';
import Member from '../entities/Member';

export default new APIClient<Member>('/members');
