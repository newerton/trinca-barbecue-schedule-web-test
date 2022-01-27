import Card from 'components/Card';
import Row from 'components/Styles/Row';
import Col from 'components/Styles/Col';
import UsersInfo from 'components/UsersInfo';
import MoneyInfo from 'components/MoneyInfo';
import ButtonAddBarbecue from 'components/ButtonAddBarbecue';
import { useEffect, useState } from 'react';
import api from 'services/api';

type EventProps = {
	id: string;
	title: string;
	date: Date;
	users: number;
	total: number;
};
const Home = () => {
	const [loading, setLoading] = useState(false);
	const [events, setEvents] = useState<EventProps[]>([]);

	useEffect(() => {
		setLoading(true);
		async function loadEvents(): Promise<void> {
			setTimeout(async () => {
				const { data } = await api.get('v1/events');
				setEvents(data);
				setLoading(false);
			}, 2000);
		}
		loadEvents();
	}, []);

	return (
		<div className="container-home">
			<Row>
				{events.map((event) => (
					<Col key={event.id}>
						<Card
							backgroundcolor="white"
							to={`/barbecue/${event.id}`}
							className="p-md"
						>
							<div>
								<div className="title-date">
									{new Intl.DateTimeFormat('pt-BR')
										.format(new Date(event.date))
										.slice(0, 5)}
								</div>
								<div className="title-event">{event.title}</div>
							</div>
							<div className="flex-horizontal">
								<UsersInfo total={event.users} />
								<MoneyInfo total={event.total} />
							</div>
						</Card>
					</Col>
				))}
				<Col>
					<ButtonAddBarbecue backgroundcolor="#F1F1F1" to="/barbecue/add" />
				</Col>
				{loading && (
					<Col>
						<Card backgroundcolor="white" to="/" className="p-xl">
							<div className="pt-xxxl pb-xxxl" style={{ textAlign: 'center' }}>
								Carregando a agenda...
							</div>
						</Card>
					</Col>
				)}
			</Row>
		</div>
	);
};

export default Home;
