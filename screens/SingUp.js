import React, { Component } from 'react'
import { Container, Content, Form, Item, Input, Label, Button, Text } from 'native-base'
import firebase from 'react-native-firebase'

class Register extends Component {

    state = {
        email: '',
        password: '',
        passverifier: '',
        errorverifier: false,
        errorMessage: ''
    }
    handleSignUp = () => {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => this.props.navigation.navigate('HomeTab'))
            .catch(error => this.setState({ errorMessage: error.message }))
    }

    handlePressCreate = () => {
       // this.handleverifier();
        // this.props.navigation.navigate('HomeTab')
    }

    handleverifier = () => {
        if (this.state.password == "") {

            alert(this.state.errorverifier)
            this.setState({ errorMessage: "Error! Contraseña vacia" })
        }

        else
            if (this.state.password == this.state.passverifier)
                this.setState({ errorverifier: false })
            else
                this.setState({ errorverifier: true, errorMessage: "Contraseña no coinciden" })
    }

    render() {
        return (
            <Container>
                <Content padder >
                    <Form style={{ marginTop: 16 }}>
                        <Item floatingLabel>
                            <Label> Correo </Label>
                            <Input onChangeText={(email) => { this.setState({ email }) }} />
                        </Item>
                        <Item floatingLabel>
                            <Label> Contraseña </Label>
                            <Input secureTextEntry onChangeText={(password) => { this.setState({ password }) }} />
                        </Item>
                        <Item floatingLabel error={this.state.errorverifier} >
                            <Label> Confirmar contraseña </Label>
                            <Input secureTextEntry onChangeText={(passverifier) => { this.setState({ passverifier }) }} />
                        </Item>
                    </Form>
                    <Text>{this.state.errorMessage}</Text>
                    <Button onPress={this.handleSignUp} block rounded style={{ marginTop: 16, }}>
                        <Text>Sing un</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

export default Register;