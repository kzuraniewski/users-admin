import React, { Suspense, lazy } from 'react';
import theme from './theme.js';
import { CssBaseline, ThemeProvider, Box } from '@mui/material';
import Header from './components/Header';
import Sidenav from './components/Sidenav';
import { Route, Routes } from 'react-router-dom';
import Loading from './components/Loading.jsx';
// import Customers from './components/customers/Customers.jsx';

const Customers = lazy(() => import('./components/customers/Customers.jsx'));

function App() {
	return (
		<>
			<CssBaseline />
			<ThemeProvider theme={theme}>
				<Header />

				<Box display='flex'>
					<Sidenav />

					<Suspense fallback={<Loading />}>
						<Routes>
							<Route path='/' element={<div>Strona główna</div>} />
							<Route path='/klienci/*' element={<Customers />} />
						</Routes>
					</Suspense>
				</Box>
			</ThemeProvider>
		</>
	);
}

export default App;

// TODO: Authorisation
// FEATURE: Main panel with Masonry
