import { AppBar, Button, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';

const Header = () => {
	return (
		<AppBar position='sticky'>
			<Container>
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
			</Container>
		</AppBar>
	);
};

export default Header;
