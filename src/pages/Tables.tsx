import ComplexTable from "../components/tables/ComplexTable";
import DevelopmentTable from "../components/tables/DevelopmentTable";

const Tables = () => {
	return(
		<div className="grid grid-cols-2 gap-3">
			<ComplexTable />
			<DevelopmentTable />
		</div>
	);
};

export default Tables;
