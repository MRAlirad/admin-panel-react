import { useQuery } from '@tanstack/react-query';
import Task from '../../entities/Task';
import taskService from '../../services/taskService';

const useFetchTasks = (status: number) => {
	return useQuery<Task[], Error>({
		queryKey: ['tasks', { status }],
		queryFn: () => taskService.get('status', status),
	});
};

export default useFetchTasks;