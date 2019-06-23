import React from 'react'
import { TextField, Button, Card, Typography, Container, CardContent } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
const axios = require('axios')

class CustomerForm extends React.Component {

    state = {
        name: '',
        phone: '',
        city: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:3000/api/customer', this.state)
            .then(response => {
                this.setState({
                    name: '',
                    phone: '',
                    city: '',
                })
            })
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        const classes = makeStyles(theme => ({
            card: {
                margin: theme.spacing(3),
            },
            button: {
                margin: theme.spacing(1),
            },
            input: {
                display: 'none',
            },
            submit: {
                margin: theme.spacing(3, 0, 2)
            }
        }));
        return (
            <Container component="main" maxWidth="xs">
                <Card className={classes.card}>
                    <CardContent>
                        <Typography component="h1" variant="h5" align="center">
                            Cadastrar Cliente
                        </Typography>
                        <form noValidate onSubmit={this.handleSubmit}>
                            <TextField
                                name="name"
                                fullWidth
                                id="txt-name"
                                label="Nome"
                                className={classes.TextField}
                                onChange={this.handleChange}
                                value={this.state.name}
                            />
                            <TextField
                                name="phone"
                                fullWidth
                                id="txt-phone"
                                label="Telefone"
                                className={classes.TextField}
                                onChange={this.handleChange}
                                value={this.state.phone}
                            />
                            <TextField
                                name="city"
                                fullWidth
                                id="txt-city"
                                label="Cidade"
                                className={classes.TextField}
                                onChange={this.handleChange}
                                value={this.state.city}
                            />
                            <Button fullWidth variant="contained" color="primary" className={classes.submit} type="submit">
                                Salvar
                            </Button>

                        </form>
                    </CardContent>
                </Card>
            </Container>

        )
    }

}

export default CustomerForm