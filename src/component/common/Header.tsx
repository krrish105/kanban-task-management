import Actions from "@/component/common/Actions";
import { BoardState } from "@/redux/Types";

const Header = ({ board }: { board: BoardState }) => {
	return (
		<div className='top_nav px-6 py-5 flex justify-between items-center gap-6 h-fit w-full'>
			{/* Top Section */}
			<h1 className='heading_xl'>{board.name}</h1>
			<div className='flex gap-7 items-center'>
				<Actions board={board} />
			</div>
		</div>
	);
};

export default Header;
