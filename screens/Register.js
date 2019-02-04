import React, { Component } from 'react'
import { Container, Content, Form, Item, Input, Label, Button, Text, Thumbnail, Footer, View, Header } from 'native-base'

class Register extends Component {

    handlePressCreate = () => {
        this.props.navigation.navigate('HomeTab')
    }
    
    render() {
        return (
            <Container>
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
                        <Button onPress={this.handlePressCreate} block rounded style={{ marginTop: 16, }}>
                            <Text>Sing in</Text>
                        </Button>
                    </Form>
                </Content>
            </Container>
        )
    }
}

export default Register;