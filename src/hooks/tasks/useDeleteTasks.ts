import { useQueryClient, useMutation } from '@tanstack/react-query';
import Task from '../../entities/Task';
import apiClient from '../../services/api-client';

interface Props {
	onDelete?: () => void;
	onError?: () => void;
}

const useDeleteTask = ({ onDelete = () => {}, onError = () => {} }: Props) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (task: Task) => {
			return apiClient.delete<Task>(`/tasks/${task.id}`).then(res => res.data);
		},
		onSuccess: (_, deletedTask) => {
			queryClient.invalidateQueries({
				queryKey: ['tasks', { status: deletedTask.status }],
			});
			onDelete();
		},
		onError: () => {
			onError();
		},
	});
};

export default useDeleteTask;
