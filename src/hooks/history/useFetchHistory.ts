import History from '../../entities/History';
import { useQuery } from '@tanstack/react-query';
import historyService from '../../services/historyService';

const useFetchHistory = () => {
	return useQuery<History[], Error>({
		queryKey: ['history'],
		queryFn: ()=> historyService.get(),
	});
};

export default useFetchHistory;
