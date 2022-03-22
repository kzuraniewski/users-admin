import React from 'react';
import { Snackbar as MuiSnackbar, Alert } from '@mui/material';

/**
 * @typedef {import('@mui/material').SnackbarProps} MuiSnackbarProps
 * @typedef {{label: string; AlertProps?: import('@mui/material').AlertProps}} CustomProps
 * @typedef {MuiSnackbarProps & CustomProps}  SnackbarProps
 * @param {SnackbarProps} props
 */
const Snackbar = ({ label, AlertProps = null, ...props }) => {
	return (
		<MuiSnackbar
			autoHideDuration={6000}
			anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
			{...props}
		>
			<Alert severity='success' sx={{ width: 350 }} {...AlertProps}>
				{label}
			</Alert>
		</MuiSnackbar>
	);
};

export default Snackbar;
