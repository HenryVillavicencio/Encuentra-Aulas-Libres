import React, { Component } from 'react'
import { Container, Content, Form, Item, Input, Label, Button, Text, Thumbnail, Footer, View, Header } from 'native-base'
import firebase from 'react-native-firebase'

class Register extends Component {

    handleSignOut = () => {
        firebase.auth().signOut()
            .then(() => this.props.navigation.navigate('LoginStack'))
            .catch(error => this.setState({ errorMessage: error.message }))

    }

    render() {
        return (
            <Container>
                <Content padder >
                    <Thumbnail square style={{ height: 150, width: 150, alignSelf: 'center' }}
                        source={require("../assets/img/Escudo_de_la_Escuela_Politécnica_Nacional.png")}
                    />
                    <Text style={{ marginTop: 30, alignSelf: 'center' }}>Correo@pepito.com</Text>

                    <Button block rounded onPress={this.handleSignOut} style={{ marginTop: 16, }}>
                        <Text>Sing out</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

export default Register;