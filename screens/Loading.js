import React, { Component } from 'react'
import { Container, Content, Spinner } from 'native-base'
import firebase from 'react-native-firebase'

class Loading extends Component {

    componentDidMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user !== null) {
                if (user.emailVerified) {
                    this.props.navigation.navigate(user ? 'HomeTab' : 'LoginStack')
                } else {
                    this.props.navigation.navigate('LoginStack')
                }
            } else {
                this.props.navigation.navigate('LoginStack')
            }
        })
    }

    render() {
        return (
            <Container>
                <Content>
                    <Spinner></Spinner>
                </Content>
            </Container>
        )
    }
}

export default Loading;