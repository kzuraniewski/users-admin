import React from 'react';
import {
	DataGrid,
	GridToolbarColumnsButton,
	GridToolbarContainer,
	GridToolbarDensitySelector,
	GridToolbarExport,
	GridToolbarFilterButton,
	DataGridProps,
} from '@mui/x-data-grid';
import { Button } from '@mui/material';
import Add from '@mui/icons-material/Add';

const Toolbar = () => {
	return (
		<GridToolbarContainer>
			<GridToolbarColumnsButton />
			<GridToolbarFilterButton />
			<GridToolbarDensitySelector />
			<GridToolbarExport />

			<Button startIcon={<Add />} sx={{ ml: 'auto' }}>
				Dodaj
			</Button>
		</GridToolbarContainer>
	);
};

/**
 * @param {DataGridProps} props
 */
const UsersTable = props => {
	return <DataGrid components={{ Toolbar }} {...props} />;
};

export default UsersTable;

// TODO: Validation
// TODO: User deletion
// TODO: Actions
// TODO: Columns hidden by default
