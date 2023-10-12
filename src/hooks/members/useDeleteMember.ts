import { useMutation, useQueryClient } from '@tanstack/react-query';
import memberService from '../../services/memberService';
import Member from '../../entities/Member';

interface Props {
	onDelete?: () => void;
	onError?: () => void;
}

const useDeleteMember = ({ onDelete = () => {}, onError = () => {} }: Props) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (member: Member) => memberService.delete(member.id),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['members']
			});
			onDelete();
		},
		onError: () => {
			onError();
		},
	});
};

export default useDeleteMember;
