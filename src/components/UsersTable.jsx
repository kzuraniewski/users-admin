import React from 'react';
import {
	DataGrid,
	GridToolbarColumnsButton,
	GridToolbarContainer,
	GridToolbarDensitySelector,
	GridToolbarExport,
	GridToolbarFilterButton,
} from '@mui/x-data-grid';
import getRandomUsers from '../testing/getRandomUsers.js';
import { Button } from '@mui/material';
import Add from '@mui/icons-material/Add';

const columns = [
	{ field: 'lp', headerName: 'LP', type: 'number' },
	{ field: 'data', headerName: 'Data', editable: true },
	{ field: 'nrUmowy', headerName: 'Nr umowy', width: 120, editable: true },
	{ field: 'firma', headerName: 'Firma', width: 350, editable: true },
	{ field: 'nip', headerName: 'NIP', width: 120, editable: true },
	{ field: 'adres', headerName: 'Adres', width: 300, editable: true },
	{ field: 'reprezentant', headerName: 'Reprezentant', width: 170, editable: true },
	{ field: 'telefon', headerName: 'Telefon', width: 150, editable: true },
	{ field: 'email', headerName: 'E-mail', width: 200, editable: true },
	{
		field: 'calkowita',
		headerName: 'Kwota całkowita',
		width: 130,
		type: 'number',
		editable: true,
	},
	{ field: 'calkowitaSlownie', headerName: 'Słownie', width: 220 },
	{ field: 'rata1', headerName: 'Rata 1', width: 130, type: 'number', editable: true },
	{ field: 'rata1Slownie', headerName: 'Słownie', width: 220 },
	{ field: 'rata2', headerName: 'Rata 2', width: 130, type: 'number', editable: true },
	{ field: 'rata2Slownie', headerName: 'Słownie', width: 220 },
];

const rows = getRandomUsers(25);

const Toolbar = ({ setShow }) => {
	return (
		<GridToolbarContainer>
			<GridToolbarColumnsButton />
			<GridToolbarFilterButton />
			<GridToolbarDensitySelector />
			<GridToolbarExport />

			<Button startIcon={<Add />} onClick={() => setShow(true)} sx={{ ml: 'auto' }}>
				Dodaj
			</Button>
		</GridToolbarContainer>
	);
};

const UsersTable = ({ setShow }) => {
	const handleRowEditCommit = React.useCallback(async params => {
		console.log('cell saved: ', params);
		// TODO: Server communication
	}, []);

	return (
		<DataGrid
			editMode='row'
			onRowEditCommit={handleRowEditCommit}
			rows={rows}
			columns={columns}
			components={{ Toolbar }}
			componentsProps={{ toolbar: { setShow } }}
			getRowId={row => row.lp}
			// rowsPerPageOptions={[5, 15, 50]}
		/>
	);
};

export default UsersTable;

// TODO: Validation
// TODO: User deletion
// TODO: Actions
// TODO: Columns hidden by default
