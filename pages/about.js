import React from "react";
import Head from "next/head";
import {Avatar, Grid, makeStyles, Typography, useMediaQuery, useTheme} from "@material-ui/core";

import CallToAction from "../src/ui/CallToAction";

const useStyles = makeStyles(theme => ({
    missionStatement: {
        fontStyle: "italic",
        fontWeight: 300,
        fontSize: "1.5rem",
        maxWidth: "50em",
        lineHeight: 1.4
    },
    rowContainer: {
        paddingLeft: "5em",
        paddingRight: "5em",
        [theme.breakpoints.down("sm")]: {
            paddingLeft: "1.5em",
            paddingRight: "1.5em"
        },
        [theme.breakpoints.down("xs")]: {
            paddingLeft: "1em",
            paddingRight: "1em"
        }
    },
    avatar: {
        height: "25em",
        width: "25em",
        [theme.breakpoints.down("sm")]: {
            height: "20em",
            width: "20em",
            maxHeight: 300, maxWidth: 300
        }
    }
}));

export default function About(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matchesMD = useMediaQuery(theme.breakpoints.down("md"));

    return (<Grid container direction={"column"}>
        <Head>
            <title key="title">About Us - History and Team| Shahrooz Development</title>
            <meta
                name="description"
                key="description"
                content="We provide the fastest, most modern, affordable, and aesthetic software design and development services in the Småland. Get a free online estimate now."
            />
            <meta
                property="og:title"
                content="About Us | History"
                key="og:title"
            />
            <meta
                property="og:url"
                key="og:url"
                content="shahrooz.se/about"
            />
            <link
                rel="canonical"
                key="canonical"
                href="shahrooz.se/about"
            />
        </Head>
        <Grid
            item
            className={classes.rowContainer}
            style={{marginTop: matchesMD ? "1em" : "2em"}}
        >
            <Typography align={matchesMD ? "center" : undefined} variant={"h1"}>
                About Us
            </Typography>
        </Grid>
        <Grid
            item
            container
            justifyContent={"center"}
            className={classes.rowContainer}
            style={{marginTop: "3em"}}
        >
            <Typography
                variant={"h4"}
                align={"center"}
                className={classes.missionStatement}
            >
                Whether it is person to person, business to consumer, or an individual
                to their interests, technology is meant to bring us closer to what we
                care about in the best way possible. Shahrooz Development will use that
                principle to provide fast, modern, inexpensive, and aesthetic software
                to Sweden and beyond.
            </Typography>
        </Grid>
        <Grid
            item
            container
            className={classes.rowContainer}
            style={{marginTop: "10em", marginBottom: "10em"}}
            direction={matchesMD ? "column" : "row"}
            alignItems={matchesMD ? "center" : undefined}
            justifyContent={"space-between"}
        >
            <Grid item>
                <Grid
                    item
                    container
                    direction={"column"}
                    lg
                    style={{maxWidth: "35em"}}
                >
                    <Grid item>
                        <Typography
                            align={matchesMD ? "center" : undefined}
                            variant={"h4"}
                            gutterBottom
                        >
                            History
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography
                            variant={"body1"}
                            align={matchesMD ? "center" : undefined}
                            paragraph
                            style={{fontWeight: 700, fontStyle: "italic"}}
                        >
                            We're a start up.
                        </Typography>
                        <Typography
                            variant={"body1"}
                            align={matchesMD ? "center" : undefined}
                            paragraph
                        >
                            Founded in 2022, we’re ready to get our hands on the world’s
                            business problems.
                        </Typography>
                        <Typography
                            variant={"body1"}
                            align={matchesMD ? "center" : undefined}
                            paragraph
                        >
                            It all started with one question: Why aren’t all businesses
                            using available technology? There are many different answers to
                            that question: economic barriers, social barriers, educational
                            barriers, and sometimes institutional barriers.
                        </Typography>
                        <Typography
                            variant={"body1"}
                            align={matchesMD ? "center" : undefined}
                            paragraph
                        >
                            We aim to be a powerful force in overcoming these obstacles.
                            Recent developments in software engineering and computing power,
                            compounded by the proliferation of smart phones, has opened up
                            infinite worlds of possibility. Things that have always been
                            done by hand can now be done digitally and automatically, and
                            completely new methods of interaction are created daily. Taking
                            full advantage of these advancements is our job.
                        </Typography>
                        <Typography
                            variant={"body1"}
                            align={matchesMD ? "center" : undefined}
                            paragraph
                        >
                            All this change can be a lot to keep up with, and that’s where
                            we come in.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid
                    item
                    container
                    justifyContent={"center"}
                    lg
                >
                    <img
                        src={"/assets/history.svg"}
                        alt="quill pen sitting on top of book"
                        style={{maxHeight: matchesMD ? 200 : "22em"}}
                    />
                </Grid>
            </Grid>
        </Grid>
        <Grid
            item
            container
            direction={"column"}
            alignItems={"center"}
            className={classes.rowContainer}
            style={{marginBottom: "15em"}}
        >
            <Grid item>
                <Typography align={"center"} variant={"h4"} gutterBottom>
                    Team
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant={"body1"} paragraph align={"center"}>
                    Shahrooz Sabet, Founder
                </Typography>
                <Typography variant={"body1"} paragraph align={"center"}>
                    I have more than 15 years Software development experience.
                </Typography>
            </Grid>
            <Grid item>
                <Avatar
                    alt={"founder"}
                    src={"/assets/KalmarStreet.jpeg"}
                    className={classes.avatar}
                />
            </Grid>
            <Grid item style={{maxWidth: "45em", padding: "1.25em"}}>
                <Typography variant={"body1"} align={"center"} paragraph>
                    Hi,

                    I'm a software developer with a passion for creating innovative and scalable solutions for the banking, fintech, and IT industries.

                    With over 15 years of experience in backend development, I have mastered Java, Spring Boot, microservices, and cloud native applications. I also have a strong background in REST/gRPC API, SQL, cost accounting, banking solutions, ERP, and software quality.

                    I have a master's degree in software technology from Linnaeus University in Sweden, where I graduated in 2012.
                    I'm always eager to learn new technologies and tackle complex problems with elegant and efficient solutions.

                    Let's connect and see how we can work together.
                </Typography>
                <Typography variant={"body1"} align={"center"} paragraph>
                    Top Skills: Spring Boot • Java • Cloud-Native Applications • Back-End Web Development • Microservices
                </Typography>
            </Grid>
        </Grid>
        <Grid item>
            <CallToAction setValue={props.setValue}/>
        </Grid>
    </Grid>);
}
