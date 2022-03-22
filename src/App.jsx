import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import Header from './components/Header';
import Panel from './components/customers/CustomersPanel';
import Sidenav from './components/Sidenav';
import { Box } from '@mui/material';
import theme from './theme.js';

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
