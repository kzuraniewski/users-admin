import React from 'react';
import {
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Button,
} from '@mui/material';

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
