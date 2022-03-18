import { FormControl, Input, InputLabel, Typography } from '@mui/material';
import React from 'react';

const AddUserForm = () => {
	return (
		<FormControl>
			<Typography>Dodaj użytkownika</Typography>

			<InputLabel htmlFor='test'>Test</InputLabel>
			<Input id='test' />
		</FormControl>
	);
};

export default AddUserForm;
