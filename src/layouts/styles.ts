import styled from 'styled-components';
import { device } from 'styles/device';

export const Container = styled.div`
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
