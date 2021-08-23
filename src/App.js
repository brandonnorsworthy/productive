import React, { useState } from 'react';
import './reset.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Login from './components/Login'

function App() {
	const [currentPage, setCurrentPage] = useState('Home');
	const [currentContent, setCurrentContent] = useState('Today');

	const handlePageChange = (page) => setCurrentPage(page)
	const handlecurrentContentChange = (page) => setCurrentContent(page)

	return (
		<>
			<Header handlePageChange={handlePageChange} />
			<main>
				{
					currentPage === 'Home' ? [
						<Navbar currentContent={currentContent} handlecurrentContentChange={handlecurrentContentChange} />,
						<Content currentContent={currentContent} />
					] :
						<Login currentPage={currentPage} handlePageChange={handlePageChange}/>
				}
			</main>
		</>
	);
}

export default App;