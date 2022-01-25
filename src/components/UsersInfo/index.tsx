import React from 'react';
import * as S from './styles';

import users from './../../assets/icon_people.svg';

type UsersInfoProps = {
	total: string;
};

const UsersInfo: React.FC<UsersInfoProps> = ({ total }) => {
	return (
		<S.Container>
			<div className="pt-xs">
				<img src={users} alt="total de participantes" />
			</div>
			<div>{total}</div>
		</S.Container>
	);
};

export default UsersInfo;
