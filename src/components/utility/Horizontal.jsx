import Box from '@mui/material/Box';
import React from 'react';

const Horizontal = ({ children, spacing = 0, ...props }) => {
	return (
		<Box
			display='flex'
			width='100%'
			sx={{
				'> *:not(:last-child)': {
					mr: spacing,
				},
			}}
			{...props}
		>
			{children}
		</Box>
	);
};

export default Horizontal;
