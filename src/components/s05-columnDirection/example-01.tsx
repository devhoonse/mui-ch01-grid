import React from "react";
import {Styles} from "@material-ui/core/styles/withStyles";
import {withStyles, Theme, WithStyles} from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";


const styles: Styles<Theme, {}> = (theme) => ({
    root: {
        flexGrow: 1,
        border: '1px solid #111'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary
    }
});

type Props = WithStyles<typeof styles>;
const ColumnDirection = withStyles(styles)(({ classes }: Props) => (
    <div className={classes.root}>
        <Grid container spacing={4} justifyContent="space-between">
            <Grid item xs={3}>
                <Grid container spacing={2} direction="column">
                    <Grid item>
                        <Paper className={classes.paper}>
                            <Typography>1</Typography>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper className={classes.paper}>
                            <Typography>2</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3}>
                <Grid container spacing={2} direction="column">
                    <Grid item>
                        <Paper className={classes.paper}>
                            <Typography>3</Typography>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper className={classes.paper}>
                            <Typography>4</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item xs={3}>
                <Grid container spacing={2} direction="column">
                    <Grid item>
                        <Paper className={classes.paper}>
                            <Typography>5</Typography>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper className={classes.paper}>
                            <Typography>6</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
            <Hidden smDown>
                <Grid item xs={3}>
                    <Grid container spacing={2} direction="column">
                        <Grid item>
                            <Paper className={classes.paper}>
                                <Typography>7</Typography>
                            </Paper>
                        </Grid>
                        <Grid item>
                            <Paper className={classes.paper}>
                                <Typography>8</Typography>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Hidden>
        </Grid>
    </div>
));
export default ColumnDirection;
