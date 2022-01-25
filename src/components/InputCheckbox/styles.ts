import styled from 'styled-components';

export const Container = styled.div`
	& .is-invalid {
		padding-right: calc(1.5em + 0.75rem);
		background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 12 12' width='12' height='12' fill='none' stroke='%23dc3545'%3e%3ccircle cx='6' cy='6' r='4.5'/%3e%3cpath stroke-linejoin='round' d='M5.8 3.6h.4L6 6.5z'/%3e%3ccircle cx='6' cy='8.2' r='.6' fill='%23dc3545' stroke='none'/%3e%3c/svg%3e");
		background-repeat: no-repeat;
		background-position: right calc(0.375em + 0.1875rem) center;
		background-size: calc(0.75em + 0.375rem) calc(0.75em + 0.375rem);
	}

	& > .invalid-feedback {
		color: #f00;
	}
`;

export const Label = styled.div`
	font-family: Raleway;
	font-style: normal;
	font-weight: bold;
	font-size: 21px;
	line-height: 25px;
	color: rgba(0, 0, 0, 0.8);
	display: flex;
	align-items: center;
`;

export const Input = styled.input`
	background: #ffffff;
	border: 3px solid #998220;
	margin-right: 10px;
	width: 1.3em;
	height: 1.3em;
	background-color: white;
	border-radius: 50%;
	vertical-align: middle;
	appearance: none;
	-webkit-appearance: none;
	outline: none;
	cursor: pointer;

	&:checked {
		border: 3px solid #ffd836;
		background-color: #ffd836;
	}
`;
