import React from 'react';
import * as S from './styles';

interface ColProps {
	cols?: number | undefined;
	children: React.ReactNode;
}

const Col: React.FC<ColProps> = ({ cols, children }) => {
	return <S.Col cols={cols}>{children}</S.Col>;
};

export default Col;
