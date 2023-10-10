import { useMutation, useQueryClient } from '@tanstack/react-query';
import apiClient from '../../services/api-client';
import Task from '../../entities/Task';

interface Props {
	onEditTask?: () => void;
	onErrorEditTask?: () => void;
}

const useEditTask = ({ onEditTask = () => {}, onErrorEditTask = () => {} }: Props) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (task: Task) => {
			return apiClient.patch<Task>(`/tasks/${task.id}`, task).then(res => res.data);
		},
		onSuccess: editedTask => {
			queryClient.invalidateQueries({
				queryKey: ['tasks', { status: editedTask.status }],
			});
			onEditTask();
		},
		onError: () => {
			onErrorEditTask();
		},
	});
};

export default useEditTask;
