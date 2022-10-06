import React from "react";
import {Styles} from "@material-ui/core/styles/withStyles";
import {withStyles, Theme, WithStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";


const styles: Styles<Theme, {}> = (theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: "#bbb"
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        background: 'none'
    }
});

type Props = WithStyles<typeof styles>;
const UnderstandingBreakPoints3 = withStyles(styles)(({ classes }: Props) => (
    <div className={classes.root}>
        <Grid container spacing={4}>
            <Grid item xs="auto" sm="auto" md="auto">
                <Paper className={classes.paper}>
                    xs="auto" / sm="auto" / md="auto"
                </Paper>
            </Grid>
            <Grid item xs="auto" sm="auto" md="auto">
                <Paper className={classes.paper}>
                    xs="auto" / sm="auto" / md="auto"
                </Paper>
            </Grid>
            <Grid item xs="auto" sm="auto" md="auto">
                <Paper className={classes.paper}>
                    xs="auto" / sm="auto" / md="auto"
                </Paper>
            </Grid>
            <Grid item xs="auto" sm="auto" md="auto">
            <Paper className={classes.paper}>
                xs="auto" / sm="auto" / md="auto"
            </Paper>
        </Grid>
        </Grid>
    </div>
));
export default UnderstandingBreakPoints3;
