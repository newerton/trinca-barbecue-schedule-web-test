import styled from 'styled-components';
import { device } from 'styles/device';

export const Container = styled.div`
	background: linear-gradient(180deg, rgba(0, 0, 0, 0) 20%, #fff 10%),
		#ffd836 url('./images/background.png') top center repeat-x;
	color: #000;
	-webkit-font-smoothing: antialiased;
	width: 100%;
	height: 100vh;

	& > div > div > div > div > div {
		width: 100%;
	}
`;

export const Box = styled.div`
	width: 100%;
	padding-right: 15px;
	padding-left: 15px;
	margin-right: auto;
	margin-left: auto;

	@media ${device.mobile} {
		width: 540px;
	}

	@media ${device.tablet} {
		width: 720px;
	}

	@media ${device.laptop} {
		width: 960px;
	}

	@media ${device.desktop} {
		width: 1140px;
	}
`;
