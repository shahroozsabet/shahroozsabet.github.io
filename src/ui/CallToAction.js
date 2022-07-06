import React from "react";
import {Button, Grid, makeStyles, Typography, useMediaQuery, useTheme} from "@material-ui/core";
import ButtonArrow from "./ButtonArrow";

import Link from "../Link";

const useStyles = makeStyles(theme => ({
    learnButton: {
        ...theme.typography.learnButton, fontSize: "0.7rem", height: 35, padding: 5, [theme.breakpoints.down("sm")]: {
            marginBottom: "2em"
        }
    }, background: {
        backgroundImage: `url("/assets/longJon.jpg")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
        backgroundRepeat: "no-repeat",
        height: "60em",
        width: "100%",
        [theme.breakpoints.down("md")]: {
            backgroundImage: `url("/assets/longJonMobile.jpg")`, backgroundAttachment: "inherit"
        }
    }, estimateButton: {
        ...theme.typography.estimate,
        borderRadius: 50,
        height: 80,
        width: 205,
        backgroundColor: theme.palette.common.orange,
        fontSize: "1.5rem",
        marginRight: "5em",
        marginLeft: "2em",
        "&:hover": {
            backgroundColor: theme.palette.secondary.light
        },
        [theme.breakpoints.down("sm")]: {
            marginLeft: 0, marginRight: 0
        }
    }
}))

export default function CallToAction(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSM = useMediaQuery(theme.breakpoints.down("sm"))

    return (<Grid
        container
        alignItems={"center"}
        justifyContent={matchesSM ? "center" : "space-between"}
        className={classes.background}
        direction={matchesSM ? "column" : "row"}
    >
        <Grid
            item
            style={{
                marginLeft: matchesSM ? 0 : "5em", textAlign: matchesSM ? "center" : "inherit"
            }}
        >
            <Grid container direction={"column"}>
                <Grid item>
                    <Typography variant={"h1"}>
                        Simple Software.<br/>Revolutionary Results.
                    </Typography>
                    <Typography variant={"subtitle2"} style={{fontSize: "1.5rem"}}>
                        Take advantage of the 21st Century.
                    </Typography>
                    <Grid
                        container
                        justifyContent={matchesSM ? "center" : undefined}
                        item
                    >
                        <Button
                            component={Link}
                            href={"/revolution"}
                            variant={"outlined"}
                            className={classes.learnButton}
                            onClick={() => props.setValue(2)}
                        >
                            <span style={{marginRight: 5}}>Learn More</span>
                            <ButtonArrow
                                width={10}
                                height={10}
                                fill={theme.palette.common.blue}
                            />
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
        <Grid item>
            <Button
                component={Link}
                href={"/estimate"}
                variant={"contained"}
                className={classes.estimateButton}
                onClick={() => props.setValue(false)}
            >
                Free Estimate
            </Button>
        </Grid>
    </Grid>)
}