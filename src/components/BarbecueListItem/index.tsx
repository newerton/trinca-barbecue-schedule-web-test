import React, { memo, useCallback, useState } from 'react';
import InputCheckbox from 'components/InputCheckbox';
import { IoBeer } from 'react-icons/io5';

import * as S from './styles';
import api from 'services/api';
type BarbecueListItemProps = {
	id: string;
	name: string;
	amount: number;
	has_beer: boolean;
	paid: boolean;
};

const BarbecueListItem: React.FC<BarbecueListItemProps> = (item) => {
	const [loading, setLoading] = useState(false);
	const [paid, setPaid] = useState(item.paid);
	const currency = new Intl.NumberFormat('pt-BR', {
		style: 'currency',
		currency: 'BRL',
	}).format(item.amount);

	const handlePaid = useCallback((e) => {
		setLoading(true);
		const id = e.target.value;

		// delay to animation
		setTimeout(async () => {
			const { data } = await api.get(`v1/events/paid/${id}`);
			setPaid(data.paid);
			setLoading(false);
		}, 2000);
	}, []);

	return (
		<>
			<S.Row className={'pt-sm pb-sm ' + (paid && 'paid')}>
				<S.Col cols={2}>
					<InputCheckbox
						name="item"
						value={item.id}
						label={item.name}
						checked={paid}
						onChange={handlePaid}
						loading={loading}
					/>
				</S.Col>
				<S.Col cols={1}>
					<div>
						<span className="total">{currency}</span>{' '}
						{item.has_beer && <IoBeer size={22} color="#FFD836" />}
					</div>
				</S.Col>
			</S.Row>
		</>
	);
};

export default memo(BarbecueListItem);
