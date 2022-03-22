import createTheme from '@mui/material/styles/createTheme';
import { plPL } from '@mui/material/locale';
import { plPL as plPLDataGrid } from '@mui/x-data-grid';

export default createTheme(plPL, plPLDataGrid, {
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
