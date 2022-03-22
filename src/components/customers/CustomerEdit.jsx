import React, { useState } from 'react';
import { useDebug } from '../utility/hooks.js';
import Button from '@mui/material/Button';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Paper, TextField } from '@mui/material';
import Horizontal from '../utility/Horizontal';

const CustomerEdit = ({ data, onSave, onReturn }) => {
	const [tabIndex, setTabIndex] = useState('1');

	useDebug([data]);

	return (
		<Box>
			<Typography variant='h4' component='h1'>
				Panel klienta
			</Typography>

			<Paper
				sx={{ padding: 3, mt: 2, minHeight: 400, display: 'flex', flexDirection: 'column' }}
			>
				<TabContext value={tabIndex}>
					<Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
						<TabList onChange={(e, value) => setTabIndex(value)}>
							<Tab label='Ogólne' value='1' />
							<Tab label='Dane kontaktowe' value='2' />
							<Tab label='Płatności' value='3' />
						</TabList>
					</Box>

					<form>
						<TabPanel value='1'>
							{/* Ogólne */}
							<TextField label='LP' disabled />
							<TextField label='Data' />
							<TextField label='Adres strony' />
						</TabPanel>
						<TabPanel value='2'>
							{/* Dane kontaktowe */}
							<Horizontal width={450}>
								<div>
									<TextField label='Nazwa firmy' />
									<TextField label='Adres firmy' />
									<TextField label='NIP' type='number' />
								</div>
								<div>
									<TextField label='Reprezentant' />
									<TextField label='E-mail' type='email' />
									<TextField label='Telefon' type='phone' />
								</div>
							</Horizontal>
						</TabPanel>
						<TabPanel value='3'>
							<TextField
								label='Kwota całkowita'
								type='number'
								sx={{ display: 'block' }}
							/>

							<Horizontal width={450}>
								<TextField label='Rata 1' type='number' />
								<TextField label='Rata 2' type='number' />
							</Horizontal>
						</TabPanel>
					</form>
				</TabContext>

				<Box display='flex' justifyContent='flex-end' mt='auto'>
					<Button size='large' variant='outlined' onClick={onReturn} sx={{ mr: 2 }}>
						Wstecz
					</Button>
					<Button size='large' variant='contained' onClick={() => onSave(0)}>
						Zapisz
					</Button>
				</Box>
			</Paper>
		</Box>
	);
};

export default CustomerEdit;
