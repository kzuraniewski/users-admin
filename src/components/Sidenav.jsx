import React, { useState } from 'react';
import {
	Box,
	ListItemButton,
	Toolbar,
	ListItemIcon,
	Drawer,
	List,
	ListItemText,
	// Divider,
} from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';

const drawerWidth = 240;

const Item = ({ icon, primary, ...props }) => {
	return (
		<ListItemButton {...props}>
			<ListItemIcon>{icon}</ListItemIcon>
			<ListItemText primary={primary} />
		</ListItemButton>
	);
};

/**
 * Makes every `Item` component inside selectable
 */
const SelectionProvider = ({ children }) => {
	const [selected, setSelected] = useState(0);

	return React.Children.map(children, (child, index) => {
		if (child.type !== Item) return child;

		return React.cloneElement(child, {
			key: index,
			selected: selected === index,
			onClick: () => setSelected(index),
		});
	});
};

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
					<SelectionProvider>
						<Item icon={<GroupIcon />} primary='Klienci' />
						{/* <Item icon={...} primary='...' /> */}
						{/* ... */}
						{/* <Divider /> */}
						{/* ... */}
					</SelectionProvider>
				</List>
			</Box>
		</Drawer>
	);
};

export default Sidenav;

// FEATURE Nested buttons
