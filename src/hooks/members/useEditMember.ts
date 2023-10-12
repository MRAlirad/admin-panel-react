import { useMutation, useQueryClient } from '@tanstack/react-query';
import Member from '../../entities/Member';
import memberService from '../../services/memberService';

interface Props {
	onEdit?: () => void;
	onError?: () => void;
}

const useEditTask = ({ onEdit = () => {}, onError = () => {} }: Props) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (member: Member) => memberService.update(member),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['members'],
			});
			onEdit();
		},
		onError: () => {
			onError();
		},
	});
};

export default useEditTask;
