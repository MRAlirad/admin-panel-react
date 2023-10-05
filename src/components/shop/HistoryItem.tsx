import History from '../../entities/History';

interface Props {
	history: History;
}

const HistoryItem = ({ history }: Props) => {
	return (
		<section className="history-item-section grid grid-cols-[max-content_2fr_1fr_1fr] items-center gap-2.5 px-1 py-4 rounded-2xl hover:bg-white hover:shadow-[0_18px_40px_0_#7090B01F]">
			<div className="img-box rounded-lg h-14 w-14">
				<img
					src={history.img}
					alt={history.title}
				/>
			</div>
			<div className="title-desc-box">
				<h3 className="title text-delftBlue font-medium text-sm line-clamp-1">{history.title}</h3>
				<p className="desc text-powderBlue font-medium text-sm line-clamp-1">{history.description}</p>
			</div>
			<span className="price text-delftBlue text-sm">{history.price} تومان</span>
			<span className="time text-powderBlue text-sm">{history.time}</span>
		</section>
	);
};

export default HistoryItem;
