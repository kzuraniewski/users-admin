import { Box } from '@mui/material';
import React, { useEffect, useState } from 'react';
import getRandomUsers from '../../testing/getRandomUsers.js';
import CustomersTable from './CustomersTable.jsx';
import CustomerEdit from './CustomerEdit.jsx';

const columns = [
	{ field: 'lp', headerName: 'LP', type: 'number' },
	{ field: 'data', headerName: 'Data' },
	{ field: 'nrUmowy', headerName: 'Nr umowy', width: 120 },
	{ field: 'firma', headerName: 'Firma', width: 350 },
	{ field: 'nip', headerName: 'NIP', width: 120 },
	{ field: 'adres', headerName: 'Adres', width: 300 },
	{ field: 'reprezentant', headerName: 'Reprezentant', width: 170 },
	{ field: 'telefon', headerName: 'Telefon', width: 150 },
	{ field: 'email', headerName: 'E-mail', width: 200 },
	{
		field: 'calkowita',
		headerName: 'Kwota całkowita',
		width: 130,
		type: 'number',
	},
	{ field: 'calkowitaSlownie', headerName: 'Słownie', width: 220 },
	{ field: 'rata1', headerName: 'Rata 1', width: 130, type: 'number' },
	{ field: 'rata1Slownie', headerName: 'Słownie', width: 220 },
	{ field: 'rata2', headerName: 'Rata 2', width: 130, type: 'number' },
	{ field: 'rata2Slownie', headerName: 'Słownie', width: 220 },
];

const rows = getRandomUsers(25);

const Panel = props => {
	const [selectedUser, setSelectedUser] = useState(null);

	useEffect(() => {
		console.log(selectedUser);
	}, [selectedUser]);

	return (
		<>
			<Box height='80vh' padding='45px 30px' {...props}>
				{selectedUser !== null ? (
					<CustomerEdit
						onSave={customerData => console.log(customerData)}
						onReturn={() => setSelectedUser(null)}
					/>
				) : (
					<CustomersTable
						columns={columns}
						rows={rows}
						getRowId={row => row.lp}
						onRowSelected={id => setSelectedUser(id)}
					/>
				)}
			</Box>
		</>
	);
};

export default Panel;

// TODO: Snackbars
// FIXME: Opening user panel not through changing `selectedUser`
// TODO: Formatting values
