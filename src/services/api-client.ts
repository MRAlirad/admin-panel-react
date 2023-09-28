import axios, { CanceledError } from 'axios';

export default axios.create({
	baseURL: 'http://localhost:3500',
});

export { CanceledError };
