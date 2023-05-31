export type updateTaskFn = (task: ITask) => void;
export type removeTaskFn = (id: string) => void;

export interface IListCardProps {
	id: string;
	content: string;
	completed: boolean;

	updateTask: updateTask;
	removeTask: removeTask;
}
