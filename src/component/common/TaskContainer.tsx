"use client";
import { SubTaskState, TaskState } from "@/redux/Types";
import Task from "@/component/popups/task/Task";
import { useState } from "react";
import DeleteTask from "@/component/popups/task/DeleteTask";
import EditTask from "@/component/popups/task/EditTask";

const TaskContainer = ({ task }: { task: TaskState }) => {
	const [openModal, setOpenModal] = useState(false);
	let completedSubtasks = task.subtasks.filter(
		(el: SubTaskState, i: number) => el.isCompleted
	);
	const [editTask, setEditTask] = useState(false);
	const [deleteTask, setDeleteTask] = useState(false);

	return (
		<>
			<div className='task_col' onClick={() => setOpenModal(true)}>
				<span className='heading_m'>{task.title}</span>
				<span className='text_medium'>
					{completedSubtasks.length} of {task.subtasks.length} subtasks
				</span>
			</div>
			{openModal && (
				<Task
					task={task}
					setOpenModal={setOpenModal}
					setEditTask={setEditTask}
					setDeleteTask={setDeleteTask}
					completedSubtasks={completedSubtasks.length}
				/>
			)}
			{editTask && <EditTask task={task} setOpenModal={setEditTask} />}
			{deleteTask && (
				<DeleteTask name={task.title} setOpenModal={setDeleteTask} />
			)}
		</>
	);
};
export default TaskContainer;
