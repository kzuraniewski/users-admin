import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { plPL } from '@mui/material/locale';
import { plPL as plPLDataGrid } from '@mui/x-data-grid';
import Header from './components/Header';
import Panel from './components/customers/CustomersPanel';
import Sidenav from './components/Sidenav';
import { Box } from '@mui/material';

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
				sx: {
					display: 'block',
				},
			},
		},
		MuiDivider: {
			defaultProps: {
				sx: {
					my: 1,
				},
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
// TODO: Theme in external file
// TODO: User panel, https://codesandbox.io/embed/github/marmelab/react-admin/tree/master/examples/simple?hidenavigation=1&editorsize=0
// TODO: Authorisation
// FEATURE: Main panel with Masonry
