import styled from 'styled-components';

export const Container = styled.div`
	width: 100%;
	display: flex;
  flex-direction: column;
	flex-wrap: wrap;
	padding: 4px;
  text-align: center;
	}
`;

export const Image = styled.div`
	background: #ffd836;
	border-radius: 50%;
	width: 90px;
	padding: 20px;
	margin: 0 auto;
	margin-bottom: 20px;
`;

export const Title = styled.div`
	font-family: Raleway;
	font-style: normal;
	font-weight: bold;
	font-size: 21px;
	line-height: 25px;
	color: #000000;

	@media (min-width: 992px) and (max-width: 1200px) {
		font-size: 19px;
	}
`;
