import React, { HTMLAttributes } from 'react';
import { BiLoaderCircle } from 'react-icons/bi';

import * as S from './styles';

type InputProps = HTMLAttributes<HTMLInputElement> & {
	label: string;
	name: string;
	value: string;
	checked?: boolean;
	loading?: boolean;
};

const InputCheckbox: React.FC<InputProps> = ({
	label,
	name,
	value,
	checked = false,
	loading,
	...rest
}) => {
	return (
		<S.Container>
			<S.Label>
				{loading ? (
					<BiLoaderCircle className="icon-spin" style={{ marginRight: 7 }} />
				) : (
					<S.Input
						type="checkbox"
						name={name}
						value={value}
						defaultChecked={checked}
						{...rest}
					/>
				)}

				<div>{label}</div>
			</S.Label>
		</S.Container>
	);
};

export default InputCheckbox;
