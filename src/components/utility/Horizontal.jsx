import React from 'react';
import { Box } from '@mui/material';

const Horizontal = ({ children, ...props }) => {
	return (
		<Box display='flex' justifyContent='space-between' width='100%' {...props}>
			{children}
		</Box>
	);
};

export default Horizontal;
