import { useMutation, useQueryClient } from '@tanstack/react-query';
import Product from '../../entities/Product';
import threndsProductService from '../../services/threndsProductService';
import viewsProductService from '../../services/viewsProductService';

interface Props {
	area: string;
	group: string;
	onEdit?: () => void;
	onError?: () => void;
}

const useEditProduct = ({ area, group, onEdit = () => {}, onError = () => {} }: Props) => {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: async (product: Product) => {
			if(area === 'thrends')
				return threndsProductService.update(product);
			else
				return viewsProductService.update(product);
		},
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: group ? ['products', area, group] : ['products', area],
			});
			onEdit();
		},
		onError: () => {
			onError();
		},
	});
};

export default useEditProduct;
