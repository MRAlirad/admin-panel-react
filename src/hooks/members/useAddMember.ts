import { useMutation, useQueryClient } from '@tanstack/react-query';
import Member from '../../entities/Member';
import memberService from '../../services/memberService';


interface Props {
	onAdd?: () => void;
	onError?: () => void;
}

const useAddMember = ({ onAdd = () => {}, onError = () => {} }: Props) => {
	const queryClient = useQueryClient();

	return useMutation<Member, Error, Member>({
		mutationFn: async (member: Member) => memberService.post(member),
		onSuccess: () => {
			queryClient.invalidateQueries({
				queryKey: ['members'],
			});
			onAdd();
		},
		onError: () => {
			onError();
		},
	});
};

export default useAddMember;
