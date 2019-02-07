import React, { Component } from 'react'
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base'
import firebase from 'react-native-firebase'
import validator from 'validator';


class Register extends Component {

    state = {
        email: '',
        emailError: false,

        password: '',
        passwordError: false,

        passwordVerif: '',
        passwordVerifError: false,

        errorMessage: ''
    }
    handleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                const user = firebase.auth().currentUser;
                user.sendEmailVerification()
                    .then(() => {
                        alert("Verifica tu correo Electrónico");
                        this.props.navigation.navigate('Login')
                    })
                    .catch((error) => {
                        alert("Error al enviar correo = (")
                    });
            })
            .catch(error => this.setState({ errorMessage: error.message }))
    }

    render() {
        return (
            <Container>
                <Content padder >
                    <Form style={{ marginTop: 16 }}>
                        <Item floatingLabel
                            error={this.state.emailError}
                            success={validator.isEmail(this.state.email)}>
                            <Label> Correo </Label>
                            <Input onChangeText={(email) => { this.setState({ email, errorMessage: '' }) }} />
                        </Item>
                        <Item floatingLabel
                            error={this.passwordError}
                            success={validator.isAlphanumeric(this.state.password)
                                && validator.isLength(this.state.password, { min: 6, max: 20 })}>
                            <Label> Contraseña </Label>
                            <Input secureTextEntry onChangeText={(password) => { this.setState({ password, errorMessage: '' }) }} />
                        </Item>
                        <Item floatingLabel
                            error={this.state.passwordVerifError}
                            success={validator.equals(this.state.password, this.state.passwordVerif) && validator.isLength(this.state.password, { min: 6, max: 20 })}>
                            <Label> Confirmar contraseña </Label>
                            <Input secureTextEntry onChangeText={(passwordVerif) => { this.setState({ passwordVerif, errorMessage: '' }) }} />
                        </Item>
                    </Form>
                    <Button onPress={this.handleSignUp} block rounded style={{ marginTop: 16, }}>
                        <Text>Sing up</Text>
                    </Button>
                    <Text style={{ color: 'red', alignSelf: 'center' }}>{this.state.errorMessage}</Text>

                </Content>
            </Container>
        )
    }
}

export default Register;