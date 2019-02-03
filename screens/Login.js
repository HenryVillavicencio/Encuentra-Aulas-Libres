import React, { Component } from 'react'
import { Container, Content, Form, Item, Input, Label, Button, Text, Thumbnail, Footer, View } from 'native-base'
import Dimensions from 'Dimensions';

var {height, width} = Dimensions.get('window');

class Login extends Component {
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
                        <Button block rounded style={{ marginTop: 16, marginBottom: 20 }}>
                            <Text>Sing in</Text>
                        </Button>
                    </Form>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 16 }} >
                        <Text style={{color: 'gray'}}> ¿No tienes cuenta?</Text>
                        <Text style={{color: 'blue'}}> Sing up </Text>
                    </View>
                </Content>
            </Container>
        )
    }
}

export default Login;