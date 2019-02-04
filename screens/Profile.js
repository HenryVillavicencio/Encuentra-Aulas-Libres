import React, { Component } from 'react'
import { Container, Content, Form, Item, Input, Label, Button, Text, Thumbnail, Footer, View, Header } from 'native-base'
import Dimensions from 'Dimensions';

var { height, width } = Dimensions.get('window');

class Register extends Component {
    render() {
        return (
            <Container>
                <Content padder >
                    <Thumbnail square style={{ height: 150, width: 150, alignSelf: 'center' }}
                        source={require("../assets/img/Escudo_de_la_Escuela_Politécnica_Nacional.png")}
                    />
                    <Text style={{marginTop:30,alignSelf:'center'}}>Correo@pepito.com</Text>
                    <Form style={{ marginTop: 16 }}>
                        <Item floatingLabel>
                            <Label> Contraseña Actual </Label>
                            <Input />
                        </Item>
                        <Item floatingLabel>
                            <Label> Contraseña Nueva </Label>
                            <Input secureTextEntry />
                        </Item>
                        <Item floatingLabel >
                            <Label> Confirmar contraseña </Label>
                            <Input secureTextEntry />
                        </Item>
                        <Button block rounded style={{ marginTop: 16, }}>
                            <Text>Enviar</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        )
    }
}

export default Register;