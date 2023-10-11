import APIClient from './apiClient';
import Task from '../entities/Task';

export default new APIClient<Task>('/tasks');
