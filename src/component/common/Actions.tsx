"use client";
import DeleteBoard from "@/component/popups/board/DeleteBoard";
import EditBoard from "@/component/popups/board/EditBoard";
import AddTask from "@/component/popups/task/AddTask";
import { BoardState } from "@/redux/Types";
import Image from "next/image";
import { useState } from "react";

const Actions = ({ board }: { board: BoardState }) => {
	const [openActions, setOpenActions] = useState(false);
	const [addTask, setAddTask] = useState(false);
	const [editBoard, setEditBoard] = useState(false);
	const [delteBoard, setDeleteBoard] = useState(false);

	return (
		<>
			<button className='button_primary_s' onClick={() => setAddTask(true)}>
				+ Add New Task
			</button>
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
						<button onClick={() => setEditBoard(true)}>Edit Board</button>
						<button onClick={() => setDeleteBoard(true)} className='text_red'>
							Delete Board
						</button>
					</div>
				)}
			</div>
			{editBoard && (
				<EditBoard
					name={board.name}
					columns={board.columns}
					setOpenModal={setEditBoard}
				/>
			)}
			{delteBoard && (
				<DeleteBoard name={board.name} setOpenModal={setDeleteBoard} />
			)}
			{addTask && <AddTask boardName={board.name} setOpenModal={setAddTask} />}
		</>
	);
};

export default Actions;
