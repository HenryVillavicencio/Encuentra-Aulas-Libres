import React, { Component } from 'react'
import { Container, Content, Form, Item, Input, Label, Button, Text, Thumbnail, Footer, View } from 'native-base'

import firebase from 'react-native-firebase';


class Login extends Component {

    state = {
        email: '',
        password: '',
        errorMessage: ''
    }

    handlePressSingup = () => {
        this.props.navigation.navigate('Register')
    }

    handlePressSingin = () => {
        console.log(this.props.navigation);

    }

    handleLogin = () => {
        const { email, password } = this.state
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => this.props.navigation.navigate('HomeTab'))
            .catch(error => this.setState({ errorMessage: error.message }))
        alert(this.state.errorMessage)
    }

    render() {
        return (
            <Container>
                <Content padder contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
                    <Thumbnail square style={{ height: 150, width: 150, alignSelf: 'center' }}
                        source={require("../assets/img/Escudo_de_la_Escuela_Politécnica_Nacional.png")}
                    />
                    <Form style={{ marginTop: 30 }}>
                        <Item floatingLabel>
                            <Label> Correo </Label>
                            <Input onChangeText={(email) => { this.setState({ email }) }} />
                        </Item>
                        <Item floatingLabel>
                            <Label> Contraseña </Label>
                            <Input onChangeText={(password) => { this.setState({ password }) }} />
                        </Item>
                        <Button onPress={this.handleLogin} block rounded style={{ marginTop: 16, marginBottom: 20 }}>
                            <Text>Sing in</Text>
                        </Button>
                    </Form>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 16 }} >
                        <Text style={{ color: 'gray' }}> ¿No tienes cuenta?</Text>
                        <Text onPress={this.handlePressSingup} style={{ color: 'blue' }}> Sing up </Text>
                    </View>
                </Content>
            </Container>
        )
    }
}

export default Login;