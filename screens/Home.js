import React, { Component } from 'react'
import { Container, Content, Form, Item, Input, Label, Button, Text, Thumbnail, Footer, View, Header, Card, CardItem, Body, Right, Icon, Left } from 'native-base'
import { FlatList }from 'react-native'
// import Dimensions from 'Dimensions'
import CardClass from './components/cardClass'
import HeaderSearch from './components/HeaderSearch'
import horario from './Data/horario'

// var { height, width } = Dimensions.get('window');

class Home extends Component {

    getDay = () => {
        switch (new Date().getDay()) {
            case 0: return "Domingo"
            case 1: return "Lues"
            case 2: return "Martes"
            case 3: return "Miércoles"
            case 4: return "Jueves"
            case 5: return "Viernes"
            case 6: return "Sábado"
        }
    }

    render() {
        return (
            <Container>
                <HeaderSearch/>
                <Text style={{ height:50, fontSize: 23, color: 'gray', alignSelf: 'center' }}>{this.getDay()}</Text>
                <Content padder >

                <FlatList
                    data={horario.lunes}
                    renderItem= {({item}) => <CardClass {...item}/>}
                />
                </Content>
            </Container>
        )
    }
}

export default Home;