import React from 'react';
import {
	Box,
	Toolbar,
	ListItemIcon,
	Drawer,
	List,
	ListItemText,
	ListItemButton,
	// Divider,
} from '@mui/material';
import GroupIcon from '@mui/icons-material/Group';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const drawerWidth = 240;

const ListItemLink = props => {
	const { icon, primary, to } = props;
	const location = useLocation();

	const renderLink = React.useMemo(
		() =>
			React.forwardRef(function Link(itemProps, ref) {
				return <RouterLink to={to} ref={ref} {...itemProps} role={undefined} />;
			}),
		[to]
	);

	return (
		<li>
			<ListItemButton component={renderLink} selected={location.pathname === to}>
				{icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
				<ListItemText primary={primary} />
			</ListItemButton>
		</li>
	);
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
					<ListItemLink icon={<GroupIcon />} primary='Klienci' to='/klienci' />
					{/* <ListItemLink icon={...} primary='...' to='...' /> */}
					{/* ... */}
				</List>
			</Box>
		</Drawer>
	);
};

export default Sidenav;

// FEATURE Nested buttons
