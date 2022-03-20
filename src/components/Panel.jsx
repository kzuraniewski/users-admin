import { Box } from '@mui/material';
import React, { useState } from 'react';
import AddUserModal from './add-user/AddUserModal.jsx';
import UsersTable from './UsersTable.jsx';

const Panel = props => {
	const [openModal, setOpenModal] = useState(false);

	return (
		<>
			<AddUserModal
				open={openModal}
				onClose={() => setOpenModal(false)}
				closeModal={() => setOpenModal(false)}
			/>
			<Box height='80vh' padding='45px 30px' {...props}>
				<UsersTable setShow={setOpenModal} />
			</Box>
		</>
	);
};

export default Panel;

// TODO: Snackbars
