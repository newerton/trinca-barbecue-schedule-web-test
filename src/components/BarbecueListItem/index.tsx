import React, { memo, useCallback, useState } from 'react';

import * as S from './styles';

import InputCheckbox from 'components/InputCheckbox';

type BarbecueListItemProps = {
	id: string;
	name: string;
	value: string;
	paid: boolean;
};

const BarbecueListItem: React.FC<BarbecueListItemProps> = (user) => {
	const [loading, setLoading] = useState(false);
	const [paid, setPaid] = useState(user.paid);
	const handlePaid = useCallback((e) => {
		setLoading(true);
		setTimeout(() => {
			setPaid(e.target.checked);
			setLoading(false);
		}, 3000);
	}, []);
	return (
		<>
			<S.Row className={'pt-sm pb-sm ' + (paid && 'paid')}>
				<S.Col cols={2}>
					<InputCheckbox
						name="user"
						value={user.id}
						label={user.name}
						checked={paid}
						onChange={handlePaid}
						loading={loading}
					/>
				</S.Col>
				<S.Col cols={1}>
					<div className="total">{user.value}</div>
				</S.Col>
			</S.Row>
		</>
	);
};

export default memo(BarbecueListItem);
