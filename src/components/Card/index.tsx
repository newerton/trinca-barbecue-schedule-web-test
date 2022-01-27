import React, { HTMLAttributes } from 'react';
import * as S from './styles';

import { Path } from 'react-router-dom';

type ColProps = HTMLAttributes<HTMLElement> & {
	backgroundcolor: string;
	to: string | Partial<Path>;
	children: React.ReactNode;
};

const Col: React.FC<ColProps> = ({
	backgroundcolor,
	to,
	children,
	...rest
}) => {
	return (
		<S.Card backgroundcolor={backgroundcolor} to={to} {...rest}>
			{children}
		</S.Card>
	);
};

export default Col;
