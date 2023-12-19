"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import BoardName from "@/component/LeftMenu/BoardName";
import Image from "next/image";

const AllBoards = ({ activeLink }: { activeLink: string }) => {
	const InitialState = useSelector((state: RootState) => state.boardSlice);

	return (
		<div>
			<div className='heading_s mx-4 mb-4'>All Boards (3)</div>
			<div>
				{InitialState.boards.length > 0 &&
					InitialState.boards.map((el, i) => {
						return (
							<div
								key={el.name}
								className={`board_name ${el.name === activeLink && "active"}`}
							>
								<BoardName name={el.name} />
							</div>
						);
					})}
				<button className='create_new flex items-center gap-3 py-3 px-4'>
					<Image src='/assets/icon-board.svg' alt='' width={16} height={16} />
					<span>+ Create New Board</span>
				</button>
			</div>
		</div>
	);
};
export default AllBoards;
