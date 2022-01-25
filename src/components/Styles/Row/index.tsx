import React from 'react';
import * as S from './styles';

interface RowProps {
	children: React.ReactNode;
}

const Row: React.FC<RowProps> = ({ children }) => {
	return <S.Row>{children} </S.Row>;
};

export default Row;
