import React, { Component } from 'react'
import { Container, Content, Form, Item, Input, Label, Button, Text, Thumbnail, View } from 'native-base'
import firebase from 'react-native-firebase';
import validator from 'validator';

class Login extends Component {

    state = {
        email: '',
        errorEmail: false,
        password: '',
        errorPassword: false,
        errorMessage: ''
    }

    handlePressSingup = () => {
        this.props.navigation.navigate('Register')
    }


    handleLogin = () => {
        const { email, password } = this.state
        if (validator.isEmail(email) && !validator.isEmpty(password)) {
            firebase
                .auth()
                .signInWithEmailAndPassword(email, password)
                .then(() => { })
                .catch(error => { this.setState({ errorMessage: error.message }) })
        } else {
            if (!validator.isEmail(email)) this.setState({ errorEmail: true })
            if (validator.isEmpty(password)) this.setState({ errorPassword: true })
        }

        const user = firebase.auth().currentUser;
        
        if ( user && user.emailVerified) {
            this.props.navigation.navigate('HomeTab')
        }
 
    }


    render() {
        return (
            <Container>
                <Content padder contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
                    <Thumbnail square style={{ height: 150, width: 150, alignSelf: 'center' }}
                        source={require("../assets/img/Escudo_de_la_Escuela_Politécnica_Nacional.png")}
                    />
                    <Form style={{ marginTop: 30 }}>
                        <Item floatingLabel
                            error={this.state.errorEmail} >
                            <Label> Correo </Label>
                            <Input onChangeText={(email) => { this.setState({ email, errorEmail: false, errorMessage: '' }) }} />
                        </Item>
                        <Item floatingLabel
                            error={this.state.errorPassword} >
                            <Label> Contraseña </Label>
                            <Input secureTextEntry onChangeText={(password) => { this.setState({ password, errorPassword: false, errorMessage: '' }) }} />
                        </Item>
                    </Form>
                    <Button block rounded
                        onPress={this.handleLogin}
                        style={{ marginTop: 16, marginBottom: 20 }}>
                        <Text>Sing in</Text>
                    </Button>
                    <Text style={{ color: 'red', alignSelf: 'center' }}>{this.state.errorMessage}</Text>
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