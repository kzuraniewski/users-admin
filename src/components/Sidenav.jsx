import React from 'react';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import Toolbar from '@mui/material/Toolbar';
import ListItemIcon from '@mui/material/ListItemIcon';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import GroupIcon from '@mui/icons-material/Group';
import Divider from '@mui/material/Divider';

const drawerWidth = 240;

const Sidenav = () => {
	return (
		<Drawer
			variant='permanent'
			sx={{
				width: drawerWidth,
				flexShrink: 0,
				[`& .MuiDrawer-paper`]: { width: drawerWidth },
			}}
			// PaperProps={{ sx: { backgroundColor: 'primary.main' } }}
		>
			<Toolbar />
			<Box sx={{ overflow: 'auto' }}>
				<List>
					<ListItem button>
						<ListItemIcon>
							<GroupIcon />
						</ListItemIcon>
						<ListItemText primary='Klienci' />
					</ListItem>
				</List>
			</Box>
		</Drawer>
	);
};

export default Sidenav;
