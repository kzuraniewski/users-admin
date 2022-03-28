import React, { useState } from 'react';
import { Button, Tab, Typography, Box, Paper, TextField, InputAdornment } from '@mui/material';
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

/**
 * @typedef {import('@mui/material').TextFieldProps} TextFieldProps
 * @typedef {TextFieldProps & {label: string; name: string; formik: object}} FieldProps
 * @param {FieldProps} props
 */
const Field = ({ label, name, formik, ...props }) => {
	// console.log(formik.touched);

	return (
		<TextField
			name={name}
			label={label}
			value={formik.values[name]}
			onChange={formik.handleChange}
			error={Boolean(formik.touched[name] && formik.errors[name])}
			helperText={formik.touched[name] && formik.errors[name] && 'Nieprawidłowa wartość'}
			onBlur={() => formik.setTouched({ ...formik.touched, [name]: true })}
			onFocus={() => formik.setTouched({ ...formik.touched, [name]: false })}
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
							<Field
								label='Kwota całkowita'
								name='calkowita'
								formik={formik}
								InputProps={{
									endAdornment: (
										<InputAdornment position='end'>zł</InputAdornment>
									),
								}}
							/>

							<Horizontal width={450}>
								<Field
									label='Rata 1'
									name='rata1'
									formik={formik}
									InputProps={{
										endAdornment: (
											<InputAdornment position='end'>zł</InputAdornment>
										),
									}}
								/>
								<Field
									label='Rata 2'
									name='rata2'
									formik={formik}
									InputProps={{
										endAdornment: (
											<InputAdornment position='end'>zł</InputAdornment>
										),
									}}
								/>
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
