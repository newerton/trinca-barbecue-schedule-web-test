import React from 'react';

import { FieldProps, FieldAttributes } from 'formik';

import * as S from './styles';

type ButtonProps = FieldProps &
	FieldAttributes<any> & {
		label: string;
		loading?: boolean;
	};

const Button: React.FC<ButtonProps> = ({ label, loading, ...rest }) => {
	return (
		<>
			<S.Button disabled={loading} {...rest}>
				{loading ? 'Carregando...' : label}
			</S.Button>
		</>
	);
};

export default Button;
