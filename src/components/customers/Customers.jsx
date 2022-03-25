import React, { useRef } from 'react';
import { Box } from '@mui/material';
import { GridActionsCellItem } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CustomersTable from './CustomersTable.jsx';
import CustomerEdit from './CustomerEdit.jsx';
import { Route, Routes, useLocation } from 'react-router-dom';
import getRandomUsers from '../../testing/getRandomUsers.js';

// Columns and rows will be fetched from db
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

const Customers = () => {
	const { pathname } = useLocation();

	const actionsColumn = useRef({
		field: 'actions',
		type: 'actions',
		getActions: params => [
			<GridActionsCellItem
				icon={<EditIcon />}
				label='Edytuj'
				href={`${pathname}/${params.id}?edit=true`}
			/>,
			<GridActionsCellItem
				icon={<DeleteIcon />}
				label='Usuń'
				href={`${pathname}/${params.id}`}
			/>,
		],
		hideable: false,
	});

	return (
		<Box flex={1} height='80vh' padding='45px 30px'>
			<Routes>
				<Route
					index
					element={
						<CustomersTable
							columns={[actionsColumn.current, ...columns]}
							rows={rows}
							getRowId={row => row.lp}
						/>
					}
				/>
				<Route
					path=':id'
					element={
						<CustomerEdit data={rows[0]} onSave={undefined} onReturn={undefined} />
					}
				/>
			</Routes>
		</Box>
	);
};

export default Customers;
