import React, { useState } from 'react';
import { Button, Tab, Typography, Box, Paper } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { EditableForm, EditableField, HorizontalGroup } from '../editable-form';
import * as yup from 'yup';

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

const CustomerPanel = ({ data, onSave }) => {
	const [tabIndex, setTabIndex] = useState('1');
	const [editMode, setEditMode] = useState(false);

	return (
		<Box>
			<Typography variant='h4' component='h1'>
				Panel klienta
			</Typography>

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
									<EditableField label='Data' name='data' />
									<EditableField label='Adres strony' name='url' />
								</div>

								<div />
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
					{editMode ? (
						<Button
							form='customer-form'
							type='submit'
							size='large'
							variant='contained'
							onClick={() => {
								onSave(0);
								setEditMode(false);
							}}
						>
							Zapisz
						</Button>
					) : (
						<Button size='large' variant='outlined' onClick={() => setEditMode(true)}>
							Edytuj
						</Button>
					)}
				</Box>
			</Paper>
		</Box>
	);
};

export default CustomerPanel;
