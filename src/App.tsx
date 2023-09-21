import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<div className="admin-panel-app bg-ghostWhite min-h-screen grid grid-cols-[14%_1fr] grid-rows-[max-content_1fr]">
			<Sidebar />
			<Header />
			<main className='p-5'>
				<Outlet />
			</main>
		</div>
	);
}

export default App;
