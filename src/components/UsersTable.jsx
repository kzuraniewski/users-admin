import React from 'react';
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import getRandomUsers from '../testing/getRandomUsers.js';
import { Edit, Delete } from '@mui/icons-material';

const columns = [
	{
		field: 'actions',
		headerName: 'Akcje',
		type: 'actions',
		getActions: () => [
			<GridActionsCellItem icon={<Delete />} label='Usuń' />,
			<GridActionsCellItem icon={<Edit />} label='Edytuj' />,
		],
	},
	{ field: 'id', headerName: 'LP', width: 100, type: 'number' },
	{ field: 'data', headerName: 'Data', width: 150 },
	{ field: 'nrUmowy', headerName: 'Numer umowy', width: 150 },
	{ field: 'firma', headerName: 'Firma', width: 150 },
	{ field: 'nip', headerName: 'NIP', width: 150 },
	{ field: 'adres', headerName: 'Adres', width: 150 },
	{ field: 'reprezentant', headerName: 'Reprezentant', width: 150 },
	{ field: 'telefon', headerName: 'Telefon', width: 150 },
	{ field: 'email', headerName: 'E-mail', width: 150 },
	{ field: 'calkowita', headerName: 'Kwota całkowita', width: 150, type: 'number' },
	{ field: 'calkowitaSlownie', headerName: 'Słownie', width: 150 },
	{ field: 'rata1', headerName: 'Rata 1', width: 150, type: 'number' },
	{ field: 'rata1Slownie', headerName: 'Słownie', width: 150 },
	{ field: 'rata2', headerName: 'Rata 2', width: 150, type: 'number' },
	{ field: 'rata2Slownie', headerName: 'Słownie', width: 150 },
];

const rows = getRandomUsers(25);

const UsersTable = () => {
	return <DataGrid rows={rows} columns={columns} />;
};

export default UsersTable;
