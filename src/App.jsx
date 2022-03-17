import React from 'react';
import UsersTable from './components/UsersTable';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { plPL } from '@mui/material/locale';
import { plPL as plPLDataGrid } from '@mui/x-data-grid';

const theme = createTheme(plPL, plPLDataGrid);

function App() {
	return (
		<ThemeProvider theme={theme}>
			<div style={{ height: '80vh', width: '100%' }}>
				<UsersTable />
			</div>
		</ThemeProvider>
	);
}

export default App;
