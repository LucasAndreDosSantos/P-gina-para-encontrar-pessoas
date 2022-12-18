import React, { useState, useEffect } from 'react';
import { Grid, Paper, withStyles } from '@material-ui/core';
import PostarProcuradosForm from './PostarProcuradosForm';
import PostarProcuradosLista from './PostarProcuradosLista';
import { fetchAllPost, createPost, updatePost, removePost } from '../services/ProcurarService';
import ButterToast, { Cinnamon } from 'butter-toast';
import { AssignmentTurnedIn, Cached, DeleteSweep } from '@material-ui/icons';

const styles = theme => ({
    paper: {
        margin: theme.spacing(0.5),
        padding: theme.spacing(0.5)

    },
})

const ACTION_TYPES = {
    FETCH_ALL: 'FETCH_ALL',
    CREATE: 'CREATE',
    UPDATE: 'UPDATE',
    DELETE: 'DELETE',
}

const initialFieldValues = {
    titulo: '',
    data: '',
    autor: '',
    categoria: '',
    descricao: '',
    foto: '',
    contatos: ''
};

const initialAction = {
    currentId: 0,
    type: ACTION_TYPES.FETCH_ALL
}

const PostarProcurados = (props) => {
    const { classes } = props

    const [posts, setPosts] = useState([])
    const [values, setValues] = useState(initialFieldValues)
    const [errors, setErrors] = useState({})
    const [action, setAction] = useState(initialAction)

    useEffect(() => { //component created or updated?

        fetchAllPost().then(setPosts)

    }, [posts]); //dependency array, render the screen for each posts update

    useEffect(() => {

        if (action.type === ACTION_TYPES.UPDATE) {
            setValues({ ...posts.find(x => x._id === action.currentId) })
            setErrors({})
        }
        if (action.type === ACTION_TYPES.DELETE) {
            handleDelete(action.currentId)
        }
    }, [action]);

    const handleInputChange = e => {

        const { name, value } = e.target

        setValues({
            ...values,
            [name]: value
        })
    }

    const onSuccess = (content) => {
        ButterToast.raise({
            content: <Cinnamon.Crisp
                title="Post Box"
                content={content}
                scheme={Cinnamon.Crisp.SCHEME_PURPLE} />,
        })

    }

    const handleSubmit = e => {
        e.preventDefault();
        if (validate()) {
            if (action.type === ACTION_TYPES.UPDATE) {

                updatePost(action.currentId, values).then(() => { onSuccess("Updated successfully.") })

            } else {
                createPost(values).then(() => onSuccess("Submitted successfully."))
            }
            setValues(initialFieldValues)

        }

    }

    const validate = () => {
        let temp = errors
        temp.titulo = values.titulo ? "" : "É preciso preencher este campo."
        temp.data = values.data ? "" : "É preciso preencher este campo."
        temp.autor = values.autor ? "" : "É preciso preencher este campo."
        temp.categoria = values.categoria ? "" : "É preciso preencher este campo."
        temp.descricao = values.descricao ? "" : "É preciso preencher este campo."
        temp.contatos = values.contatos ? "" : "É preciso preencher este campo."

        setErrors({ ...temp })

        return !(temp.titulo || temp.data || temp.autor || temp.categoria || temp.descricao || temp.foto || temp.contatos)
    }

    const handleDelete = id => {

        if (window.confirm('Are you sure you want to delete this record?')) {
            removePost(id).then(() => {
                onSuccess("Deleted successfully.")
                setValues(initialFieldValues)
                setAction(initialAction)
                setErrors({})
            })
        }
    }


    return (
        <Grid container justifyContent="center">

            <Grid item xs={4}>
                <Paper className={classes.paper}>
                    <PostarProcuradosForm {...{ values, handleInputChange, handleSubmit, errors }} />
                </Paper>

            </Grid>

            <Grid item xs={6}>
                <Paper className={classes.paper}>
                    <PostarProcuradosLista {...{ posts, setAction, ACTION_TYPES }} />
                </Paper>

            </Grid>

        </Grid> //Fim Container

    );

}

export default withStyles(styles)(PostarProcurados)