import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

function App() {
	return (
		<div className="admin-panel-app bg-ghostWhite min-h-screen grid grid-cols-[15%_1fr] grid-rows-[max-content_1fr]">
			<Sidebar />
			<Header />
		</div>
	);
}

export default App;
