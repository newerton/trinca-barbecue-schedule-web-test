import InputPassword from 'components/InputPassword/InputPassword';
import React, { useCallback } from 'react';
import InputText from 'components/InputText';
import { Form, Formik } from 'formik';
import { useAuth } from 'hooks/auth';
import * as S from './styles';
import * as Yup from 'yup';
import Button from 'components/Button';

const schema = Yup.object().shape({
	email: Yup.string()
		.email('E-mail inválido.')
		.required('O e-mail é obrigatório.'),
	password: Yup.string()
		.min(6, 'O mínimo é 6 caracteres.')
		.required('A senha é obrigatória.'),
});

type SignInFormData = {
	email: string;
	password: string;
};

const Login = () => {
	const { signIn, loading } = useAuth();

	const handleSubmit = useCallback(
		async (data: SignInFormData, { resetForm }) => {
			await signIn(data);
			resetForm();
		},
		[signIn]
	);

	return (
		<S.Container>
			<Formik
				initialValues={{ email: '', password: '' }}
				validationSchema={schema}
				onSubmit={handleSubmit}
				className="form-signin"
			>
				{({ errors, touched }) => (
					<Form>
						<InputText
							label="Login"
							placeholder="e-mail"
							name="email"
							errors={errors}
							touched={touched}
						/>

						<InputPassword
							name="password"
							label="Senha"
							placeholder="senha"
							errors={errors}
							touched={touched}
						/>
						<Button type="submit" loading={loading} label="Entrar" />
					</Form>
				)}
			</Formik>
		</S.Container>
	);
};

export default Login;
