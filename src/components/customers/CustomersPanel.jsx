import { Box } from '@mui/material';
import React, { useState } from 'react';
import AddCustomerModal from './AddCustomerModal.jsx';
import CustomersTable from './CustomersTable.jsx';

const Panel = props => {
	const [openModal, setOpenModal] = useState(false);

	return (
		<>
			<AddCustomerModal
				open={openModal}
				onClose={() => setOpenModal(false)}
				closeModal={() => setOpenModal(false)}
			/>
			<Box height='80vh' padding='45px 30px' {...props}>
				<CustomersTable setShow={setOpenModal} />
			</Box>
		</>
	);
};

export default Panel;

// TODO: Snackbars
