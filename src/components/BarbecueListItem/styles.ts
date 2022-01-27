import styled, { css } from 'styled-components';

type RowProps = {
	cols: number;
};

export const Row = styled.div`
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	border-bottom: 1px solid rgba(229, 194, 49, 0.5);
`;

export const Col = styled.div<RowProps>`
	flex: 50%;
	max-width: 50%;

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

	& > div > .total {
		font-family: Raleway;
		font-style: normal;
		font-weight: bold;
		font-size: 21px;
		line-height: 25px;
		color: rgba(0, 0, 0, 0.8);
	}

	& > .paid {
		text-decoration: line-through;
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
