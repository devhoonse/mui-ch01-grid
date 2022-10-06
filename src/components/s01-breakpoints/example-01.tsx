import React from "react";
import {Styles} from "@material-ui/core/styles/withStyles";
import {withStyles, Theme, WithStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";


const styles: Styles<Theme, {}> = (theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#ddd"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        background: 'none'
    }
});

type Props = WithStyles<typeof styles>;
const UnderstandingBreakPoints = withStyles(styles)(({ classes }: Props) => (
    <div className={classes.root}>
        <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>
                    xs=12 / sm=6 / md=3
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>
                    xs=12 / sm=6 / md=3
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>
                    xs=12 / sm=6 / md=3
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>
                    xs=12 / sm=6 / md=3
                </Paper>
            </Grid>
        </Grid>
    </div>
));
export default UnderstandingBreakPoints;
