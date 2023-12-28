"use client";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { editBoard } from "@/redux/features/board-slice";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputElement from "@/component/common/InputElement";
import { ColumnState } from "@/redux/Types";

const EditBoard = ({
	name,
	columns,
	setOpenModal,
}: {
	name: string;
	columns: ColumnState[];
	setOpenModal: any;
}) => {
	const dispatch = useDispatch<AppDispatch>();

	const formik = useFormik({
		initialValues: {
			name: name,
			columnName: columns[0].name,
		},
		validationSchema: Yup.object({
			name: Yup.string().required("Required"),
			columnName: Yup.string().required("Required"),
		}),
		onSubmit: (values) => {
			dispatch(
				editBoard({
					name: values.name,
					columns: {
						name: values.columnName,
						tasks: [],
					},
				})
			);
			setOpenModal(false);
		},
	});

	return (
		<>
			<div className='backdrop' onClick={() => setOpenModal(false)}></div>
			<aside className='modal'>
				<div className='flex flex-col gap-6'>
					<h1 className='heading_l'>Edit Board</h1>
					<InputElement
						type={"text"}
						name={"name"}
						id={"name"}
						required={true}
						label={"Board Name"}
						value={formik.values.name}
						placeholder={"e.g. Web Design"}
						onBlurHandler={formik.handleBlur}
						isTouched={formik.touched.name}
						error={formik.errors.name}
						hideLabel={false}
					/>

					<div>
						<InputElement
							type={"text"}
							name={"columnName"}
							id={"columnName"}
							required={true}
							label={"Board Columns"}
							value={formik.values.columnName}
							placeholder={""}
							onBlurHandler={formik.handleBlur}
							isTouched={formik.touched.columnName}
							error={formik.errors.columnName}
							hideLabel={false}
						/>
						<button
							className='button_secondary w-full mt-4'
							onClick={(e) => e.preventDefault()}
						>
							+ Add New Column
						</button>
					</div>

					<button type='submit' className='button_primary_s'>
						Save Changes
					</button>
				</div>
			</aside>
		</>
	);
};
export default EditBoard;
