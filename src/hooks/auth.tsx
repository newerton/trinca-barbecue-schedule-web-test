import React, { createContext, useCallback, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

// import { useSnackbar } from 'notistack';
import api from 'services/api';
import { useToast } from './toast';

interface Client {
	name: string;
	email: string;
}

interface AuthState {
	user: Client;
	token?: string;
}

interface UserCredentials {
	email: string;
	password: string;
}

interface AuthContextProps {
	loading: boolean;
	signed: boolean;
	user: Client;
	signIn(credentials: UserCredentials): Promise<void>;
	signOut(): void;
}

const userStorageKey = '@Trinca:user';
const tokenStorageKey = '@Trinca:token';

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

export const AuthProvider: React.FC = ({ children }) => {
	// const { enqueueSnackbar } = useSnackbar();
	const [loading, setLoading] = useState(false);
	const { addToast } = useToast();
	const navigate = useNavigate();

	const [data, setData] = useState<AuthState>(() => {
		const user = localStorage.getItem(userStorageKey);
		const token = localStorage.getItem(tokenStorageKey);

		if (user && token) {
			api.defaults.headers.common.Authorization = `Bearer ${token}`;
			return { user: JSON.parse(user), token };
		}

		return {} as AuthState;
	});

	const signIn = useCallback(
		async ({ email, password }) => {
			setLoading(true);
			try {
				const response = await api.post('v1/client/login', { email, password });

				const user = response.data.data;
				// const user = {
				// 	name: 'newerton',
				// 	email: 'newerton.araujo@gmail.com',
				// 	token: 'abcd',
				// };
				const { token } = user;

				delete user.token;

				api.defaults.headers.common.Authorization = `Bearer ${token}`;

				localStorage.setItem(userStorageKey, JSON.stringify(user));
				localStorage.setItem(tokenStorageKey, token);

				setData({ user, token });
				setLoading(false);
				await addToast({
					type: 'success',
					title: 'Login efetuado com sucesso',
				});
				navigate('/');
			} catch (err) {
				setLoading(false);
				addToast({
					type: 'error',
					title: 'Erro ao efetuar o login, tente novamente.',
				});
			}
		},
		[addToast, navigate]
	);

	const signOut = useCallback(() => {
		localStorage.removeItem(userStorageKey);
		localStorage.removeItem(tokenStorageKey);

		setData({} as AuthState);
	}, []);

	return (
		<AuthContext.Provider
			value={{
				loading,
				signed: !!data.user,
				user: data.user,
				signIn,
				signOut,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = (): AuthContextProps => {
	const context = useContext(AuthContext);

	if (!context) {
		throw new Error('useAuth must be used within a AuthProvider');
	}

	return context;
};
