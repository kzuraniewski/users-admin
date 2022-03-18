import { Box, Button, Typography, TextField } from '@mui/material';
import React from 'react';
import Horizontal from '../utility/Horizontal';

const FieldGroup = ({ children, label, ...props }) => {
	return (
		<Box {...props}>
			<Typography variant='subtitle1' component='div' color={'text'}>
				{label}
			</Typography>
			{children}
		</Box>
	);
};

const AddUserForm = ({ onSubmit = null }) => {
	return (
		<form>
			<Box display='flex' flexDirection='column'>
				<Typography variant='h4' component='h2' mb={4}>
					Dodaj użytkownika
				</Typography>

				<TextField label='Data' sx={{ alignSelf: 'flex-start' }} />

				<Horizontal spacing={2} sx={{ mt: 4 }}>
					<FieldGroup label='Dane firmy' mr={4}>
						<TextField label='Firma' />
						<TextField label='Adres' />
						<TextField label='NIP' />
					</FieldGroup>

					<FieldGroup label='Dane osobowe'>
						<TextField label='Reprezentant' />
						<TextField label='E-mail' />
						<TextField label='Telefon' />
					</FieldGroup>
				</Horizontal>

				<FieldGroup label='Płatności' sx={{ mt: 4 }}>
					<TextField label='Kwota całkowita' sx={{ display: 'block' }} />

					<Horizontal spacing={4}>
						<TextField label='Rata 1' />
						<TextField label='Rata 2' />
					</Horizontal>
				</FieldGroup>

				<Button
					variant='contained'
					sx={{ mt: 4 }}
					onClick={() => {
						onSubmit && onSubmit();
					}}
				>
					Dodaj
				</Button>
			</Box>
		</form>
	);
};

export default AddUserForm;
