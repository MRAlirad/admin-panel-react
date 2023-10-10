import { useMutation, useQueryClient } from '@tanstack/react-query';
import Task from '../../entities/Task';
import apiClient from '../../services/api-client';

interface Props {
	onAdd?: () => void;
	onError?: () => void;
}

const useAddtask = ({ onAdd = ()=> {}, onError = ()=> {} }: Props) => {
	const queryClient = useQueryClient();
	return useMutation<Task, Error, Task>({
		mutationFn: async (task: Task) => {
			return apiClient.post<Task>('/tasks', task).then(res => res.data);
		},
		onSuccess: addedTask => {
			queryClient.invalidateQueries({
				queryKey: ['tasks', { status: addedTask.status }],
			});
			// queryClient.setQueriesData<Task[]>(['tasks'], totalTasks => [addedTask, ...(totalTasks || [])])
			onAdd();
		},
		onError: () => {
			onError();
		},
	});
};

export default useAddtask;
