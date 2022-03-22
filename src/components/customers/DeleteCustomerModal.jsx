import { Button, Typography } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import React from 'react';

/**
 * @typedef {import('@mui/material').DialogProps} DialogProps
 * @typedef {DialogProps & {onConfirm: () => any; onCancel: () => any}} DeleteCustomerDialogProps
 * @param {DeleteCustomerDialogProps} props
 */
const DeleteCustomerModal = ({ onConfirm, onCancel, ...props }) => {
	return (
		<Dialog {...props}>
			<Typography>Czy na pewno chcesz usunąć użytkownika?</Typography>

			<Button onClick={() => onCancel()} variant='outlined'>
				Anuluj
			</Button>
			<Button onClick={() => onConfirm()} variant='contained'>
				Usuń
			</Button>
		</Dialog>
	);
};

export default DeleteCustomerModal;
