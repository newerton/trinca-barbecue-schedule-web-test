import { useAuth } from 'hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';

const RoutePrivate = ({ children }: { children: JSX.Element }) => {
	const { signed } = useAuth();
	const location = useLocation();

	if (!signed) {
		return <Navigate to="/login" state={{ from: location }} replace />;
	}

	return children;
};

export default RoutePrivate;
