import { Box } from '@mui/material';
import React from 'react';
import UsersTable from './UsersTable.jsx';

const Panel = () => {
	return (
		<Box height='80vh' padding='45px 30px'>
			<UsersTable />
		</Box>
	);
};

export default Panel;
