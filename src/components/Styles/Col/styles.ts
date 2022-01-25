import styled, { css } from 'styled-components';

type ColsProps = {
	cols: number | undefined;
};

export const Col = styled.div<ColsProps>`
	flex: 25%;
	max-width: 25%;
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

  @media (max-width: 992px) {
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
				flex: 50%;
				max-width: 50%;
			`}
	}

	@media (max-width: 600px) {
		flex: 100%;
		max-width: 100%;
	}
`;
