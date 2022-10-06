import React from "react";
import {Styles} from "@material-ui/core/styles/withStyles";
import {withStyles, Theme, WithStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid, { GridProps } from "@material-ui/core/Grid";


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


/**
 * Abstracting
 * (1) Grid Container
 * (2) Grid Item
 */
const Container = (props: Omit<GridProps, 'container' | 'item'>) => <Grid container {...props} />;
const Item = (props: Omit<GridProps, 'container' | 'item'>) => <Grid item {...props} />;


type Props = WithStyles<typeof styles>;
const AbstractingContainersAndItems = withStyles(styles)(({ classes }: Props) => (
    <div className={classes.root}>
        <Container spacing={4}>
            <Item xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>
                    xs=12 / sm=6 / md=3
                </Paper>
            </Item>
            <Item xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>
                    xs=12 / sm=6 / md=3
                </Paper>
            </Item>
            <Item xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>
                    xs=12 / sm=6 / md=3
                </Paper>
            </Item>
            <Item xs={12} sm={6} md={3}>
                <Paper className={classes.paper}>
                    xs=12 / sm=6 / md=3
                </Paper>
            </Item>
        </Container>
    </div>
));
export default AbstractingContainersAndItems;
