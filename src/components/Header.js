import React from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import { lightGreen } from '@material-ui/core/colors';
import logo from '../img/medium.svg';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItem from '@material-ui/core/ListItem';

const appBarStyles = makeStyles((theme) => ({
	title: {
		flexGrow: 1
	}
}));

const avaStyles = makeStyles((theme) => ({
	green: {
		color: '#fff',
		backgroundColor: lightGreen[800]
	}
}));

const useStyles = makeStyles((theme) => ({
	search: {
		position: 'relative',
		borderRadius: theme.shape.borderRadius,
		backgroundColor: fade(theme.palette.common.white, 0.15),
		'&:hover': {
			backgroundColor: fade(theme.palette.common.white, 0.25)
		},
		marginLeft: 0,
		width: '100%',
		[theme.breakpoints.up('sm')]: {
			marginLeft: theme.spacing(1),
			width: 'auto'
		}
	},
	searchIcon: {
		width: theme.spacing(7),
		height: '100%',
		pointerEvents: 'none',
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center',
		color: 'black',
		paddingLeft: '20px'
	},
	inputRoot: {
		color: 'inherit'
	},
	inputInput: {
		padding: theme.spacing(1, 1, 1, 7),
		transition: theme.transitions.create('width'),
		width: '50%',
		[theme.breakpoints.up('sm')]: {
			width: 120,
			'&:focus': {
				width: 200
			}
		}
	}
}));

const StyledMenu = withStyles({
	paper: {
		border: '1px solid #d3d4d5'
	}
})((props) => (
	<Menu
		elevation={0}
		getContentAnchorEl={null}
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'center'
		}}
		transformOrigin={{
			vertical: 'top',
			horizontal: 'center'
		}}
		{...props}
	/>
));

const StyledMenuItem = withStyles((theme) => ({
	root: {
		'&:focus': {
			backgroundColor: '#f5f5f5',
			'& .MuiListItemIcon-root, & .MuiListItemText-primary': {
				color: theme.palette.common.white
			}
		}
	}
}))(MenuItem);

export default function Header() {
	const appBarClasses = appBarStyles();
	const avaClasses = avaStyles();
	const classes = useStyles();
	const [ anchorEl, setAnchorEl ] = React.useState(null);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const listMenus = [
		{
			menu: 'New Story',
			link: '/newstory'
		},
		{
			menu: 'Stories',
			link: '/stories'
		},
		{
			menu: 'Stats',
			link: '/stats'
		},
		{
			menu: 'Bookmarks',
			link: '/bookmarks'
		},
		{
			menu: 'Profile',
			link: '/profile'
		},
		{
			menu: 'Settings',
			link: '/settings'
		},
		{
			menu: 'Help',
			link: '/help'
		},
		{
			menu: 'Sign Out',
			link: '/login'
		}
	];

	return (
		<div>
			<AppBar position="static" style={{ backgroundColor: 'white', boxShadow: 'none' }}>
				<div style={{ margin: 'auto', width: '100%' }}>
					<Toolbar>
						<Typography variant="h6" className={appBarClasses.title}>
							<Link to="/">
								<img src={logo} width={85} height={45} />
							</Link>
						</Typography>
						<div className={classes.searchIcon}>
							<SearchIcon />
						</div>
						<div className={classes.search}>
							<InputBase
								placeholder="Search…"
								classes={{
									root: classes.inputRoot,
									input: classes.inputInput
								}}
								inputProps={{ 'aria-label': 'search' }}
								style={{ backgroundColor: '', color: '#616161' }}
							/>
						</div>
						<IconButton aria-label="delete" color="action">
							<NotificationsNoneIcon fontSize="medium" />
						</IconButton>
						<div className={avaClasses.root}>
							<Avatar className={avaClasses.green} onClick={handleClick}>
								R
							</Avatar>
							{/* Menu DropDown */}
							<StyledMenu
								id="customized-menu"
								anchorEl={anchorEl}
								keepMounted
								open={Boolean(anchorEl)}
								onClose={handleClose}
							>
								<StyledMenuItem>
									<ListItem alignItems="flex-start">
										<ListItemAvatar>
											<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
										</ListItemAvatar>
										<ListItemText
											primary="Ahmad Adjie Pangestu"
											secondary={
												<React.Fragment>
													<Typography
														component="span"
														variant="body2"
														className={classes.inline}
														color="textPrimary"
													/>
													{' @ahmadjie'}
													<Typography variant="h6">Become a Member</Typography>
												</React.Fragment>
											}
										/>
									</ListItem>
									<Divider variant="inset" component="li" />
								</StyledMenuItem>
								{listMenus.map((listMenu) => (
									<Link to={listMenu.link} style={{ textDecoration: 'none', color: 'black' }}>
										<StyledMenuItem>
											<ListItemText primary={listMenu.menu} />
										</StyledMenuItem>
									</Link>
								))}
							</StyledMenu>
						</div>
					</Toolbar>
				</div>
			</AppBar>
		</div>
	);
}
