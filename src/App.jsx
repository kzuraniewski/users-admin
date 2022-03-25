import React from 'react';
import theme from './theme.js';
import { CssBaseline, ThemeProvider, Box } from '@mui/material';
import Header from './components/Header';
import Sidenav from './components/Sidenav';
import { Route, Routes } from 'react-router-dom';
import Customers from './components/customers/Customers.jsx';

function App() {
	return (
		<>
			<CssBaseline />
			<ThemeProvider theme={theme}>
				<Header />
				<Box display='flex'>
					<Sidenav />

					<Routes>
						<Route path='/' element={<div>Strona główna</div>} />
						<Route path='/klienci/*' element={<Customers />} />
					</Routes>
				</Box>
			</ThemeProvider>
		</>
	);
}

export default App;

// TODO: Authorisation
// FEATURE: Main panel with Masonry
