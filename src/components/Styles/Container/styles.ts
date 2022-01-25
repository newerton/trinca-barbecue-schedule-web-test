import styled from 'styled-components';

type ContainerProps = {
	width: number | undefined;
};

export const Container = styled.div<ContainerProps>`
	margin: 0 auto;
	max-width: ${(props) => props.width || 750}px;
	background: #fff;
	padding: 20px;
	box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
`;
