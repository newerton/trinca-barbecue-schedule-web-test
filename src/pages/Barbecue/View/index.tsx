import BarbecueList from 'components/BarbecueList';
import { Link, useParams } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import Container from 'components/Styles/Container';
import Row from 'components/Styles/Row';
import Col from 'components/Styles/Col';
import UsersInfo from 'components/UsersInfo';
import MoneyInfo from 'components/MoneyInfo';
import { useEffect, useState } from 'react';
import api from 'services/api';

type EventProps = {
	id: string;
	title: string;
	date: Date;
	items: Array<{
		id: string;
		name: string;
		amount: number;
		has_beer: boolean;
		paid: boolean;
	}>;
	users: number;
	total: number;
};

const BarbecueView = () => {
	const [event, setEvent] = useState<EventProps>();
	const { id } = useParams();
	console.log(id);

	useEffect(() => {
		async function loadEvent() {
			const { data } = await api.get(`v1/events/${id}`);
			setEvent(data);
		}
		loadEvent();
	}, [id]);

	return (
		<Container>
			<div className="mb-lg">
				<Link to="/" className="text-decoration-none">
					<IoIosArrowBack /> Voltar
				</Link>
			</div>
			{event && (
				<>
					<Row>
						<Col cols={2}>
							<div className="mb-xl">
								<div className="title-date">
									{new Intl.DateTimeFormat('pt-BR')
										.format(new Date(event.date))
										.slice(0, 5)}
								</div>
								<div className="title-event-big">{event.title}</div>
							</div>
						</Col>
						<Col cols={1}>
							<div>
								<UsersInfo total={event.users} />
								<MoneyInfo total={event.total} />
							</div>
						</Col>
					</Row>
					<BarbecueList items={event.items} />
				</>
			)}

			{!event && (
				<Row>
					<Col cols={3}>Carregando...</Col>
				</Row>
			)}
		</Container>
	);
};

export default BarbecueView;
