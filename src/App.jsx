import React from 'react';
import UsersTable from './components/UsersTable';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { plPL } from '@mui/material/locale';
import { plPL as plPLDataGrid } from '@mui/x-data-grid';
import Header from './components/Header';

const theme = createTheme(plPL, plPLDataGrid);

function App() {
	return (
		<>
			<CssBaseline />
			<ThemeProvider theme={theme}>
				<Header />
				<div style={{ height: '80vh', width: '100%', padding: '30px' }}>
					<UsersTable />
				</div>
			</ThemeProvider>
		</>
	);
}

export default App;
