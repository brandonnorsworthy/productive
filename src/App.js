import React, { useState } from 'react';
import './reset.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Content from './components/Content'
import Login from './components/Login'

function App() {
	const [currentPage, setCurrentPage] = useState('home');
	const [currentContent, setCurrentContent] = useState('today');

	const handlePageChange = (page) => setCurrentPage(page)
	const handleCurrentContentChange = (page) => setCurrentContent(page)

	return (
		<>
			<Header currentContent={currentContent} handlePageChange={handlePageChange} />
			<main>
				{
					currentPage === 'home' ? [
						<Navbar currentContent={currentContent} handleCurrentContentChange={handleCurrentContentChange} />,
						<Content currentContent={currentContent} />
					] :
						<Login currentPage={currentPage} handlePageChange={handlePageChange}/>
				}
			</main>
		</>
	);
}

export default App;