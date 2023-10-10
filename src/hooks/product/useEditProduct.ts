import { useMutation, useQueryClient } from '@tanstack/react-query';
import Product from '../../entities/Product';
import apiClient from '../../services/api-client';

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
			return apiClient.patch<Product>(`${area}/${product.id}`, product);
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
