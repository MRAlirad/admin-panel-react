// import { useState, useEffect } from 'react';
import History from '../entities/History';
// import historyService from '../services/history-service';
// import { CanceledError } from '../services/api-client';

import { useQuery } from "@tanstack/react-query";
import axios from "axios";

// const useHistory = () => {
// 	const [histories, setHistories] = useState<History[]>([]);
// 	const [error, setError] = useState('');
// 	const [isLoading, setIsLoading] = useState(false);

// 	const getHistories = () => {
// 		setIsLoading(true);
// 		setError('');

// 		const { request, cancel } = historyService.get<History>();
// 		request
// 			.then(response => {
// 				setHistories(response.data);
// 				setIsLoading(false);
// 			})
// 			.catch(error => {
// 				if (error instanceof CanceledError) return;
// 				setError(error.message);
// 				setIsLoading(false);
// 			});
// 		return () => cancel();
// 	};

// 	const refresh = () => {
// 		getHistories();
// 	};

// 	useEffect(() => {
// 		getHistories();
// 	}, []);

// 	return { histories, error, isLoading, setHistories, setError, refresh };
// };

// export default useHistory;


const useHistory = () => {
	const FetchHistory = async ()=> {
		return axios
			.get<History[]>("http://localhost:3500/history")
			.then(res => res.data)
		;
	};

	return useQuery<History[], Error>({
		queryKey: ['history'],
		queryFn : FetchHistory
	})
}

export default useHistory