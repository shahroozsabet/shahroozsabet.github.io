import React, {useEffect, useState} from "react";
import ReactGA from "react-ga";
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    AppBar,
    Button,
    ClickAwayListener,
    Grid,
    Grow,
    Hidden,
    IconButton,
    List,
    ListItem,
    ListItemText,
    MenuItem,
    MenuList,
    Paper,
    Popper,
    SwipeableDrawer,
    Tab,
    Tabs,
    Toolbar,
    useScrollTrigger
} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import Link from "../Link";
import MenuIcon from "@material-ui/icons/Menu";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

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
        borderRadius: "0px",
        zIndex: 1302
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
    },
    expansion: {
        backgroundColor: theme.palette.common.blue,
        borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        "&.Mui-expanded": {
            margin: 0,
            borderBottom: 0
        },
        "&::before": {
            backgroundColor: "rgba(0, 0, 0, 0)"
        }
    },
    expansionDetails: {
        padding: 0,
        backgroundColor: theme.palette.primary.light
    },
    expansionSummary: {
        padding: "0 24px 0 16px",
        "&:hover": {
            backgroundColor: "rgba(0, 0, 0, 0.08)"
        },
        backgroundColor: props =>
            props.value === 1 ? "rgba(0, 0, 0, 0.14)" : "inherit"
    }
}));

export default function Header(props) {
    const classes = useStyles(props);
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const [openDrawer, setOpenDrawer] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);

    const handleChange = (e, newValue) => {
        props.setValue(newValue);
    };

    const handleClick = e => {
        setAnchorEl(e.currentTarget);
        setOpenMenu(true);
    };

    const handleMenuItemClick = (i) => {
        setAnchorEl(null);
        setOpenMenu(false);
        props.setSelectedIndex(i);
    };

    const handleClose = () => {
        setAnchorEl(null);
        setOpenMenu(false);
    };

    function handleListKeyDown(event) {
        if (event.key === "Tab") {
            event.preventDefault();
            setOpen(false);
        }
    }

    const menuOptions = [
        {
            name: "Custom Software Development",
            link: "/customsoftware",
            activeIndex: 1,
            selectedIndex: 0
        },
        {
            name: "Mobile App Development",
            link: "/mobileapps",
            activeIndex: 1,
            selectedIndex: 1
        },
        {
            name: "Website Development",
            link: "/websites",
            activeIndex: 1,
            selectedIndex: 2
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

    const path = typeof window !== "undefined" ? window.location.pathname : null;

    const activeIndex = () => {
        const found = routes.find(({link}) => link === path);
        const menuFound = menuOptions.find(({link}) => link === path);

        if (menuFound) {// services menu
            props.setValue(1);
            props.setSelectedIndex(menuFound.selectedIndex);
        } else if (found === undefined) { // estimate page
            props.setValue(false);
        } else {// pages
            props.setValue(found.activeIndex);
        }
    };

    useEffect(() => {
        activeIndex();
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [path]);

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
                        onMouseLeave={() => setOpenMenu(false)}
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
            <Popper
                open={openMenu}
                anchorEl={anchorEl}
                placement="bottom-start"
                role={undefined}
                transition
                disablePortal
            >
                {({TransitionProps}) => (
                    <Grow
                        {...TransitionProps}
                        style={{
                            transformOrigin: "top left"
                        }}
                    >
                        <Paper classes={{root: classes.menu}} elevation={0}>
                            <ClickAwayListener onClickAway={handleClose}>
                                <MenuList
                                    onMouseOver={() => setOpenMenu(true)}
                                    onMouseLeave={handleClose}
                                    disablePadding
                                    autoFocusItem={false}
                                    id="simple-menu"
                                    onKeyDown={handleListKeyDown}
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
                                            selected={
                                                i === props.selectedIndex &&
                                                props.value === 1 &&
                                                window.location.pathname !== "/services"
                                            }
                                        >
                                            {option.name}
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </ClickAwayListener>
                        </Paper>
                    </Grow>
                )}
            </Popper>
        </React.Fragment>
    );

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer
                disableBackdropTransition={!iOS}
                disableDiscovery={iOS}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
                classes={{paper: classes.drawer}}
            >
                <div className={classes.toolbarMargin}/>
                <List disablePadding>
                    {routes.map(route =>
                        route.name === "Services" ? (
                            <Accordion
                                elevation={0}
                                key={route.name}
                                classes={{root: classes.expansion}}
                            >
                                <AccordionSummary
                                    classes={{root: classes.expansionSummary}}
                                    expandIcon={<ExpandMoreIcon color="secondary"/>}
                                >
                                    <ListItemText
                                        className={classes.drawerItem}
                                        disableTypography
                                        style={{opacity: props.value === 1 ? 1 : null}}
                                        onClick={() => {
                                            setOpenDrawer(false);
                                            props.setValue(route.activeIndex);
                                        }}
                                    >
                                        <Link href={route.link} color="inherit">
                                            {route.name}
                                        </Link>
                                    </ListItemText>
                                </AccordionSummary>
                                <AccordionDetails
                                    classes={{root: classes.expansionDetails}}
                                >
                                    <Grid container direction="column">
                                        {menuOptions.map(route => (
                                            <Grid item key={`${route}${route.selectedIndex}`}>
                                                <ListItem
                                                    divider
                                                    button
                                                    component={Link}
                                                    href={route.link}
                                                    selected={
                                                        props.selectedIndex === route.selectedIndex &&
                                                        props.value === 1 &&
                                                        window.location.pathname !== "/services"
                                                    }
                                                    classes={{selected: classes.drawerItemSelected}}
                                                    onClick={() => {
                                                        setOpenDrawer(false);
                                                        props.setSelectedIndex(route.selectedIndex);
                                                    }}
                                                >
                                                    <ListItemText
                                                        className={classes.drawerItem}
                                                        disableTypography
                                                    >
                                                        {route.name
                                                            .split(" ")
                                                            .filter(word => word !== "Development")
                                                            .join(" ")}
                                                        <br/>
                                                        <span style={{fontSize: "0.75rem"}}>
                              Development
                            </span>
                                                    </ListItemText>
                                                </ListItem>
                                            </Grid>
                                        ))}
                                    </Grid>
                                </AccordionDetails>
                            </Accordion>
                        ) : (
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
                            props.setValue(false);
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
                            <img className={classes.logo} alt="Company Logo" src={"/assets/logo.svg"}/>
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