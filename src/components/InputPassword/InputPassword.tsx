import React, { useState } from 'react';
import { FaEye } from 'react-icons/fa';

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
		errors: FormikErrors<FormikValues>;
		touched: FormikTouched<FormikValues>;
	};

const InputPassword: React.FC<InputProps> = ({
	label,
	name,
	errors,
	touched,
	...rest
}) => {
	const [show, setShow] = useState(false);

	function toggleShow(): void {
		setShow(!show);
	}

	return (
		<S.Container>
			<S.Label>{label}</S.Label>
			<S.Input
				type={show ? 'text' : 'password'}
				name={name}
				className={
					errors[name] && touched[name]
						? 'form-control is-invalid'
						: 'form-control'
				}
				{...rest}
			/>
			<S.TooglePassword
				type="button"
				onClick={toggleShow}
				className="btn text-white float-right"
				style={{
					marginRight: errors[name] && touched[name] ? '30px' : '0',
				}}
			>
				<FaEye />
			</S.TooglePassword>
			{errors[name] && touched[name] ? (
				<div className="invalid-feedback">{errors[name]}</div>
			) : null}
		</S.Container>
	);
};

export default InputPassword;
