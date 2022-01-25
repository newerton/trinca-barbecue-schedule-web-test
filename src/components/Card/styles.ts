import { Link } from 'react-router-dom';
import styled from 'styled-components';

type CardProps = {
	backgroundColor: string | undefined;
};

export const Card = styled(Link)<CardProps>`
	background-color: ${(props) => props.backgroundColor || 'white'};
	border: 1px solid #eee;
	box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
	border-radius: 2px;
	display: flex;
	flex-direction: column;
	text-decoration: none;
`;
