import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Paper } from '@mui/material';

const CustomerEdit = ({ onSave, onReturn }) => {
	const [tabIndex, setTabIndex] = useState('1');

	return (
		<Box>
			<Typography variant='h4' component='h1'>
				Panel klienta
			</Typography>

			<Paper sx={{ padding: 3, mt: 2 }}>
				<TabContext value={tabIndex}>
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<TabList onChange={(e, value) => setTabIndex(value)}>
							<Tab label='Ogólne' value='1' />
							<Tab label='Dane kontaktowe' value='2' />
							<Tab label='Płatności' value='3' />
						</TabList>
					</Box>

					<TabPanel value='1'>TabPanel 1</TabPanel>
					<TabPanel value='2'>TabPanel 2</TabPanel>
					<TabPanel value='3'>TabPanel 3</TabPanel>
				</TabContext>

				<Box display='flex' justifyContent='flex-end' mt={5}>
					<Button variant='outlined' onClick={onReturn} sx={{ mr: 2 }}>
						Wstecz
					</Button>
					<Button variant='contained' onClick={() => onSave(0)}>
						Zapisz
					</Button>
				</Box>
			</Paper>
		</Box>
	);
};

export default CustomerEdit;
