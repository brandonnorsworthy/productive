import React, { useState } from 'react';
import './reset.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Login from './components/Login'

function App() {
	const [currentPage, setCurrentPage] = useState('Home');
	const [currentContent, setCurrentContent] = useState('Today');

	const handlePageChange = (page) => {
		console.log(page)
		setCurrentPage(page)
		console.log(currentPage)
	}

	const handlecurrentContentChange = (page) => {
		console.log(page)
		setCurrentContent(page)
		console.log(currentPage)
	}

	return (
		<>
			<Header handlePageChange={handlePageChange} />
			<main>
				{
					currentPage === 'Home' ? [
						<Navbar currentContent={currentContent} handlecurrentContentChange={handlecurrentContentChange} />,
						<Content currentContent={currentContent} />
					] :
						<Login currentPage={currentPage} />
				}
			</main>
		</>
	);
}

export default App