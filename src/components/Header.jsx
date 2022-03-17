import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Header = () => {
	return (
		<AppBar position='sticky'>
			<Toolbar>
				<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
					Użytkownicy
				</Typography>

				<Button variant='text' color='inherit'>
					Login
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
