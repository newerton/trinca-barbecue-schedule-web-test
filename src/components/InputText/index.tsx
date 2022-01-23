import React from 'react';

import {
	FormikErrors,
	FormikValues,
	FormikTouched,
	FieldProps,
	FieldAttributes,
} from 'formik';

import * as S from './styles';

type InputProps = FieldProps &
	FieldAttributes<any> & {
		label: string;
		name: string;
		type?: string;
		errors: FormikErrors<FormikValues>;
		touched: FormikTouched<FormikValues>;
	};

const InputText: React.FC<InputProps> = ({
	label,
	name,
	type = 'text',
	errors,
	touched,
	...rest
}) => {
	return (
		<S.Container>
			<S.Label>{label}</S.Label>
			<S.Input
				type={type}
				name={name}
				className={
					errors[name] && touched[name]
						? 'form-control form-control-grey is-invalid'
						: 'form-control form-control-grey'
				}
				{...rest}
			/>
			{errors[name] && touched[name] ? (
				<div className="invalid-feedback">{errors[name]}</div>
			) : null}
		</S.Container>
	);
};

export default InputText;
