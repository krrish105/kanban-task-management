"use client";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { deleteTask } from "@/redux/features/board-slice";

const DeleteTask = ({
	name,
	setOpenModal,
}: {
	name: string;
	setOpenModal: any;
}) => {
	const dispatch = useDispatch<AppDispatch>();

	return (
		<>
			<div className='backdrop' onClick={() => setOpenModal(false)}></div>
			<aside className='modal' id='delete_board'>
				<div className='flex flex-col gap-6'>
					<h1 className='heading_l text_red'>Delete this task?</h1>

					<div>
						<p className='text_medium text_medium_grey'>
							Are you sure you want to delete the ‘Build settings UI’ task and
							its subtasks? This action cannot be reversed.
						</p>
					</div>
					<div className='flex gap-4'>
						<button
							type='submit'
							className='button_desctructive w-full'
							onClick={() => dispatch(deleteTask({ name: name }))}
						>
							Delete
						</button>
						<button
							type='submit'
							className='button_secondary w-full'
							onClick={() => setOpenModal(false)}
						>
							Cancel
						</button>
					</div>
				</div>
			</aside>
		</>
	);
};
export default DeleteTask;
