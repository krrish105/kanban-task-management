"use client";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import BoardName from "@/component/LeftMenu/BoardName";
import Image from "next/image";
import AddBoard from "@/component/popups/board/AddBoard";
import CreateBoard from "@/component/LeftMenu/CreateBoard";

const AllBoards = ({
	activeLink,
}: {
	activeLink: string | undefined | null;
}) => {
	const InitialState = useSelector((state: RootState) => state.boardSlice);

	return (
		<div>
			<div className='heading_s mx-4 mb-4'>
				All Boards ({InitialState.boards.length})
			</div>
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
				<CreateBoard />
			</div>
		</div>
	);
};
export default AllBoards;
