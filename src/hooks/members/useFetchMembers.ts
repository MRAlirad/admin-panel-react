import { useQuery } from '@tanstack/react-query';
import memberService from '../../services/memberService';
import Member from '../../entities/Member';

const useFetchMember = () => {
	return useQuery<Member[],Error>({
		queryKey: ['members'],
		queryFn: () => memberService.get(),
	});
};

export default useFetchMember;
