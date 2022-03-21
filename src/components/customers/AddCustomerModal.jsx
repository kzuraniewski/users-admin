import { Paper } from '@mui/material';
import Modal from '@mui/material/Modal';
import React from 'react';
import AddCustomerForm from './AddCustomerForm';

const boxStyle = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	p: 4,
};

const AddUserModal = ({ closeModal = null, ...props }) => {
	return (
		<Modal {...props}>
			<Paper sx={boxStyle} variant='elevation' elevation={2}>
				<AddCustomerForm
					onSubmit={() => {
						closeModal && closeModal();
					}}
				/>
			</Paper>
		</Modal>
	);
};

export default AddUserModal;

// FIXME: Dialog invalid overload
// TODO: Use Dialog instead of Modal
