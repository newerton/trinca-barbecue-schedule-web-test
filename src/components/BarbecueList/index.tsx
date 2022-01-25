import BarbecueListItem from 'components/BarbecueListItem';

const users = [
	{
		id: '10',
		name: 'Newerton Varga de Araujo',
		value: '123.00',
		paid: true,
	},
	{
		id: '20',
		name: 'Patricia de Oliveira Araujo',
		value: '321.00',
		paid: false,
	},
];

const BarbecueList = () => {
	return (
		<>
			{users.map((user) => {
				return (
					<BarbecueListItem
						key={user.id}
						id={user.id}
						name={user.name}
						value={user.value}
						paid={user.paid}
					/>
				);
			})}
		</>
	);
};

export default BarbecueList;
