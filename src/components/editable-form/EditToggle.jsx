import { IconButton } from '@mui/material';
import { Edit as EditIcon, EditOff as EditOffIcon } from '@mui/icons-material';
import React from 'react';

const EditToggle = ({ editMode, onEnable, onDisable, ...props }) => {
	return editMode ? (
		<IconButton onClick={onDisable} {...props}>
			<EditOffIcon />
		</IconButton>
	) : (
		<IconButton onClick={onEnable} {...props}>
			<EditIcon />
		</IconButton>
	);
};

export default EditToggle;
