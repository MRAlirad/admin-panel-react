import { useMutation, useQueryClient } from '@tanstack/react-query';
import Task from '../../entities/Task';
import taskService from '../../services/taskService';

interface Props {
	onEdit?: () => void;
	onError?: () => void;
}

const useEditTask = ({ onEdit = () => {}, onError = () => {} }: Props) => {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: async (task: Task) => taskService.update(task),
		onSuccess: editedTask => {
			queryClient.invalidateQueries({
				queryKey: ['tasks', { status: editedTask.status }],
			});
			onEdit();
		},
		onError: () => {
			onError();
		},
	});
};

export default useEditTask;
