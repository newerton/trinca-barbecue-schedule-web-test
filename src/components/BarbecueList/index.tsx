import BarbecueListItem from 'components/BarbecueListItem';

type ItemProps = {
	items: Array<{
		id: string;
		name: string;
		amount: number;
		has_beer: boolean;
		paid: boolean;
	}>;
};

const BarbecueList = ({ items }: ItemProps) => {
	return (
		<>
			{items.map((item) => {
				return (
					<BarbecueListItem
						key={item.id}
						id={item.id}
						name={item.name}
						amount={item.amount}
						has_beer={item.has_beer}
						paid={item.paid}
					/>
				);
			})}
		</>
	);
};

export default BarbecueList;
