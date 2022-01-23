import React from 'react';
import { Routes as RoutesDOM, Route } from 'react-router-dom';

// import RoutePrivate from 'routes';

import Home from 'pages/Home';
import Login from 'pages/Login';
import NotFound from 'pages/NotFound';
import Layout from 'layouts';
import RoutePrivate from './RoutePrivate';

const Routes = () => (
	<RoutesDOM>
		<Route element={<Layout />}>
			<Route
				path="/"
				element={
					<RoutePrivate>
						<Home />
					</RoutePrivate>
				}
			/>
			<Route path="/login" element={<Login />} />
			<Route path="*" element={<NotFound />} />
		</Route>
	</RoutesDOM>
);

export default Routes;
