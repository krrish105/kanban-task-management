import Image from "next/image";

const Header = ({ name }: { name: string }) => {
	return (
		<div className='top_nav px-6 py-5 flex justify-between items-center gap-6 h-fit w-full'>
			{/* Top Section */}
			<h1 className='heading_xl'>{name}</h1>
			<div className='flex gap-7'>
				<button className='button_primary_s'>+ Add New Task</button>
				<button>
					<Image
						src='/assets/icon-vertical-ellipsis.svg'
						alt=''
						width={5}
						height={20}
					/>
					<span className='sr-only'>Open Actions</span>
				</button>
			</div>
		</div>
	);
};

export default Header;
