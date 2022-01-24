import React from 'react';
import { Routes as RoutesDOM, Route } from 'react-router-dom';

// import RoutePrivate from 'routes';

import Home from 'pages/Home';
import Login from 'pages/Login';
import NotFound from 'pages/NotFound';
import RoutePrivate from './RoutePrivate';

import LayoutLogin from 'layouts/Login';
import LayoutDefault from 'layouts/Default';

const Routes = () => (
	<RoutesDOM>
		<Route element={<LayoutLogin />}>
			<Route path="/login" element={<Login />} />
			<Route path="*" element={<NotFound />} />
		</Route>
		<Route element={<LayoutDefault />}>
			<Route
				path="/"
				element={
					<RoutePrivate>
						<Home />
					</RoutePrivate>
				}
			/>
		</Route>
	</RoutesDOM>
);

export default Routes;
