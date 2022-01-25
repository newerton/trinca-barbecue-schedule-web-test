import { useCallback, useState } from 'react';
import { Field, FieldArray, Form, Formik } from 'formik';
import * as Yup from 'yup';
import Button from 'components/Button';
import InputDate from 'components/InputDate';
import InputText from 'components/InputText';
import InputTextarea from 'components/InputTextarea';
import { IoIosArrowBack } from 'react-icons/io';

import * as S from './styles';
import api from 'services/api';
import { useToast } from 'hooks/toast';
import { Link } from 'react-router-dom';
import Container from 'components/Styles/Container';
import Row from 'components/Styles/Row';

const schema = Yup.object({
	event_date: Yup.string().nullable().required('Data do evento é obrigatório'),
	description: Yup.string().max(256).required('Descrição é obrigatório'),
	users: Yup.array().of(
		Yup.object().shape({
			name: Yup.string().required('Nome é obrigatório'),
			amount: Yup.string().required('Valor é obrigatório'),
		})
	),
});

type SignInFormData = {
	event_date: string;
	description: string;
	observation: string;
	users: Array<{ name: string; amount: string }>;
};

const BarbecueAdd = () => {
	const [loading, setLoading] = useState(false);
	const { addToast } = useToast();

	const handleSubmit = useCallback(
		async (data: SignInFormData, { resetForm }) => {
			setLoading(true);
			try {
				await api.post(`v1/barbecue`, { ...data });

				addToast({
					type: 'success',
					title: 'Erro ao cadastrar seu evento, tente novamente',
				});
				resetForm();
				setLoading(false);
			} catch (err) {
				addToast({
					type: 'error',
					title: 'Erro ao cadastrar seu evento, tente novamente',
				});
				setLoading(false);
			}
		},
		[addToast]
	);

	return (
		<Container>
			<div className="mb-lg">
				<Link to="/" className="text-decoration-none">
					<IoIosArrowBack /> Voltar
				</Link>
			</div>
			<Formik
				initialValues={{
					event_date: '',
					description: '',
					observation: '',
					users: [{ name: '', amount: '' }],
				}}
				validationSchema={schema}
				onSubmit={handleSubmit}
			>
				{({ errors, touched, values }) => (
					<Form>
						<Row>
							<S.Col cols={1}>
								<InputDate
									label="Data do evento"
									placeholder="Data do evento"
									name="event_date"
									errors={errors}
									touched={touched}
								/>
							</S.Col>
							<S.Col cols={2}>
								<InputText
									label="Descrição"
									placeholder="Descrição"
									name="description"
									errors={errors}
									touched={touched}
								/>
							</S.Col>
						</Row>
						<Row>
							<S.Col cols={3}>
								<InputTextarea
									label="Observação"
									placeholder="Observação"
									name="observation"
									errors={errors}
									touched={touched}
								/>
							</S.Col>
						</Row>

						<hr className="mt-sm mb-sm" />

						<Row>
							<S.Col cols={3}>
								<h2 className="mb-lg">Participantes</h2>
							</S.Col>
						</Row>

						<div className="mb-xxl">
							<FieldArray
								name="users"
								render={(arrayHelpers) => {
									const users = values.users;
									return (
										<div>
											{users && users.length > 0
												? users.map((user, index) => (
														<Row key={index}>
															<S.Col cols={2}>
																<InputText
																	label="Nome do participante"
																	placeholder="Nome"
																	name={`users.${index}.name`}
																	errors={errors}
																	touched={touched}
																/>
															</S.Col>
															<S.Col cols={1}>
																<InputText
																	label="Valor"
																	placeholder="Valor"
																	name={`users.${index}.amount`}
																	type="number"
																	errors={errors}
																	touched={touched}
																/>
																<label>
																	<Field
																		type="checkbox"
																		name={`users.${index}.has_beer`}
																		value="1"
																		className="mr-sm mb-md"
																	/>
																	Incluí bebida
																</label>
																<S.ButtonRemoveUsers
																	type="button"
																	onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
																>
																	Remover participante
																</S.ButtonRemoveUsers>
															</S.Col>
														</Row>
												  ))
												: null}
											<S.ButtonAddUsers
												type="button"
												onClick={() =>
													arrayHelpers.push({
														name: '',
														amount: '',
													})
												}
											>
												Adicionar participantes
											</S.ButtonAddUsers>
										</div>
									);
								}}
							/>
						</div>

						<Button type="submit" loading={loading} label="Entrar" />
					</Form>
				)}
			</Formik>
		</Container>
	);
};

export default BarbecueAdd;
