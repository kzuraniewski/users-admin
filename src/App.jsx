import React from 'react';
import theme from './theme.js';
import { CssBaseline, ThemeProvider, Box } from '@mui/material';
import Header from './components/Header';
import Panel from './components/customers/CustomersPanel';
import Sidenav from './components/Sidenav';

function App() {
	return (
		<>
			<CssBaseline />
			<ThemeProvider theme={theme}>
				<Header />
				<Box display='flex'>
					<Sidenav />

					<Panel sx={{ flex: '1' }} />
				</Box>
			</ThemeProvider>
		</>
	);
}

export default App;

// TODO: Routing
// TODO: Authorisation
// FEATURE: Main panel with Masonry
