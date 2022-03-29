import React, { useState } from 'react';
import { Button, Tab, Typography, Box, Paper, TextField, InputAdornment } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useFormik } from 'formik';
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

const DisplayContext = React.createContext(null);

const Field = ({ label, name, short = false, money = false, ...props }) => {
	return (
		<DisplayContext.Consumer>
			{({ editMode, formik }) =>
				editMode ? (
					<TextField
						name={name}
						label={label}
						value={
							formik.values[name].toString().length
								? formik.values[name]
								: editMode
								? ' '
								: ''
						}
						onChange={formik.handleChange}
						error={Boolean(formik.touched[name] && formik.errors[name])}
						helperText={
							formik.touched[name] && formik.errors[name] && 'Nieprawidłowa wartość'
						}
						onBlur={() => formik.setTouched({ ...formik.touched, [name]: true })}
						onFocus={() => formik.setTouched({ ...formik.touched, [name]: false })}
						fullWidth={!short}
						InputProps={
							money && {
								endAdornment: <InputAdornment position='end'>zł</InputAdornment>,
							}
						}
						{...props}
					/>
				) : (
					<Box mb={1} mt={2}>
						<Typography variant='caption' color={'rgba(0, 0, 0, 0.6)'}>
							{label}
						</Typography>
						<Typography variant='body2' sx={{ mt: 0.5, fontSize: '1rem' }}>
							{`${formik.values[name]}${money ? ' zł' : ''}` ?? '[Brak]'}
						</Typography>
					</Box>
				)
			}
		</DisplayContext.Consumer>
	);
};

const HorizontalGroup = ({ children, ...props }) => {
	return (
		<Box
			display='flex'
			justifyContent='space-between'
			width='100%'
			sx={{ '& > *': { flex: 1, '&:not(:last-child)': { pr: 5 } } }}
			{...props}
		>
			{children}
		</Box>
	);
};

const CustomerPanel = ({ data, onSave }) => {
	const [tabIndex, setTabIndex] = useState('1');
	const [editMode, setEditMode] = useState(false);

	const formik = useFormik({
		initialValues: data,
		validationSchema,
		onSubmit: onSave,
	});

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
					<DisplayContext.Provider value={{ formik, editMode }}>
						<form
							id='customer-form'
							onSubmit={e => {
								formik.handleSubmit(e);
							}}
						>
							<TabPanel value='1'>
								{/* Ogólne */}
								<HorizontalGroup>
									<div>
										<Field label='LP' name='lp' disabled />
										<Field label='Data' name='data' />
										<Field label='Adres strony' name='url' />
									</div>

									<div />
								</HorizontalGroup>
							</TabPanel>
							<TabPanel value='2'>
								{/* Dane kontaktowe */}
								<HorizontalGroup>
									<div>
										<Field label='Nazwa firmy' name='firma' />
										<Field label='Adres firmy' name='adres' />
										<Field label='NIP' name='nip' />
									</div>

									<div>
										<Field label='Reprezentant' name='reprezentant' />
										<Field label='E-mail' name='email' />
										<Field label='Telefon' name='telefon' />
									</div>
								</HorizontalGroup>
							</TabPanel>

							<TabPanel value='3'>
								<HorizontalGroup>
									<Field label='Kwota całkowita' name='calkowita' money />

									<div />
								</HorizontalGroup>

								<HorizontalGroup>
									<Field label='Rata 1' name='rata1' money />
									<Field label='Rata 2' name='rata2' money />
								</HorizontalGroup>
							</TabPanel>
						</form>
					</DisplayContext.Provider>
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
