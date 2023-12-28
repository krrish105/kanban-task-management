import { createSlice } from "@reduxjs/toolkit";
import {
	MainState,
	BoardState,
	ColumnState,
	TaskState,
	SubTaskState,
} from "@/redux/Types";
import mainData from "../../../public/data.json";

const initialState: MainState = {
	boards: mainData.boards,
	error: "",
};

export const cart = createSlice({
	name: "cart",
	initialState,
	reducers: {
		createNewBoard: (state, action) => {
			let isBoardAlreadyThere = state.boards.filter(
				(board) =>
					action.payload.name.toLowerCase() === board.name.toLowerCase()
			);
			if (isBoardAlreadyThere.length > 0) {
				state.boards.push({
					name: action.payload.name,
					columns: action.payload.columns,
				});
			} else {
				state.error = "Board already present!";
			}
		},
		createNewColumn: (state, action) => {
			state.boards.map((board) => {
				if (
					action.payload.boardName.toLowerCase() === board.name.toLowerCase()
				) {
					board.columns = action.payload.columns;
				}
			});
		},
		createNewTask: (state, action) => {},
		createNewSubTask: (state, action) => {},

		editBoard: (state, action) => {},
		editColumn: (state, action) => {},
		editTask: (state, action) => {},
		editSubTask: (state, action) => {},

		deleteBoard: (state, action) => {},
		deleteColumn: (state, action) => {},
		deleteTask: (state, action) => {},
		deleteSubTask: (state, action) => {},
	},
});

export const {
	createNewBoard,
	createNewColumn,
	createNewTask,
	createNewSubTask,
	editBoard,
	editColumn,
	editTask,
	editSubTask,
	deleteBoard,
	deleteColumn,
	deleteTask,
	deleteSubTask,
} = cart.actions;
export default cart.reducer;
