import React from 'react';
import { Box } from '@mui/material';

const HorizontalGroup = ({ children, ...props }) => {
	return (
		<Box
			display='flex'
			justifyContent='space-between'
			width='100%'
			sx={{ '& > *': { flex: 1, '&:not(:last-child)': { pr: 5 } } }}
			{...props}
		>
			{children}
		</Box>
	);
};
export default HorizontalGroup;
