import React from 'react';
import {
	DataGrid,
	GridToolbarColumnsButton,
	GridToolbarContainer,
	GridToolbarDensitySelector,
	GridToolbarExport,
	GridToolbarFilterButton,
	DataGridProps,
	GridRowId,
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
 * @param {DataGridProps & {onRowSelected: (id: GridRowId) => any}} props
 */
const UsersTable = ({ onRowSelected, ...props }) => {
	return (
		<DataGrid
			components={{ Toolbar }}
			// for now it is impossible to select more than one row
			onSelectionModelChange={([firstId]) => onRowSelected(firstId)}
			{...props}
		/>
	);
};

export default UsersTable;

// TODO: Validation
// TODO: User deletion
// TODO: Actions
// TODO: Responsive columns
