"use client";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { deleteBoard } from "@/redux/features/board-slice";

const DeleteBoard = ({
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
					<h1 className='heading_l text_red'>Delete this board?</h1>

					<div>
						<p className='text_medium text_medium_grey'>
							Are you sure you want to delete the ‘Platform Launch’ board? This
							action will remove all columns and tasks and cannot be reversed.
						</p>
					</div>
					<div className='flex gap-4'>
						<button
							type='submit'
							className='button_desctructive w-full'
							onClick={() => dispatch(deleteBoard({ name: name }))}
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
export default DeleteBoard;
