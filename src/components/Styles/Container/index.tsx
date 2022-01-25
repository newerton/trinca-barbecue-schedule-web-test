import React from 'react';
import * as S from './styles';

interface ContainerProps {
	width?: number | undefined;
	children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ width, children }) => {
	return <S.Container width={width}>{children} </S.Container>;
};

export default Container;
