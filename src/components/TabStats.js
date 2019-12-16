import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ApexCharts from 'apexcharts';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<Typography
			component="div"
			role="tabpanel"
			hidden={value !== index}
			id={`scrollable-force-tabpanel-${index}`}
			aria-labelledby={`scrollable-force-tab-${index}`}
			{...other}
		>
			{value === index && <Box p={3}>{children}</Box>}
		</Typography>
	);
}

TabPanel.propTypes = {
	children: PropTypes.node,
	index: PropTypes.any.isRequired,
	value: PropTypes.any.isRequired
};

function a11yProps(index) {
	return {
		id: `scrollable-force-tab-${index}`,
		'aria-controls': `scrollable-force-tabpanel-${index}`
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		width: '100%',
		backgroundColor: theme.palette.background.paper
	}
}));

export default function TabStats() {
	const classes = useStyles();
	const [ value, setValue ] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root}>
			<AppBar
				position="static"
				color="default"
				style={{ marginTop: '3%', boxShadow: 'none', backgroundColor: 'white' }}
			>
				<Tabs
					value={value}
					onChange={handleChange}
					variant="fullwidth"
					scrollButtons="off"
					indicatorColor="none"
					textColor="none"
					aria-label="scrollable force tabs example"
				>
					<Tab
						label={<Typography variant="body1">View 30 Days</Typography>}
						{...a11yProps(0)}
						style={{ width: '33%' }}
						icon={<Typography variant="h4">0</Typography>}
					/>
					<Tab
						label={<Typography variant="body1">Reads 30 Days</Typography>}
						{...a11yProps(1)}
						style={{ width: '33%' }}
						icon={<Typography variant="h4">0</Typography>}
					/>
					<Tab
						label={<Typography variant="body1">Fans 30 Days</Typography>}
						{...a11yProps(2)}
						style={{ width: '33%' }}
						icon={<Typography variant="h4">0</Typography>}
					/>
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				Item One
			</TabPanel>
			<TabPanel value={value} index={1}>
				Item Two
			</TabPanel>
			<TabPanel value={value} index={2}>
				Item Three
			</TabPanel>
		</div>
	);
}
