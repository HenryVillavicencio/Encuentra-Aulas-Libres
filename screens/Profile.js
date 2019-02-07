import React, { Component } from 'react'
import { Container, Content, Form, Item, Input, Label, Button, Text, Thumbnail, Footer, View, Header } from 'native-base'
import firebase from 'react-native-firebase'
import Dimensions from 'Dimensions'

var { width } = Dimensions.get('window');

class Register extends Component {

    handleSignOut = () => {
        firebase.auth().signOut()
            .then(() => this.props.navigation.navigate('LoginStack'))
            .catch(error => this.setState({ errorMessage: error.message }))

    }

    render() {
        return (
            <Container>
                <Content padder contentContainerStyle={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
                    <Thumbnail square style={{ height: 150, width: 150, alignSelf: 'center' }}
                        source={require("../assets/img/Escudo_de_la_Escuela_Politécnica_Nacional.png")}
                    />
                    <Text style={{ marginTop:30, marginLeft:5 ,marginRight:5, textAlign: 'center' }}>
                        Esta aplicación fue desarrollada para la materia de Formulación y evaluación de proyectos. Si deseas contribuir o darnos tu opinión acerca de la app no dudes en escribirme a:
                    </Text>
                    <Text style={{textAlign: 'center' }}>
                        henry.villavicencio@epn.edu.ec
                    </Text>

                    <Button block rounded onPress={this.handleSignOut} style={{ marginTop: 16, }}>
                        <Text>Sing out</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}

export default Register;