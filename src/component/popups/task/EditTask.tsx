"use client";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { useFormik } from "formik";
import * as Yup from "yup";
import InputElement from "@/component/common/InputElement";
import { ColumnState, TaskState } from "@/redux/Types";

const EditTask = ({
	task,
	setOpenModal,
}: {
	task: TaskState;
	setOpenModal: any;
}) => {
	const dispatch = useDispatch<AppDispatch>();

	const formik = useFormik({
		initialValues: {
			name: task.title,
			description: task.description,
		},
		validationSchema: Yup.object({
			name: Yup.string().required("Required"),
			description: Yup.string().required("Required"),
		}),
		onSubmit: (values) => {
			// dispatch(
			// 	EditTask({
			// 		name: values.name,
			// 	})
			// );
			setOpenModal(false);
		},
	});

	return (
		<>
			<div className='backdrop' onClick={() => setOpenModal(false)}></div>
			<aside className='modal'>
				<div className='flex flex-col gap-6'>
					<h1 className='heading_l'>Edit Task</h1>
					<InputElement
						type={"text"}
						name={"name"}
						id={"name"}
						required={true}
						label={"Title"}
						value={formik.values.name}
						placeholder={"e.g. Web Design"}
						onBlurHandler={formik.handleBlur}
						isTouched={formik.touched.name}
						error={formik.errors.name}
						hideLabel={false}
					/>
					<InputElement
						type={"text"}
						name={"description"}
						id={"description"}
						required={true}
						label={"Title"}
						value={formik.values.description}
						placeholder={
							"e.g. It’s always good to take a break. This 15 minute break will recharge the batteries a little."
						}
						onBlurHandler={formik.handleBlur}
						isTouched={formik.touched.description}
						error={formik.errors.description}
						hideLabel={false}
					/>

					<div>
						<div className='mb-6'>
							<span className='text_bold text_white'>Subtasks</span>
							<ul className='flex flex-col gap-2 my-4'>
								{task.subtasks.length &&
									task.subtasks.map((el, i) => {
										return (
											<li className='flex gap-2' key={el.title}>
												<span className='text_bold subtasks w-full'>
													{el.title}
												</span>
												<button className='text_medium_grey'>&#10005;</button>
											</li>
										);
									})}
							</ul>
							<button
								className='button_secondary w-full'
								onClick={(e) => e.preventDefault()}
							>
								+ Add New Subtask
							</button>
						</div>
						<div className='form_group mb-6'>
							<label htmlFor='status'>Current Status</label>
							<select name='status' id='status'></select>
						</div>
						<button type='submit' className='button_primary_s w-full'>
							Save Changes
						</button>
					</div>
				</div>
			</aside>
		</>
	);
};
export default EditTask;
