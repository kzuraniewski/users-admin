import React from 'react';
import { Box, InputAdornment, TextField, Typography } from '@mui/material';
import { FormContext } from './EditableForm.jsx';

const EditableField = ({ label, name, short = false, money = false, ...props }) => {
	const fixedValue = (value, replacer = '', after = '') =>
		value?.toString().length ? `${value} ${after}` : replacer;

	return (
		<FormContext.Consumer>
			{({ editMode, formik }) =>
				editMode ? (
					<TextField
						name={name}
						label={label}
						value={fixedValue(formik.values[name])}
						onChange={formik.handleChange}
						error={Boolean(formik.touched[name] && formik.errors[name])}
						helperText={
							formik.touched[name] && formik.errors[name] && 'Nieprawidłowa wartość'
						}
						onBlur={() => formik.setTouched({ ...formik.touched, [name]: true })}
						onFocus={() => formik.setTouched({ ...formik.touched, [name]: false })}
						fullWidth={!short}
						InputProps={
							//prettier-ignore
							money ? 
								{ endAdornment: <InputAdornment position='end'>zł</InputAdornment> }
								: null
						}
						{...props}
					/>
				) : (
					<Box mb={1} mt={2}>
						<Typography variant='caption' color={'rgba(0, 0, 0, 0.6)'}>
							{label}
						</Typography>
						<Typography variant='body2' sx={{ mt: 0.5, fontSize: '1rem' }}>
							{fixedValue(formik.values[name], '[brak]', money ? 'zł' : '')}
						</Typography>
					</Box>
				)
			}
		</FormContext.Consumer>
	);
};

export default EditableField;
