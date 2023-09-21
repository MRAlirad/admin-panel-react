import { createBrowserRouter } from 'react-router-dom';

import App from './App';
import Dashboard from './pages/Dashboard';
import Shop from './pages/Shop';
import Tables from './pages/Tables';
import LogIn from './pages/LogIn';
import Profile from './pages/Profile';
import Kanban from './pages/Kanban';
import NotFound from './pages/NotFound';

const router = createBrowserRouter([
	{
		path: '/',
		errorElement: <NotFound />,
		element: <App />,
		children: [
			{
				path: '/dashboard',
				element: <Dashboard />,
			},
			{
				path: '/shop',
				element: <Shop />,
			},
			{
				path: '/tables',
				element: <Tables />,
			},
			{
				path: '/kanban',
				element: <Kanban />,
			},
			{
				path: '/profile',
				element: <Profile />,
			},
			{
				path: '/login',
				element: <LogIn	 />,
			},
		],
	},
]);

export default router;
