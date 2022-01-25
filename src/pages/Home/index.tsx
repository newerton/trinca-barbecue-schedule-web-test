import Card from 'components/Card';
import Row from 'components/Styles/Row';
import Col from 'components/Styles/Col';
import UsersInfo from 'components/UsersInfo';
import MoneyInfo from 'components/MoneyInfo';
import ButtonAddBarbecue from 'components/ButtonAddBarbecue';

const Home = () => {
	return (
		<div className="container-home">
			<Row>
				<Col>
					<Card backgroundColor="white" to="/barbecue/100" className="p-md">
						<div className="mb-xxxl">
							<div className="title-date">01/12</div>
							<div className="title-event">Niver do Gui</div>
						</div>
						<div className="flex-horizontal">
							<UsersInfo total="12" />
							<MoneyInfo total={123.0} />
						</div>
					</Card>
				</Col>
				<Col>
					<ButtonAddBarbecue backgroundColor="#F1F1F1" to="/barbecue/add" />
				</Col>
			</Row>
		</div>
	);
};

export default Home;
