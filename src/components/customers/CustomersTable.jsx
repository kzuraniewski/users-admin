import React, { useCallback } from 'react';
import { Button } from '@mui/material';
import Add from '@mui/icons-material/Add';
import {
	DataGrid,
	GridToolbarColumnsButton,
	GridToolbarContainer,
	GridToolbarDensitySelector,
	GridToolbarExport,
	GridToolbarFilterButton,
} from '@mui/x-data-grid';

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
 * Displays customers info in a `DataGrid`
 * @typedef {import('@mui/x-data-grid').DataGridProps} DataGridProps
 * @param {DataGridProps} props
 */
const UsersTable = props => {
	// TODO: Don't hide columns with `hideable: false`
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
			initialState={{
				columns: {
					columnVisibilityModel: getVisibilityModel([
						'actions',
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

// TODO: Responsive columns
