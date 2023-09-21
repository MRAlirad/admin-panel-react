import { isRouteErrorResponse, useRouteError } from 'react-router-dom';

const NotFound = () => {
	const error = useRouteError();
	return (
		<div className="no-found-apage">
			<h1 className="title">Ooops</h1>
			<p className="text">
				{isRouteErrorResponse(error) ? 'This page does not exist' : 'An unexpected error happened'}
			</p>
		</div>
	);
};

export default NotFound;
