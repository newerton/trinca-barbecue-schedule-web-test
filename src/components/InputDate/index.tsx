import React, { useCallback, useState } from 'react';

import {
	FormikErrors,
	FormikValues,
	FormikTouched,
	FieldProps,
	FieldAttributes,
	Field,
	ErrorMessage,
	useFormikContext,
	useField,
} from 'formik';
import { registerLocale } from 'react-datepicker';
import InputMask from 'react-input-mask';

import * as S from './styles';

import ptBR from 'date-fns/locale/pt-BR';
registerLocale('ptBR', ptBR);

type InputProps = FieldProps &
	FieldAttributes<any> & {
		label: string;
		name: string;
		type?: string;
		errors: FormikErrors<FormikValues>;
		touched: FormikTouched<FormikValues>;
	};

const InputDate: React.FC<InputProps> = ({
	label,
	name,
	type = 'text',
	...rest
}) => {
	const { setFieldValue } = useFormikContext();
	const [field] = useField(name);
	const [filterDate, setFilterDate] = useState();

	const handleChange = useCallback(
		(value) => {
			setFieldValue(field.name, value);
			setFilterDate(value);
		},
		[field.name, setFieldValue]
	);

	return (
		<S.Container>
			<S.Label>{label}</S.Label>
			<Field type={type} name={name} {...rest}>
				{({
					form: { touched, errors }, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
				}: any) => (
					<>
						<S.Input
							name={name}
							locale="ptBR"
							dateFormat="dd/MM/yyyy"
							selected={filterDate}
							onChange={handleChange}
							placeholderText="dd/mm/yyyy"
							customInput={<InputMask name={name} mask="99/99/9999" />}
							className={errors[name] && touched[name] ? 'is-invalid' : ''}
						/>
						<ErrorMessage name={name}>
							{(msg) => <span className="invalid-feedback">{msg}</span>}
						</ErrorMessage>
					</>
				)}
			</Field>
		</S.Container>
	);
};

export default InputDate;
