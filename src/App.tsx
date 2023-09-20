import './App.css';
import Sidebar from './components/Sidebar';

function App() {
	return (
		<div className="admin-panel-app bg-ghostWhite min-h-screen grid grid-cols-[15%_1fr] grid-rows-[max-content_1fr]">
			<Sidebar />
		</div>
	);
}

export default App;
