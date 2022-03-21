import { Box } from '@mui/material';
import React, { useState } from 'react';
import CustomersTable from './CustomersTable.jsx';

const Panel = props => {
	return (
		<>
			<Box height='80vh' padding='45px 30px' {...props}>
				<CustomersTable />
			</Box>
		</>
	);
};

export default Panel;

// TODO: Snackbars
