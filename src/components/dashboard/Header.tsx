import HeaderItem from './HeaderItem';

const Header = () => {
	return (
		<div className="header grid grid-cols-6 gap-2.5 col-[1/7]">
			<HeaderItem
				icon="bar_chart"
				title="درآمد"
				value="12345 تومان"
			/>
			<HeaderItem
				icon="attach_money"
				title="خرج"
				value="123 تومان"
			/>
			<HeaderItem
				icon="sell"
				title="فروش"
				value="12358 تومان"
			/>
			<HeaderItem
				icon="account_balance_wallet"
				title="موجوری"
				value="10 م.تومان"
			/>
			<HeaderItem
				icon="add_task"
				title="درخواست های جدید"
				value="6578"
			/>
			<HeaderItem
				icon="file_copy"
				title="همه پروژه ها"
				value="5615"
			/>
		</div>
	);
};

export default Header;
