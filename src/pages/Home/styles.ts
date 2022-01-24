import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Row = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	padding: 0 4px;
	position: relative;
	top: -30px;

	& > div > a {
		background: #fff;
	}

	& > div:last-child > a {
		background: #f1f1f1;
	}
`;

export const Col = styled.div`
	flex: 25%;
	max-width: 25%;
	padding: 10px;

	@media (max-width: 992px) {
		flex: 50%;
		max-width: 50%;
	}

	@media (max-width: 600px) {
		flex: 100%;
		max-width: 100%;
	}
`;

export const Card = styled(Link)`
	border: 1px solid #eee;
	box-shadow: 0px 0px 16px rgba(0, 0, 0, 0.06);
	border-radius: 2px;
	padding: 21px 24px;
	display: flex;
	flex-direction: column;
	text-decoration: none;

	& > div.header:nth-child(1) {
		margin-bottom: 53px;
	}

	& > div:nth-child(2) {
		display: flex;
		justify-content: space-between;
	}

	& > .header > h1 {
		font-family: Raleway;
		font-style: normal;
		font-weight: 800;
		font-size: 28px;
		line-height: 33px;
		color: rgba(0, 0, 0, 0.8);
	}

	& > .header > h3 {
		font-family: Raleway;
		font-style: normal;
		font-weight: bold;
		font-size: 21px;
		line-height: 25px;
		color: rgba(0, 0, 0, 0.8);
	}

	& > .footer {
		font-family: Raleway;
		font-style: normal;
		font-weight: 500;
		font-size: 21px;
		line-height: 25px;
		color: #000000;

		& > div {
			display: flex;
			height: 100%;

			& > div:nth-child(1) {
				margin-right: 12px;
				& img {
					padding-top: 3px;
				}
			}

			& > div {
				align-items: center;
			}
		}
	}

	& > .add {
		display: flex;
		width: 100%;
		height: 100%;
		flex-direction: column;
		text-align: center;
		padding: 7px 0;

		& > div:nth-child(1) {
			background: #ffd836;
			border-radius: 50%;
			width: 90px;
			padding: 20px;
			margin: 0 auto;
			margin-bottom: 14px;
		}

		& > div:nth-child(2) {
			font-family: Raleway;
			font-style: normal;
			font-weight: bold;
			font-size: 21px;
			line-height: 25px;
			color: #000000;
		}
	}
`;
