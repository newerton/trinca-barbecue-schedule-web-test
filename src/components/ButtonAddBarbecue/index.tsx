import * as S from './styles';

import { Path } from 'react-router-dom';
import Card from 'components/Card';

import bbq from './../../assets/icon_bbq.svg';

interface ButtonAddBarbecueProps {
	backgroundColor: string;
	to: string | Partial<Path>;
}

const ButtonAddBarbecue: React.FC<ButtonAddBarbecueProps> = ({
	backgroundColor,
	to,
}) => {
	return (
		<Card backgroundColor={backgroundColor} to={to} className="pt-md pb-md">
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
