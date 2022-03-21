import { Button, Paper, Typography } from '@mui/material';
import React from 'react';

const CustomerEdit = ({ onSave, onReturn }) => {
	return (
		<Paper>
			<Typography>Panel klienta</Typography>
			<Button onClick={onReturn}>Wstecz</Button>
			<Button onClick={() => onSave(0)}>Zapisz</Button>
		</Paper>
	);
};

export default CustomerEdit;
