import History from '../entities/History';
import { useQuery } from "@tanstack/react-query";
import historyService from '../services/historyService';

const useHistory = () => {
	return useQuery<History[], Error>({
		queryKey: ['history'],
		queryFn : historyService.getAll,
	});
}

export default useHistory;