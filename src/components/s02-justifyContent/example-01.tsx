import React from "react";
import {Styles} from "@material-ui/core/styles/withStyles";
import {withStyles, Theme, WithStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Chip from "@material-ui/core/Chip";


const styles: Styles<Theme, {}> = (theme) => ({
    root: {
        flexGrow: 1,
        border: '1px solid #444'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        // background: 'none'
    }
});

type Props = WithStyles<typeof styles>;
const FillingSpace = withStyles(styles)(({ classes }: Props) => (
    <div className={classes.root}>
        <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>
                    <Grid container justifyContent="flex-start">
                        <Grid item>
                            <Chip label="xs=12" />
                        </Grid>
                        <Grid item>
                            <Chip label="sm=6" />
                        </Grid>
                        <Grid item>
                            <Chip label="md=3" />
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>
                    <Grid container justifyContent="center">
                        <Grid item>
                            <Chip label="xs=12" />
                        </Grid>
                        <Grid item>
                            <Chip label="sm=6" />
                        </Grid>
                        <Grid item>
                            <Chip label="md=3" />
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <Chip label="xs=12" />
                        </Grid>
                        <Grid item>
                            <Chip label="sm=6" />
                        </Grid>
                        <Grid item>
                            <Chip label="md=3" />
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>
                    <Grid container justifyContent="space-between">
                        <Grid item>
                            <Chip label="xs=12" />
                        </Grid>
                        <Grid item>
                            <Chip label="sm=6" />
                        </Grid>
                        <Grid item>
                            <Chip label="md=3" />
                        </Grid>
                    </Grid>
                </Paper>
            </Grid>
        </Grid>
    </div>
));
export default FillingSpace;
