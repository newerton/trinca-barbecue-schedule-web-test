import * as S from './styles';

import { Path } from 'react-router-dom';
import Card from 'components/Card';

import bbq from './../../assets/icon_bbq.svg';

interface ButtonAddBarbecueProps {
	backgroundcolor: string;
	to: string | Partial<Path>;
}

const ButtonAddBarbecue: React.FC<ButtonAddBarbecueProps> = ({
	backgroundcolor,
	to,
}) => {
	return (
		<Card backgroundcolor={backgroundcolor} to={to}>
			<S.Container>
				<S.Image>
					<img src={bbq} alt="adicionar" />
				</S.Image>
				<S.Title>Adicionar Churrasco</S.Title>
			</S.Container>
		</Card>
	);
};

export default ButtonAddBarbecue;
