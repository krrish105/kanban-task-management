import { notFound } from "next/navigation";
import getBoard from "@/lib/getBoard";
import LeftMenu from "@/component/LeftMenu/LeftMenu";
import Header from "@/component/common/Header";
import { ColumnState, SubTaskState, TaskState } from "@/redux/Types";
import Task from "@/component/popups/task/Task";
import TaskContainer from "@/component/common/TaskContainer";

async function getData(slug: string) {
	const res = getBoard(slug);

	if (res.length <= 0) {
		notFound();
	}
	return res;
}

export async function generateMetadata({
	params,
}: {
	params: { slug: string };
}) {
	const post = await getData(params.slug).then((res) => res[0]);

	return {
		title: `${post.name} | Kanban Task Management`,
		description: "",
	};
}

const Board = async ({ params }: { params: { slug: string } }) => {
	const data = await getData(params.slug);

	return (
		<main>
			<LeftMenu activeLink={data[0].name} />
			<div>
				<Header board={data[0]} />
				<div className='main_content'>
					{data[0].columns.length > 0 ? (
						<div className='columns_grid gap-6 p-6'>
							{data[0].columns.map((column: ColumnState, i: number) => {
								return (
									<div key={column.name} className='flex flex-col gap-6'>
										<h3 className='heading_s flex gap-2'>
											<span className='column_dot'></span>
											{column.name}
										</h3>
										<div className='flex flex-col gap-5'>
											{column.tasks.map((task: TaskState, i) => {
												return <TaskContainer task={task} key={task.title} />;
											})}
										</div>
									</div>
								);
							})}
						</div>
					) : (
						<div className='flex flex-col gap-8 w-full justify-center items-center h-full'>
							<div className='heading_l'>
								This board is empty. Create a new column to get started.
							</div>
							<button className='button_primary_s w-fit'>
								+ Add New Column
							</button>
						</div>
					)}
				</div>
			</div>
		</main>
	);
};

export default Board;
