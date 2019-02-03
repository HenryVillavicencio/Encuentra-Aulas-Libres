import React, { Component } from 'react'
import { Container, Content, Form, Item, Input, Label, Button, Text, Thumbnail, Footer, View, Header } from 'native-base'
import Dimensions from 'Dimensions';

var { height, width } = Dimensions.get('window');

class Register extends Component {
    render() {
        return (
            <Container>
                <Header></Header>
                <Content padder >
                    <Form style={{ marginTop: 16 }}>
                        <Item floatingLabel>
                            <Label> Correo </Label>
                            <Input  />
                        </Item>
                        <Item floatingLabel>
                            <Label> Contraseña </Label>
                            <Input secureTextEntry />
                        </Item>
                        <Item floatingLabel >
                            <Label> Confirmar contraseña </Label>
                            <Input secureTextEntry/>
                        </Item>
                        <Button block rounded style={{ marginTop: 16, }}>
                            <Text>Sing in</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        )
    }
}

export default Register;