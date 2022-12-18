import { List, ListItem, Typography, Divider, ListItemText, Button, withStyles } from '@material-ui/core';
import React, { Fragment } from 'react';

const styles = theme => ({
    smMargin: {
        margin: theme.spacing(1)
    },
    actionDiv: {
        textAlign: 'right'
    },
})

const PostarProcuradosLista = (props) => {
    const { classes } = props

    return (
        <List>
            {props.posts.map((post, index) => {
                return (
                    <Fragment key={index}>
                        <ListItem>
                            <ListItemText>
                                <Typography variant="h5">
                                    {post.titulo}
                                </Typography><br></br>
                                {post.descricao}<br></br><br></br>
                                <div>
                                    <img src={post.foto} />
                                </div><br></br>
                                {"Postado por " + post.autor}
                                {" no dia " + post.data}<br></br><br></br>

                                {"Entre em contato por meio do " + post.contatos}

                                <div className={classes.actionDiv}>
                                    <Button
                                        variant="contained"
                                        olor="primary" size="medium"
                                        className={classes.smMargin}
                                        onClick={() => { props.setAction({ currentId: post._id, type: props.ACTION_TYPES.UPDATE }) }}>
                                        Editar
                                    </Button>
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        size="medium"
                                        className={classes.smMargin}
                                        onClick={() => { props.setAction({ currentId: post._id, type: props.ACTION_TYPES.DELETE }) }}>
                                        Apagar
                                    </Button>
                                </div>
                            </ListItemText>
                        </ListItem>
                        <Divider component="li" />
                    </Fragment>
                )
            })}
        </List>

    );
}


export default withStyles(styles)(PostarProcuradosLista);