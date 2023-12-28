import { TaskState } from "@/redux/Types";
import { useState } from "react";
import Image from "next/image";

const Task = ({
	task,
	setOpenModal,
	setEditTask,
	setDeleteTask,
	completedSubtasks,
}: {
	task: TaskState;
	setOpenModal: any;
	setEditTask: any;
	setDeleteTask: any;
	completedSubtasks: number;
}) => {
	const [openActions, setOpenActions] = useState(false);

	return (
		<>
			<div className='backdrop' onClick={() => setOpenModal(false)}></div>
			<aside className='modal max-w-sm' id='task'>
				<div className='flex flex-col gap-6'>
					<div className='flex justify-between'>
						<h1 className='heading_l'>{task.title}</h1>
						<div className='relative'>
							<button
								onClick={() => setOpenActions((prev) => !prev)}
								className='px-2'
							>
								<Image
									src='/assets/icon-vertical-ellipsis.svg'
									alt=''
									width={5}
									height={20}
								/>
								<span className='sr-only'>Open Actions</span>
							</button>

							{openActions && (
								<div className='action_container'>
									<button
										onClick={() => {
											setOpenModal(false);
											setEditTask(true);
										}}
									>
										Edit Task
									</button>
									<button
										onClick={() => {
											setOpenModal(false);
											setDeleteTask(true);
										}}
										className='text_red'
									>
										Delete Task
									</button>
								</div>
							)}
						</div>
					</div>
					<div>
						{task.description && (
							<p className='text_medium text_medium_grey mb-6'>
								{task.description}
							</p>
						)}
						<div className='mb-6'>
							<span className='text_bold text_white'>
								Subtasks ({completedSubtasks} of {task.subtasks.length})
							</span>
							<ul className='flex flex-col gap-2 mt-4'>
								{task.subtasks.length &&
									task.subtasks.map((el, i) => {
										return (
											<li className='form_group checkbox' key={el.title}>
												<input
													type='checkbox'
													name={`subtask-${el.title.replaceAll(" ", "")}`}
													id={`subtask-${el.title.replaceAll(" ", "")}`}
													checked={el.isCompleted}
												/>
												<label
													htmlFor={`subtask-${el.title.replaceAll(" ", "")}`}
												>
													{el.title}
												</label>
											</li>
										);
									})}
							</ul>
						</div>
						<div className='form_group'>
							<label htmlFor='status'>Current Status</label>
							<select name='status' id='status'></select>
						</div>
					</div>
				</div>
			</aside>
		</>
	);
};
export default Task;
