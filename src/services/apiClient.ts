import axios from 'axios';

interface Entity {
	id: number;
}

const axiosInstance = axios.create({
	baseURL: 'http://localhost:3500',
});

class APIClient<T> {
	endpoint: string;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	get = async (filterProperty: string = '', filterEntity: string | number = '') => {
		return axiosInstance
			.get<T[]>(`${this.endpoint}${filterProperty ? `?${filterProperty}=${filterEntity}` : ''}`)
			.then(res => res.data);
	};

	post = async (data: T) => {
		return axiosInstance.post<T>(this.endpoint, data).then(res => res.data);
	};

	update = async <T extends Entity>(entity: T) => {
		return axiosInstance.patch(`${this.endpoint}/${entity.id}`, entity).then(res => res.data);
	}

	delete = async (id: number) => {
		return axiosInstance.delete<T>(`${this.endpoint}/${id}`);
	};
}

export default APIClient;
