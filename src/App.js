import React, { Component } from 'react';
import './reset.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Content from './components/Content'

class App extends Component {
	render() {
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
}

export default App;
