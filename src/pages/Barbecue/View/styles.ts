import styled, { css } from 'styled-components';
import { device } from 'styles/device';

type RowProps = {
	cols: number;
};

export const Container = styled.div`
	margin: 0 auto;
	max-width: 600px;
	background: #fff;
	padding: 20px;
	box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
`;

export const Row = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	padding: 0 4px;

	& > div > a {
		background: #fff;
	}

	& > div:last-child > a {
		background: #f1f1f1;

		@media ${device.mobile} {
			padding: 21px 10px;
		}

		@media ${device.tablet} {
			padding: 21px;
		}

		@media ${device.laptop} {
			padding: 8px;
		}

		@media ${device.desktop} {
			padding: 22px;
		}
	}
`;

export const Col = styled.div<RowProps>`
	flex: 50%;
	max-width: 50%;
	padding: 10px;

	${(props) =>
		props.cols === 1 &&
		css`
			flex: 20%;
			max-width: 20%;
		`}

	${(props) =>
		props.cols === 2 &&
		css`
			flex: 80%;
			max-width: 80%;
		`}

  ${(props) =>
		props.cols === 3 &&
		css`
			flex: 100%;
			max-width: 100%;
		`}

  & > .header {
		font-family: Raleway;
		font-style: normal;
		& > h1 {
			font-weight: 800;
			font-size: 28px;
			line-height: 33px;
			color: #000000;
		}
		& > h3 {
			font-weight: bold;
			font-size: 36px;
			line-height: 42px;
			color: rgba(0, 0, 0, 0.8);
		}
	}

	& > .totals {
		display: flex;
		flex-direction: column;

		& img {
			margin-right: 10px;
		}

		& > div {
			display: flex;
			margin-bottom: 17px;
			align-items: center;
		}
	}

	& > .total {
		font-family: Raleway;
		font-style: normal;
		font-weight: bold;
		font-size: 21px;
		line-height: 25px;
		color: rgba(0, 0, 0, 0.8);
	}

	@media (max-width: 992px) {
		${(props) =>
			props.cols === 1 &&
			css`
				flex: 20%;
				max-width: 20%;
			`}

		${(props) =>
			props.cols === 2 &&
			css`
				flex: 80%;
				max-width: 80%;
			`}

    ${(props) =>
			props.cols === 3 &&
			css`
				flex: 50%;
				max-width: 50%;
			`}
	}

	@media (max-width: 600px) {
		flex: 100%;
		max-width: 100%;
	}
`;
