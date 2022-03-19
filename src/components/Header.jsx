import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Header = () => {
	return (
		<AppBar position='sticky' sx={{ zIndex: theme => theme.zIndex.drawer + 1 }}>
			<Toolbar>
				<Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
					Użytkownicy
				</Typography>

				<Button
					variant='text'
					sx={{
						color: 'primary.contrastText',
						'&:hover': { backgroundColor: 'primary.light' },
					}}
				>
					Login
				</Button>
			</Toolbar>
		</AppBar>
	);
};

export default Header;
