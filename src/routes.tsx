import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import Profile from './pages/Profile';
import Kanban from './pages/Kanban';
import Dashboard from './pages/Dashboard';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
	{
		path: '/',
		errorElement: <NotFound />,
		element: <App />,
		children: [
			{
				path: '/profile',
				element: <Profile />,
			},
			{
				path: '/kanban',
				element: <Kanban />,
			},
			{
				path: '/dashboard',
				element: <Dashboard />,
			},
		],
	},
]);

export default router;
