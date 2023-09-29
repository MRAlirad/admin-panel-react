import apiClient from './api-client';

interface Entity {
	id: number;
}

class HttpService {
	endpoint;

	constructor(endpoint: string) {
		this.endpoint = endpoint;
	}

	get<T>(filterProperty: string  = '', filterEntity: string | number = '') {
		const controller = new AbortController();
		const request = apiClient.get<T[]>(
			`${this.endpoint}${filterEntity ? `?${filterProperty}=${filterEntity}` : ''}`,
			{
				signal: controller.signal,
			}
		);

		return { request, cancel: () => controller.abort() };
	}

	delete<T extends Entity>(entity: T) {
		return apiClient.delete(`${this.endpoint}/${entity.id}`);
	}

	update<T extends Entity>(entity: T) {
		return apiClient.patch(`${this.endpoint}/${entity.id}`, entity);
	}
}

const create = (endpoint: string) => new HttpService(endpoint);

export default create;
