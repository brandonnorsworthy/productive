import './reset.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Content from './components/Content'

function App() {
	return (
		<>
			<Header />
			<main>
				<Navbar />
				<Content />
			</main>
		</>
	);
}

export default App;
