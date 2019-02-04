import React, { Component } from 'react'
import { Container, Content, Form, Item, Input, Label, Button, Text, Thumbnail, Footer, View } from 'native-base'
import Dimensions from 'Dimensions';

var {height, width} = Dimensions.get('window');

class Login extends Component {

    handlePressSingup = () => {
        this.props.navigation.navigate('Register')
    }

    handlePressSingin = () => {
        console.log(this.props.navigation);
        
        this.props.navigation.navigate('HomeTab')
    }

    render() {
        return (
            <Container>
                <Content padder contentContainerStyle={{ flex: 1, justifyContent: 'center' }}>
                    <Thumbnail square style={{ height: 150, width: 150, alignSelf: 'center' }}
                        source={require("../assets/img/Escudo_de_la_Escuela_Politécnica_Nacional.png")}
                    />
                    <Form style={{marginTop: 30}}>
                        <Item floatingLabel>
                            <Label> Correo </Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Label> Contraseña </Label>
                            <Input />
                        </Item>
                        <Button onPress={this.handlePressSingin}  block rounded style={{ marginTop: 16, marginBottom: 20 }}>
                            <Text>Sing in</Text>
                        </Button>
                    </Form>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 16 }} >
                        <Text style={{color: 'gray'}}> ¿No tienes cuenta?</Text>
                        <Text  onPress={this.handlePressSingup} style={{color: 'blue'}}> Sing up </Text>
                    </View>
                </Content>
            </Container>
        )
    }
}

export default Login;