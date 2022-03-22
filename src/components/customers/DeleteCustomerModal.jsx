import {
	Button,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
} from '@mui/material';
import Dialog from '@mui/material/Dialog';
import React from 'react';

/**
 * @typedef {import('@mui/material').DialogProps} DialogProps
 * @typedef {DialogProps & {onConfirm: () => any; onCancel: () => any}} DeleteCustomerDialogProps
 * @param {DeleteCustomerDialogProps} props
 */
const DeleteCustomerModal = ({ onConfirm, onCancel, ...props }) => {
	return (
		<Dialog onClose={() => onCancel()} {...props}>
			<DialogTitle>Czy na pewno chcesz usunąć klienta?</DialogTitle>

			<DialogContent>
				<DialogContentText>Ta czynność jest nieodwracalna</DialogContentText>
			</DialogContent>

			<DialogActions>
				<Button onClick={() => onCancel()}>Anuluj</Button>
				<Button onClick={() => onConfirm()} color='error'>
					Usuń
				</Button>
			</DialogActions>
		</Dialog>
	);
};

export default DeleteCustomerModal;
