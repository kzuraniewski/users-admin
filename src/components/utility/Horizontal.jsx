import Box from '@mui/material/Box';
import React from 'react';

const Horizontal = ({ children, ...props }) => {
	return (
		<Box display='flex' justifyContent='space-between' width='100%' {...props}>
			{children}
		</Box>
	);
};

export default Horizontal;
