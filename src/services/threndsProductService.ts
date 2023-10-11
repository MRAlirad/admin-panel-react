import APIClient from './apiClient';
import Product from '../entities/Product';

export default new APIClient<Product>('/thrends');
