import React, { useState } from 'react';
import { Button, Tab, Typography, Box, Paper, IconButton } from '@mui/material';
import { DeleteForever as DeleteForeverIcon } from '@mui/icons-material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { EditableForm, EditableField, HorizontalGroup, EditToggle } from '../editable-form';
import * as yup from 'yup';
import DeleteCustomerModal from './DeleteCustomerModal';
import Snackbar from '../Snackbar';

// TODO: Better validation
const validationSchema = yup.object({
	lp: yup.number().required('To pole jest wymagane'),
	data: yup.date(),
	nrUmowy: yup.string(),
	firma: yup.string(),
	nip: yup
		.number()
		.integer('Numer NIP jest nieprawidłowy')
		.min(1_000_000_000, 'Numer NIP jest nieprawidłowy')
		.max(9_999_999_999, 'Numer NIP jest nieprawidłowy'),
	adres: yup.string(),
	reprezentant: yup.string(),
	telefon: yup.string(),
	email: yup.string().email('Adres email jest nieprawidłowy'),
	calkowita: yup.number().required('To pole jest wymagane'),
	rata1: yup.number(),
	rata2: yup.number(),
});

const defaultSnackbarState = {
	label: '',
	open: false,
	severity: 'success',
};

const CustomerPanel = ({ data }) => {
	const [tabIndex, setTabIndex] = useState('1');
	const [editMode, setEditMode] = useState(false);
	const [snackbarState, setSnackbarState] = useState(defaultSnackbarState);
	const [openDeleteModal, setOpenDeleteModal] = useState(false);

	const showSnackbar = (label = snackbarState.label, severity = snackbarState.severity) => {
		setSnackbarState(snackbarState => ({ ...snackbarState, label, severity, open: true }));
	};

	const hideSnackbar = () => setSnackbarState(defaultSnackbarState);

	return (
		<Box>
			<Snackbar
				open={snackbarState.open}
				label={snackbarState.label}
				onClose={(e, reason) => {
					if (reason === 'clickaway') return;
					hideSnackbar();
				}}
				AlertProps={{ onClose: hideSnackbar }}
			/>

			<DeleteCustomerModal
				open={openDeleteModal}
				onConfirm={() => {
					showSnackbar('Klient został usunięty');
					setOpenDeleteModal(false);
				}}
				onCancel={() => {
					setOpenDeleteModal(false);
				}}
			/>

			<Box display='flex'>
				<Typography variant='h4' component='h1' sx={{ flex: 1 }}>
					Panel klienta
				</Typography>

				<div>
					<EditToggle
						editMode={editMode}
						onEnable={() => setEditMode(true)}
						onDisable={() => setEditMode(false)}
					/>

					<IconButton color='error' onClick={() => setOpenDeleteModal(true)}>
						<DeleteForeverIcon />
					</IconButton>
				</div>
			</Box>

			<Paper
				sx={{ padding: 3, mt: 2, minHeight: 400, display: 'flex', flexDirection: 'column' }}
			>
				<TabContext value={tabIndex}>
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<TabList onChange={(e, value) => setTabIndex(value)}>
							<Tab label='Ogólne' value='1' />
							<Tab label='Dane kontaktowe' value='2' />
							<Tab label='Płatności' value='3' />
						</TabList>
					</Box>

					{/* Form */}
					<EditableForm
						editMode={editMode}
						formikConfig={{
							initialValues: data,
							validationSchema,
							// FIXME: Submit event not working properly
							onSubmit: () => console.log('Customer submit'),
						}}
						id='customer-form'
					>
						<TabPanel value='1'>
							{/* Ogólne */}
							<HorizontalGroup>
								<div>
									<EditableField label='LP' name='lp' disabled />
									<EditableField label='Data podpisania umowy' name='data' />
								</div>

								<div />
							</HorizontalGroup>

							<HorizontalGroup>
								<EditableField label='Adres strony' name='url' />
								<EditableField label='Serwer strony' name='server' />
							</HorizontalGroup>
						</TabPanel>

						<TabPanel value='2'>
							{/* Dane kontaktowe */}
							<HorizontalGroup>
								<div>
									<EditableField label='Nazwa firmy' name='firma' />
									<EditableField label='Adres firmy' name='adres' />
									<EditableField label='NIP' name='nip' />
								</div>

								<div>
									<EditableField label='Reprezentant' name='reprezentant' />
									<EditableField label='E-mail' name='email' />
									<EditableField label='Telefon' name='telefon' />
								</div>
							</HorizontalGroup>
						</TabPanel>

						<TabPanel value='3'>
							<HorizontalGroup>
								<EditableField label='Kwota całkowita' name='calkowita' money />

								<div />
							</HorizontalGroup>

							<HorizontalGroup>
								<EditableField label='Rata 1' name='rata1' money />
								<EditableField label='Rata 2' name='rata2' money />
							</HorizontalGroup>
						</TabPanel>
					</EditableForm>
				</TabContext>

				<Box display='flex' justifyContent='flex-end' mt='auto'>
					{editMode && (
						<Button
							form='customer-form'
							type='submit'
							size='large'
							variant='contained'
							onClick={() => {
								setEditMode(false);
							}}
						>
							Zapisz
						</Button>
					)}
				</Box>
			</Paper>
		</Box>
	);
};

export default CustomerPanel;
