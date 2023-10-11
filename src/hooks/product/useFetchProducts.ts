import { useQuery } from '@tanstack/react-query';
import Product from '../../entities/Product';
import threndsProductService from '../../services/threndsProductService';
import viewsProductService from '../../services/viewsProductService';

const useFetchProducts = (area: string, group: string) => {
	const FetchProducts = async () => {
		if(area === 'thrends')
			return threndsProductService.get(group ? 'group' : '', group);
		else
			return viewsProductService.get(group ? 'group' : '', group);
	};

	return useQuery<Product[], Error>({
		queryKey: group ? ['products', area, group] : ['products', area],
		queryFn: FetchProducts,
	});
};

export default useFetchProducts;
