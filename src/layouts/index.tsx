import React from 'react';

import Footer from 'components/Footer';
import Header from 'components/Header';
import { Outlet } from 'react-router-dom';

import * as S from './styles';

const Layout = () => {
	return (
		<>
			<S.Container>
				<div style={{ height: '90vh', margin: 0, padding: 0 }}>
					<div
						style={{
							height: '100vh',
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<div
							style={{
								height: '10vh',
								display: 'flex',
								flex: '1',
								justifyContent: 'space-around',
							}}
						>
							<div>
								<Header />
								<main role="main">
									<Outlet />
								</main>
							</div>
						</div>
						<div style={{ maxHeight: '100%', overflow: 'auto' }}>
							<Footer />
						</div>
					</div>
				</div>
			</S.Container>
		</>
	);
};

export default Layout;
