import Image from "next/image";
import Link from "next/link";

const BoardName = ({ name }: { name: string }) => {
	let slug = name.toLowerCase().split(" ").join("-");

	return (
		<Link
			href={`/board/${slug}`}
			className='py-3 px-4 heading_m flex items-center gap-3'
		>
			<Image src='/assets/icon-board.svg' alt='' width={16} height={16} />
			<span>{name}</span>
		</Link>
	);
};
export default BoardName;
