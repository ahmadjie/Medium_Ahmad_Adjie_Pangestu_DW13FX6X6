import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProfileTabArticleByPerson from './ProfileTabArticleByPerson';

function TabPanel(props) {
	const { children, value, index, ...other } = props;

	return (
		<Typography
			component="div"
			role="tabpanel"
			hidden={value !== index}
			id={`simple-tabpanel-${index}`}
			aria-labelledby={`simple-tab-${index}`}
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
		id: `simple-tab-${index}`,
		'aria-controls': `simple-tabpanel-${index}`
	};
}

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: theme.palette.background.paper
	}
}));

const TabItems = [ 'Profile', 'Claps', 'Highlights', 'Responses' ];

export default function TabArticleByPerson() {
	const classes = useStyles();
	const [ value, setValue ] = React.useState(0);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};

	return (
		<div className={classes.root} style={{ margin: 'auto', width: '100%', marginTop: '3%' }}>
			<AppBar position="static" style={{ backgroundColor: 'white', color: 'black', boxShadow: 'none' }}>
				<Tabs
					value={value}
					onChange={handleChange}
					indicatorColor="none"
					textColor="none"
					style={{ display: 'flex', justifyContent: 'flex-start' }}
				>
					{TabItems.map((TabItem, index) => <Tab label={TabItem} {...a11yProps(index)} />)}
				</Tabs>
			</AppBar>
			<TabPanel value={value} index={0}>
				<ProfileTabArticleByPerson />
			</TabPanel>
			<TabPanel value={value} index={1}>
				Claps
			</TabPanel>
			<TabPanel value={value} index={2}>
				Highlights
			</TabPanel>
			<TabPanel value={value} index={3}>
				Responses
			</TabPanel>
		</div>
	);
}
