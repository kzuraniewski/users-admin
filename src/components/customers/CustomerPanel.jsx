import React, { useState, useEffect } from 'react';
import { Button, Tab, Typography, Box, Paper, TextField } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import Horizontal from '../utility/Horizontal';
import { useFormik } from 'formik';
import * as yup from 'yup';

const validationSchema = yup.object({
	lp: yup.number().required('To pole jest wymagane'),
	data: yup.date(),
	nrUmowy: yup.string(),
	firma: yup.string(),
	nip: yup
		.number()
		.integer()
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

const Field = (
	{ label, name, formik: { values, touched, errors, handleChange }, ...props } = null
) => {
	return (
		<TextField
			name={name}
			label={label}
			value={values[name]}
			onChange={handleChange}
			error={touched[name] && Boolean(errors[name])}
			helperText={touched[name] && errors[name]}
			{...props}
		/>
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
					<form onSubmit={formik.handleSubmit}>
						<TabPanel value='1'>
							{/* Ogólne */}
							<Field label='LP' name='lp' disabled formik={formik} />
							<Field label='Data' name='data' formik={formik} />
							<Field label='Adres strony' name='url' formik={formik} />
						</TabPanel>
						<TabPanel value='2'>
							{/* Dane kontaktowe */}
							<Horizontal width={450}>
								<div>
									<Field label='Nazwa firmy' name='firma' formik={formik} />
									<Field label='Adres firmy' name='adres' formik={formik} />
									<Field label='NIP' name='nip' formik={formik} />
								</div>

								<div>
									<Field
										label='Reprezentant'
										name='reprezentant'
										formik={formik}
									/>
									<Field label='E-mail' name='email' formik={formik} />
									<Field label='Telefon' name='telefon' formik={formik} />
								</div>
							</Horizontal>
						</TabPanel>

						<TabPanel value='3'>
							<Field label='Kwota całkowita' name='calkowita' formik={formik} />

							<Horizontal width={450}>
								<Field label='Rata 1' name='rata1' formik={formik} />
								<Field label='Rata 2' name='rata2' formik={formik} />
							</Horizontal>
						</TabPanel>
					</form>
				</TabContext>

				<Box display='flex' justifyContent='flex-end' mt='auto'>
					{editMode ? (
						<Button
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
