import React, { HTMLAttributes } from 'react';
import * as S from './styles';

import { Path } from 'react-router-dom';

type ColProps = HTMLAttributes<HTMLElement> & {
	backgroundColor: string;
	to: string | Partial<Path>;
	children: React.ReactNode;
};

const Col: React.FC<ColProps> = ({
	backgroundColor,
	to,
	children,
	...rest
}) => {
	return (
		<S.Card backgroundColor={backgroundColor} to={to} {...rest}>
			{children}
		</S.Card>
	);
};

export default Col;
