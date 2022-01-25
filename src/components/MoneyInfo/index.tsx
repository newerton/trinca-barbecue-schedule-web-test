import React from 'react';
import * as S from './styles';

import coin from './../../assets/icon_money.svg';

type MoneyInfoProps = {
	total: number;
};

const MoneyInfo: React.FC<MoneyInfoProps> = ({ total }) => {
	const currency = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}).format(total);
	return (
		<S.Container>
			<div className="pt-xs">
				<img src={coin} alt="valor total" />
			</div>
			<div>{currency}</div>
		</S.Container>
	);
};

export default MoneyInfo;
