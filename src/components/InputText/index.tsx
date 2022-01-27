import React, { memo } from 'react';

import {
	FormikErrors,
	FormikValues,
	FormikTouched,
	FieldProps,
	FieldAttributes,
	ErrorMessage,
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
	let hasError = errors[name] && touched[name];
	if (
		name.startsWith('items.') &&
		errors['items'] &&
		touched['items'] &&
		errors['items'].length > 0
	) {
		hasError = errors['items'].filter((item: any) => item == name);
	}
	return (
		<S.Container>
			<S.Label>{label}</S.Label>
			<S.Input
				type={type}
				name={name}
				className={hasError ? 'is-invalid' : ''}
				{...rest}
			/>
			<ErrorMessage name={name}>
				{(msg) => <span className="invalid-feedback">{msg}</span>}
			</ErrorMessage>
		</S.Container>
	);
};

export default memo(InputText);
