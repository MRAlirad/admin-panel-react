import apiClient from './api-client';
import Product from '../entities/Product';

class ProductService {
	getProducts(area: string, selectedGroup: string) {
		const controller = new AbortController();

		const request = apiClient.get<Product[]>(`/${area}${selectedGroup ? `?group=${selectedGroup}` : ''}`, {
			signal: controller.signal,
		});

		return { request, cancel: () => controller.abort() };
	}

	productToggleFavourite(area: string, product: Product) {
		return apiClient.patch(`/${area}/${product.id}`, product);
	}
}

export default new ProductService();
