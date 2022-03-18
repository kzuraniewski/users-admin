import { Paper } from '@mui/material';
import Modal from '@mui/material/Modal';
import React from 'react';
import AddUserForm from './AddUserForm';

const boxStyle = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 400,
	p: 4,
};

const AddUserModal = props => {
	return (
		<Modal {...props}>
			<Paper sx={boxStyle} variant='elevation' elevation={2}>
				<AddUserForm />
			</Paper>
		</Modal>
	);
};

export default AddUserModal;
