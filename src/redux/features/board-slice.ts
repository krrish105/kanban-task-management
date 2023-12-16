import { createSlice } from "@reduxjs/toolkit";
import {
	MainState,
	BoardState,
	ColumnState,
	TaskState,
	SubTaskState,
} from "@/redux/Types";
import mainData from "../../../data.json";

const initialState: MainState = {
	boards: mainData.boards,
};

export const cart = createSlice({
	name: "cart",
	initialState,
	reducers: {
		createNewBoard: (state, action) => {},
		createNewColumn: (state, action) => {},
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
