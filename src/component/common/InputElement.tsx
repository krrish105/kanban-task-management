const InputElement = ({
	type,
	name,
	id,
	required,
	label,
	value,
	placeholder,
	// onChangeHandler,
	onBlurHandler,
	isTouched,
	error,
	hideLabel,
}: {
	type: string;
	name: string;
	id: string;
	required: boolean;
	label: string;
	value: string;
	placeholder: string;
	// onChangeHandler: any;
	onBlurHandler: any;
	isTouched: boolean | undefined;
	error: string | undefined;
	hideLabel: boolean | undefined | null | void;
}) => {
	return (
		<div
			className={`form_group w-full ${isTouched && error ? "has_error" : ""}`}
		>
			<div className={`${hideLabel ? "sr-only" : "flex justify-between"}`}>
				<label htmlFor={id} className={`${hideLabel && "sr-only"}`}>
					{label}
				</label>
				{isTouched && error ? <div className='error'>{error}</div> : null}
			</div>
			<input
				type={type}
				name={name}
				id={id}
				aria-required={required}
				defaultValue={value}
				placeholder={placeholder}
				// onChange={onChangeHandler}
				onBlur={onBlurHandler}
			/>
		</div>
	);
};

export default InputElement;
