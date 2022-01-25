import styled, { css } from 'styled-components';

type RowProps = {
	cols: number;
};

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
	}
`;

export const Col = styled.div<RowProps>`
	flex: 50%;
	max-width: 50%;
	padding: 10px;

	${(props) =>
		props.cols === 1 &&
		css`
			flex: 25%;
			max-width: 25%;
		`}

	${(props) =>
		props.cols === 2 &&
		css`
			flex: 75%;
			max-width: 75%;
		`}

  ${(props) =>
		props.cols === 3 &&
		css`
			flex: 100%;
			max-width: 100%;
		`}

	@media (max-width: 992px) {
		flex: 50%;
		max-width: 50%;
	}

	@media (max-width: 600px) {
		flex: 100%;
		max-width: 100%;
	}
`;

export const ButtonRemoveUsers = styled.button`
	background-color: #dc3545;
	padding: 6px;
	border: none;
	color: #fff;
	border-radius: 4px;
`;

export const ButtonAddUsers = styled.button`
	background-color: #ffd836;
	padding: 10px;
	border: none;
	color: #000;
	border-radius: 4px;
`;
