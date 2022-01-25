import BarbecueList from 'components/BarbecueList';
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import Container from 'components/Styles/Container';
import Row from 'components/Styles/Row';
import Col from 'components/Styles/Col';
import UsersInfo from 'components/UsersInfo';
import MoneyInfo from 'components/MoneyInfo';

const BarbecueView = () => {
	return (
		<Container>
			<div className="mb-lg">
				<Link to="/" className="text-decoration-none">
					<IoIosArrowBack /> Voltar
				</Link>
			</div>
			<Row>
				<Col cols={2}>
					<div className="mb-xl">
						<div className="title-date">01/12</div>
						<div className="title-event-big">Niver do Gui</div>
					</div>
				</Col>
				<Col cols={1}>
					<div>
						<UsersInfo total="12" />
						<MoneyInfo total={123.0} />
					</div>
				</Col>
			</Row>

			<BarbecueList />
		</Container>
	);
};

export default BarbecueView;
