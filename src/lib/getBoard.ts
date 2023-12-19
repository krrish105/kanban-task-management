import boards from "../../public/data.json";

const getBoard = (slug: string) => {
	let name = slug.toLowerCase().split("-").join(" ");

	return boards.boards.filter((el, i) => {
		if (el.name.toLowerCase() === name) {
			return true;
		}
	});
};
export default getBoard;
