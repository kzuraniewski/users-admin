import React, { useCallback } from 'react';
import {
	DataGrid,
	GridToolbarColumnsButton,
	GridToolbarContainer,
	GridToolbarDensitySelector,
	GridToolbarExport,
	GridToolbarFilterButton,
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
 * @typedef {import('@mui/x-data-grid').DataGridProps} DataGridProps
 * @typedef {import('@mui/x-data-grid').GridRowId} GridRowId
 * @param {DataGridProps & {onRowSelected: (id: GridRowId) => any}} props
 */
const UsersTable = ({ onRowSelected, ...props }) => {
	const getVisibilityModel = useCallback(
		/**
		 * Hide all columns except given ones
		 * @param {string[]} visibleColumns
		 * @returns {any}
		 */
		visibleColumns => {
			const defaultModel = {};
			for (const { field } of props.columns) {
				defaultModel[field] = Boolean(visibleColumns.find(value => value === field));
			}

			return defaultModel;
		},
		[props.columns]
	);

	return (
		<DataGrid
			components={{ Toolbar }}
			// for now it is impossible to select more than one row
			onSelectionModelChange={([firstId]) => onRowSelected(firstId)}
			initialState={{
				columns: {
					columnVisibilityModel: getVisibilityModel([
						'data',
						'firma',
						'reprezentant',
						'telefon',
					]),
				},
			}}
			{...props}
		/>
	);
};

export default UsersTable;

// TODO: Validation
// TODO: User deletion
// TODO: Actions
// TODO: Responsive columns
