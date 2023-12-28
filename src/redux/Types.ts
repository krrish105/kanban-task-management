export type SubTaskState = {
	title: string;
	isCompleted: boolean;
};
export type TaskState = {
	title: string;
	description: string;
	status: string;
	subtasks: SubTaskState[];
};
export type ColumnState = {
	name: string;
	tasks: TaskState[];
};
export type BoardState = {
	name: string;
	columns: ColumnState[];
};

export type MainState = {
	boards: BoardState[];
	error: string;
};
