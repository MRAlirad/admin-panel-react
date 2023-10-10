import { useQueryClient, useMutation } from '@tanstack/react-query';
import Task from '../../entities/Task';
import taskService from '../../services/taskService';

interface Props {
	onDelete?: () => void;
	onError?: () => void;
}

const useDeleteTask = ({ onDelete = () => {}, onError = () => {} }: Props) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (task: Task) => taskService.delete(task.id),
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
