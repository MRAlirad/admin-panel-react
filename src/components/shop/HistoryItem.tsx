import History from '../../entities/History';

interface Props {
	history: History;
}

const HistoryItem = ({ history }: Props) => {
	return (
		<section className="history-item-sextion">
			<div className="img-box rounded-lg h-14 w-14">
				<img
					src={history.img}
					alt={history.title}
				/>
			</div>
			<div className="title-desc-box">
				<h3 className="title">{history.title}</h3>
				<p className="desc">{history.description}</p>
			</div>
			<span className="price">{history.price} تومان</span>
			<span className="time">{history.time}</span>
		</section>
	);
};

export default HistoryItem;
