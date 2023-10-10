import { useQuery } from '@tanstack/react-query';
import apiClient from '../../services/api-client';
import Product from '../../entities/Product';

const useFetchProducts = (area: string, group: string) => {
	const FetchProducts = async () => {
		return apiClient.get<Product[]>(`/${area}${group ? `?group=${group}` : ''}`).then(res => res.data);
	};

	return useQuery<Product[], Error>({
		queryKey: group ? ['products', area, group] : ['products', area],
		queryFn: FetchProducts,
	});
};

export default useFetchProducts;
