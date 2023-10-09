import { useQuery } from "@tanstack/react-query";
import Task from "../entities/Task"
import apiClient from "../services/api-client"

const useTasks = (status:number) => {
	const FetchTasks = async ()=> {
		return apiClient
			.get<Task[]>(`/tasks?status=${status}`)
			.then(res => res.data)
		;
	};

	return useQuery<Task[], Error>({
		queryKey : ['tasks', {status}],
		queryFn : FetchTasks,
	});
}

export default useTasks;



// import { useState, useEffect } from 'react';
// import Task from '../entities/Task';
// import tasksService from '../services/tasks-service';
// import { CanceledError } from '../services/api-client';

// const useTasks = (status: number) => {
// 	const [tasks, setTasks] = useState<Task[]>([]);
// 	const [error, setError] = useState('');
// 	const [isLoading, setIsLoading] = useState(false);

// 	useEffect(() => {
// 		setIsLoading(true);
// 		setError('');

// 		const { request, cancel } = tasksService.get<Task>('status', status);
// 		request
// 			.then(response => {
// 				setTasks(response.data);
// 				setIsLoading(false);
// 			})
// 			.catch(error => {
// 				if (error instanceof CanceledError) return;
// 				setError(error.message);
// 				setIsLoading(false);
// 			});
// 		return () => cancel();
// 	}, [status]);

// 	return { tasks, error, isLoading, status, setTasks, setError };
// };

// export default useTasks;
