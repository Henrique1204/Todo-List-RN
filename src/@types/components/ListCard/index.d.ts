export type updateTaskFn = (id: number, completed: boolean) => void;
export type removeTaskFn = (id: number) => void;

export interface IListCardProps {
	id: number;
	content: string;
	completed: boolean;

	updateTask: updateTask;
	removeTask: removeTask;
}
