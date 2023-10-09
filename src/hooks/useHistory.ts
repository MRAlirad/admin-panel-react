import History from '../entities/History';
import apiClient from '../services/api-client';
import { useQuery } from "@tanstack/react-query";
// import axios from "axios";

const useHistory = () => {
	const FetchHistory = async ()=> {
		return apiClient
			.get<History[]>("/history")
			.then(res => res.data)
		;
	};

	return useQuery<History[], Error>({
		queryKey: ['history'],
		queryFn : FetchHistory
	})
}

export default useHistory