import React, {useEffect, useState} from "react";
import {
    AppBar,
    Button,
    Hidden,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Menu,
    MenuItem,
    SwipeableDrawer,
    Tab,
    Tabs,
    Toolbar,
    useMediaQuery,
    useScrollTrigger,
    useTheme
} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import Link from "../Link";
import MenuIcon from "@material-ui/icons/Menu";

function ElevationScroll(props) {
    const {children} = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0
    });
}

const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3em",
        [theme.breakpoints.down("md")]: {
            marginBottom: "2em"
        },
        [theme.breakpoints.down("xs")]: {
            marginBottom: "1.25em"
        }
    },
    logo: {
        height: "8em",
        [theme.breakpoints.down("md")]: {
            height: "7em"
        },
        [theme.breakpoints.down("xs")]: {
            height: "5.5em"
        }
    },
    logoContainer: {
        padding: 0,
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    tabContainer: {
        marginLeft: "auto"
    },
    tab: {
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: "25px"
    },
    button: {
        ...theme.typography.estimate,
        borderRadius: "50px",
        marginLeft: "50px",
        marginRight: "25px",
        height: "45px",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        }
    },
    menu: {
        backgroundColor: theme.palette.common.blue,
        color: "white",
        borderRadius: "0px"
    },
    menuItem: {
        ...theme.typography.tab,
        opacity: 0.7,
        "&:hover": {
            opacity: 1
        }
    },
    drawerIcon: {
        height: "50px",
        width: "50px"
    },
    drawerIconContainer: {
        marginLeft: "auto",
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    drawer: {
        backgroundColor: theme.palette.common.blue
    },
    drawerItem: {
        ...theme.typography.tab,
        color: "white",
        opacity: 0.7
    },
    drawerItemEstimate: {
        backgroundColor: theme.palette.common.orange
    },
    drawerItemSelected: {
        "& .MuiListItemText-root": {
            opacity: 1
        }
    },
    appbar: {
        zIndex: theme.zIndex.modal + 1
    }
}));

export default function Header(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    const [openDrawer, setOpenDrawer] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);

    const handleChange = (e, newValue) => {
        props.setValue(newValue);
    };

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
        setOpenMenu(true);
    };

    function handleMenuItemClick(i) {
        setAnchorEl(null);
        setOpenMenu(false);
        props.setSelectedIndex(i);
    }

    const handleClose = () => {
        setAnchorEl(null);
        setOpenMenu(false);
    };

    let menuOptions = [
        {name: "Services", link: "/services", activeIndex: 1, selectedIndex: 0},
        {
            name: "Custom Software Development",
            link: "/customsoftware",
            activeIndex: 1,
            selectedIndex: 1
        },
        {
            name: "Mobile App Development",
            link: "/mobileapps",
            activeIndex: 1,
            selectedIndex: 2
        },
        {
            name: "Website Development",
            link: "/websites",
            activeIndex: 1,
            selectedIndex: 3
        }
    ];

    const routes = [
        {name: "Home", link: "/", activeIndex: 0},
        {
            name: "Services",
            link: "/services",
            activeIndex: 1,
            ariaOwns: anchorEl ? "simple-menu" : undefined,
            ariaPopup: anchorEl ? "true" : undefined,
            mouseOver: event => handleClick(event)
        },
        {name: "The Revolution", link: "/revolution", activeIndex: 2},
        {name: "About Us", link: "/about", activeIndex: 3},
        {name: "Contact Us", link: "/contact", activeIndex: 4}
    ];

    useEffect(() => {
        [...menuOptions, ...routes].forEach(route => {
            switch (window.location.pathname) {
                case `${route.link}`:
                    if (props.value !== route.activeIndex) {
                        props.setValue(route.activeIndex);
                        if (
                            route.selectedIndex &&
                            route.selectedIndex !== props.selectedIndex
                        ) {
                            props.setSelectedIndex(route.selectedIndex);
                        }
                    }
                    break;
                case "/estimate":
                    if (props.value !== false) {
                        props.setValue(false);
                    }
                    break;
                default:
                    break;
            }
        });
    }, [props.value, menuOptions, props.selectedIndex, routes, props]);

    const tabs = (
        <React.Fragment>
            <Tabs
                value={props.value}
                onChange={handleChange}
                className={classes.tabContainer}
                indicatorColor={"primary"}
            >
                {routes.map((route, index) => (
                    <Tab
                        key={`${route}${index}`}
                        className={classes.tab}
                        component={Link}
                        href={route.link}
                        label={route.name}
                        aria-owns={route.ariaOwns}
                        aria-haspopup={route.ariaPopup}
                        onMouseOver={route.mouseOver}
                    />
                ))}
            </Tabs>
            <Button
                component={Link}
                href={"/estimate"}
                variant={"contained"}
                color={"secondary"}
                className={classes.button}
                onClick={() => {
                    props.setValue(false);
                }}
            >
                Free Estimate
            </Button>
            <Menu
                id={"simple-menu"}
                anchorEl={anchorEl}
                open={openMenu}
                onClose={handleClose}
                classes={{paper: classes.menu}}
                MenuListProps={{
                    onMouseLeave: handleClose
                }}
                elevation={0}
                style={{zIndex: 1302}}
                keepMounted
            >
                {menuOptions.map((option, i) => (
                    <MenuItem
                        key={`${option}${i}`}
                        component={Link}
                        href={option.link}
                        classes={{root: classes.menuItem}}
                        onClick={() => {
                            handleMenuItemClick(i);
                            props.setValue(1);
                            handleClose();
                        }}
                        selected={i === props.selectedIndex && props.value === 1}
                    >
                        {option.name}
                    </MenuItem>
                ))}
            </Menu>
        </React.Fragment>
    );

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
                classes={{paper: classes.drawer}}
            >
                <div className={classes.toolbarMargin}/>
                <List disablePadding>
                    {routes.map(route => (
                        <ListItem
                            divider
                            key={`${route}${route.activeIndex}`}
                            button
                            component={Link}
                            href={route.link}
                            selected={props.value === route.activeIndex}
                            classes={{selected: classes.drawerItemSelected}}
                            onClick={() => {
                                setOpenDrawer(false);
                                props.setValue(route.activeIndex);
                            }}
                        >
                            <ListItemText className={classes.drawerItem} disableTypography>
                                {route.name}
                            </ListItemText>
                        </ListItem>
                    ))}
                    <ListItem
                        onClick={() => {
                            setOpenDrawer(false);
                            props.setValue(5);
                        }}
                        divider
                        button
                        component={Link}
                        classes={{
                            root: classes.drawerItemEstimate,
                            selected: classes.drawerItemSelected
                        }}
                        href={"/estimate"}
                        selected={props.value === false}
                    >
                        <ListItemText className={classes.drawerItem} disableTypography>
                            Free Estimate
                        </ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton
                className={classes.drawerIconContainer}
                onClick={() => setOpenDrawer(!openDrawer)}
                disableRipple
            >
                <MenuIcon className={classes.drawerIcon}/>
            </IconButton>
        </React.Fragment>
    );

    return (
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed" className={classes.appbar}>
                    <Toolbar disableGutters>
                        <Button
                            component={Link}
                            href={"/"}
                            disableRipple
                            onClick={() => props.setValue(0)}
                            className={classes.logoContainer}
                        >
                            <img alt="Company Logo" className={classes.logo} src={"/assets/logo.svg"}/>
                        </Button>
                        <Hidden mdDown>
                            {tabs}
                        </Hidden>
                        <Hidden lgUp>
                            {drawer}
                        </Hidden>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin}/>
        </React.Fragment>
    );
}