import History from '../entities/History';
import { useQuery } from "@tanstack/react-query";
import APIClient from '../services/apiClient';

const apiClient = new APIClient<History>('/history')

const useHistory = () => {
	return useQuery<History[], Error>({
		queryKey: ['history'],
		queryFn : apiClient.getAll
	});
}

export default useHistory