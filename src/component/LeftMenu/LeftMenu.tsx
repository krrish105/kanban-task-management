import AllBoards from "@/component/LeftMenu/AllBoards";
import Logo from "@/component/common/Logo";
import Image from "next/image";

const LeftMenu = ({ activeLink }: { activeLink: string }) => {
	return (
		<aside className='left_menu flex flex-col justify-between gap-8 pt-7 pb-10 w-full h-screen pr-12'>
			<div className='flex gap-12 flex-col'>
				<div className='mx-4'>
					<Logo />
				</div>

				<AllBoards activeLink={activeLink} />
			</div>
			<div className='mx-4 flex flex-col gap-8'>
				{/* Toggle Theme Button */}
				<div className='toggle_theme'></div>
				{/* Hide Button */}
				<div>
					<button className='heading_m flex gap-3'>
						<Image
							src='/assets/icon-hide-sidebar.svg'
							alt='Hide Sidebar'
							width={16}
							height={16}
						/>
						<span>Hide Sidebar</span>
					</button>
				</div>
			</div>
		</aside>
	);
};
export default LeftMenu;
