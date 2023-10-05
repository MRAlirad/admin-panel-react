import { useState, useEffect } from 'react';
import History from '../entities/History';
import historyService from '../services/history-service';
import { CanceledError } from '../services/api-client';

const useTasks = () => {
	const [histories, setHistories] = useState<History[]>([]);
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		setError('');

		const { request, cancel } = historyService.get<History>();
		request
			.then(response => {
				setHistories(response.data);
				setIsLoading(false);
			})
			.catch(error => {
				if (error instanceof CanceledError) return;
				setError(error.message);
				setIsLoading(false);
			});
		return () => cancel();
	}, []);

	return { histories, error, isLoading, setHistories, setError };
};

export default useTasks;
