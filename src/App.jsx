import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { plPL } from '@mui/material/locale';
import { plPL as plPLDataGrid } from '@mui/x-data-grid';
import Header from './components/Header';
import Panel from './components/Panel';

const theme = createTheme(plPL, plPLDataGrid, {
	palette: {
		primary: {
			main: '#212121',
			light: '#484848',
			dark: '#000000',
			contrastText: '#ffffff',
		},
		secondary: {
			main: '#0d7377',
			light: '#4ca2a6',
			dark: '#00474b',
			contrastText: '$ffffff',
		},
	},
	components: {
		MuiTextField: {
			defaultProps: {
				variant: 'standard',
				margin: 'dense',
			},
		},
	},
});

function App() {
	return (
		<>
			<CssBaseline />
			<ThemeProvider theme={theme}>
				<Header />
				<Panel />
			</ThemeProvider>
		</>
	);
}

export default App;
