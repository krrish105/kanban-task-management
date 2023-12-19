import LeftMenu from "@/component/LeftMenu/LeftMenu";

export default function Home() {
	return (
		<main className='grid grid-cols-[300px_auto]'>
			<LeftMenu />
			<div className='top_nav px-6 py-5 flex justify-between items-center gap-6 h-fit w-full'>
				{/* Top Section */}
				<h1 className='heading_xl'>Kanban</h1>
				<button className='button_primary_s'>+ Add New Task</button>
			</div>
		</main>
	);
}
