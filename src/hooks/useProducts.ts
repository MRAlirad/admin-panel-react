import { useState, useEffect } from 'react';
import Product from '../entities/Product';
import threndsProductsService from '../services/thrends-products-service';
import viewsProductService from '../services/views-product-service';
import { CanceledError } from '../services/api-client';

const useProducts = (area: string) => {
	const [selectedGroup, setSelectedGroup] = useState('');
	const [products, setProducts] = useState<Product[]>([]);
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		setError('');

		const { request, cancel } =
			area === 'views'
				? viewsProductService.get<Product>('group', selectedGroup)
				: threndsProductsService.get<Product>('group', selectedGroup);
		request
			.then(response => {
				setProducts(response.data);
				setIsLoading(false);
			})
			.catch(error => {
				if (error instanceof CanceledError) return;
				setError(error.message);
				setIsLoading(false);
			});
		return () => cancel();
	}, [area, selectedGroup]);

	return { products, error, isLoading, selectedGroup, setProducts, setError, setSelectedGroup };
};

export default useProducts;
