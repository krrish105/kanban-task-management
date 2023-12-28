"use client";
import Image from "next/image";
import AddBoard from "@/component/popups/board/AddBoard";
import { useState } from "react";

const CreateBoard = () => {
	const [openModal, setOpenModal] = useState(false);

	return (
		<>
			<button
				className='create_new flex items-center gap-3 py-3 px-4'
				onClick={() => setOpenModal(true)}
			>
				<Image src='/assets/icon-board.svg' alt='' width={16} height={16} />
				<span>+ Create New Board</span>
			</button>
			{openModal && <AddBoard setOpenModal={setOpenModal} />}
		</>
	);
};

export default CreateBoard;
