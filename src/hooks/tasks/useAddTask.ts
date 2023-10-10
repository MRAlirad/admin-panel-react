import { useMutation, useQueryClient } from '@tanstack/react-query';
import Task from '../../entities/Task';
import apiClient from '../../services/api-client';

interface Props {
	onAddTask?: () => void;
	onErrorAddTask?: () => void;
}

const useAddtask = ({ onAddTask = ()=> {}, onErrorAddTask = ()=> {} }: Props) => {
	const queryClient = useQueryClient();
	return useMutation<Task, Error, Task>({
		mutationFn: async (task: Task) => {
			return apiClient.post<Task>('/tasks', task).then(res => res.data);
		},
		onSuccess: addedTask => {
			queryClient.invalidateQueries({
				queryKey: ['tasks', { status: addedTask.status }],
			});
			onAddTask();
			// queryClient.setQueriesData<Task[]>(['tasks'], totalTasks => [addedTask, ...(totalTasks || [])])
		},
		onError: () => {
			onErrorAddTask();
		},
	});
};

export default useAddtask;
