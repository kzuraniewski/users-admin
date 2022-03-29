import React, { useRef, useState } from 'react';
import { Box } from '@mui/material';
import { GridActionsCellItem } from '@mui/x-data-grid';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CustomersTable from './CustomersTable.jsx';
import CustomerPanel from './CustomerPanel.jsx';
import { Route, Routes } from 'react-router-dom';
import getRandomUsers from '../../testing/getRandomUsers.js';
import Snackbar from '../Snackbar.jsx';

// Columns and rows will be fetched from db
const columns = [
	{ field: 'lp', headerName: 'LP', type: 'number' },
	{ field: 'data', headerName: 'Data' },
	{ field: 'url', headerName: 'Adres strony', width: 300 },
	{ field: 'serwer', headerName: 'Serwer', width: 300 },
	{ field: 'nrUmowy', headerName: 'Nr umowy', width: 120 },
	{ field: 'firma', headerName: 'Firma', width: 350 },
	{ field: 'nip', headerName: 'NIP', width: 120 },
	{ field: 'adres', headerName: 'Adres firmy', width: 300 },
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

const rows = getRandomUsers(50);

const defaultSnackbarState = {
	label: '',
	open: false,
	severity: 'success',
};

const Customers = () => {
	const [snackbarState, setSnackbarState] = useState(defaultSnackbarState);
	const actionsColumn = useRef({
		field: 'actions',
		type: 'actions',
		getActions: params => [
			<GridActionsCellItem
				icon={<VisibilityIcon />}
				label='Podgląd'
				href={`/klienci/${params.id}`}
			/>,
		],
		hideable: false,
		width: 60,
	});

	const showSnackbar = (label = snackbarState.label, severity = snackbarState.severity) => {
		setSnackbarState(snackbarState => ({ ...snackbarState, label, severity, open: true }));
	};

	const hideSnackbar = () => setSnackbarState(defaultSnackbarState);

	return (
		<>
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
							<CustomerPanel data={rows[0]} onSave={() => showSnackbar('Zapisano')} />
						}
					/>
				</Routes>
			</Box>

			<Snackbar
				open={snackbarState.open}
				label={snackbarState.label}
				onClose={(e, reason) => {
					if (reason === 'clickaway') return;
					hideSnackbar();
				}}
				AlertProps={{ onClose: hideSnackbar }}
			/>
		</>
	);
};

export default Customers;

// FIXME: useLocation instead of magic words in path
