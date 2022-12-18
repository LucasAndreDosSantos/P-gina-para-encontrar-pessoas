import React from 'react';
import { Button, TextField, withStyles } from '@material-ui/core'
import { red } from '@material-ui/core/colors';

const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(0.5),
        },
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    botaoPostar: {
        width: '100%',
        margin: theme.spacing(0.6),
        padding: theme.spacing(0.6),

    }
})


const PostarProcuradosForm = (props) => {
    const { classes } = props;
    return (
        /* Formulário contém:
            - Título
            - Data de postagem
            - Autor
            - Categoria
            - Link imagem
            - Descrição/Texto
            - Email
        */

        <form noValidate autoComplete="off" className={`${classes.root} ${classes.form}`} onSubmit={props.handleSubmit}>

            <TextField
                name="titulo"
                label="Titulo"
                variant="standard"
                fullWidth
                value={props.values.titulo}
                onChange={props.handleInputChange}
                {...(props.errors.titulo ? { error: true, helperText: props.errors.titulo } : null)} />

            <TextField
                name="data"
                label="Data"
                variant="standard"
                fullWidth
                value={props.values.data}
                onChange={props.handleInputChange}
                {...(props.errors.data ? { error: true, helperText: props.errors.data } : null)} />

            <TextField
                name="autor"
                label="Autor"
                variant="standard"
                fullWidth
                value={props.values.autor}
                onChange={props.handleInputChange}
                {...(props.errors.autor ? { error: true, helperText: props.errors.autor } : null)} />

            <TextField
                name="categoria"
                label="Categoria (normal/desaparecidos)"
                variant="standard"
                fullWidth
                value={props.values.categoria}
                onChange={props.handleInputChange}
                {...(props.errors.categoria ? { error: true, helperText: props.errors.categoria } : null)} />

            <TextField
                name="descricao"
                label="Texto"
                variant="standard"
                fullWidth
                multiline
                rows={4}
                value={props.values.descricao}
                onChange={props.handleInputChange}
                {...(props.errors.descricao ? { error: true, helperText: props.errors.descricao } : null)} />

            <TextField
                name="foto"
                label="Link da imagem"
                variant="standard"
                fullWidth
                value={props.values.foto}
                onChange={props.handleInputChange}/>

            <TextField
                name="contatos"
                label="Contatos"
                variant="standard"
                fullWidth
                value={props.values.contatos}
                onChange={props.handleInputChange}
                {...(props.errors.contatos ? { error: true, helperText: props.errors.contatos } : null)} />

            <Button
                variant="contained"
                color="primary"
                type="postar"
                className={classes.botaoPostar} >
                Postar
            </Button>

        </form >

    );
}

export default withStyles(styles)(PostarProcuradosForm);