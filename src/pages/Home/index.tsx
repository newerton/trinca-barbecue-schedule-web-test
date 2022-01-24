import React from 'react';
import * as S from './styles';

import users from './../../assets/icon_people.svg';
import coin from './../../assets/icon_money.svg';
import bbq from './../../assets/icon_bbq.svg';

const Home = () => {
	return (
		<S.Row>
			<S.Col>
				<S.Card to="/barbercue/100">
					<div className="header">
						<h1>01/12</h1>
						<h3>Niver do Gui</h3>
					</div>
					<div className="footer">
						<div>
							<div>
								<img src={users} alt="total de participantes" />
							</div>
							<div>15</div>
						</div>
						<div>
							<div>
								<img src={coin} alt="total de participantes" />
							</div>
							<div>R$ 280</div>
						</div>
					</div>
				</S.Card>
			</S.Col>
			<S.Col>
				<S.Card to="/barbercue/100">
					<div className="header">
						<h1>01/12</h1>
						<h3>Niver do Gui</h3>
					</div>
					<div className="footer">
						<div>
							<div>
								<img src={users} alt="total de participantes" />
							</div>
							<div>15</div>
						</div>
						<div>
							<div>
								<img src={coin} alt="total de participantes" />
							</div>
							<div>R$ 280</div>
						</div>
					</div>
				</S.Card>
			</S.Col>
			<S.Col>
				<S.Card to="/barbercue/100">
					<div className="header">
						<h1>01/12</h1>
						<h3>Niver do Gui</h3>
					</div>
					<div className="footer">
						<div>
							<div>
								<img src={users} alt="total de participantes" />
							</div>
							<div>15</div>
						</div>
						<div>
							<div>
								<img src={coin} alt="total de participantes" />
							</div>
							<div>R$ 280</div>
						</div>
					</div>
				</S.Card>
			</S.Col>
			<S.Col>
				<S.Card to="/barbercue/100">
					<div className="header">
						<h1>01/12</h1>
						<h3>Niver do Gui</h3>
					</div>
					<div className="footer">
						<div>
							<div>
								<img src={users} alt="total de participantes" />
							</div>
							<div>15</div>
						</div>
						<div>
							<div>
								<img src={coin} alt="total de participantes" />
							</div>
							<div>R$ 280</div>
						</div>
					</div>
				</S.Card>
			</S.Col>
			<S.Col>
				<S.Card to="/barbercue/100">
					<div className="header">
						<h1>01/12</h1>
						<h3>Niver do Gui</h3>
					</div>
					<div className="footer">
						<div>
							<div>
								<img src={users} alt="total de participatens" />
							</div>
							<div>15</div>
						</div>
						<div>
							<div>
								<img src={coin} alt="total de participantes" />
							</div>
							<div>R$ 280</div>
						</div>
					</div>
				</S.Card>
			</S.Col>
			<S.Col>
				<S.Card to="/barbecue/add">
					<div className="add">
						<div>
							<img src={bbq} alt="adicionar" />
						</div>
						<div>Adicionar Churrasco</div>
					</div>
				</S.Card>
			</S.Col>
		</S.Row>
	);
};

export default Home;
