import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { device } from 'styles/device';

type CardProps = {
	backgroundcolor: string | undefined;
};

export const Card = styled(Link)<CardProps>`
	background-color: ${(props) => props.backgroundcolor || 'white'};
	border: 1px solid #eee;
	box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
	border-radius: 2px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	text-decoration: none;
	height: 160px;

	@media ${device.mobile} {
		height: 200px;
	}
`;
