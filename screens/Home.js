import React, { Component } from 'react'
import { Container, Content, Form, Item, Input, Label, Button, Text, Thumbnail, Footer, View, Header, Card, CardItem, Body, Right, Icon, Left, Picker, Spinner } from 'native-base'
import { FlatList } from 'react-native'
import Dimensions from 'Dimensions'
import CardClass from './components/cardClass'
import HeaderSearch from './components/HeaderSearch'
import horario from './Data/horario'

var { height, width } = Dimensions.get('window');

getschedulegDay = (horario,day) =>{
    switch(day){
        case 0:  return horario.lunes
        case 1:  return horario.martes
        case 2:  return horario.miercoles
        case 3:  return horario.jueves
        case 4:  return horario.viernes
    }
}

class Home extends Component {
    state = {
        daySelected: new Date().getDay(),
        data: getschedulegDay(horario,new Date().getDay())
    }

    onValueChange = (value) => {
        this.setState({
            daySelected: value,
            data: getschedulegDay(horario,value)
        })
    }

    handleSelection = (interval) => {
        console.log(horario.lunes[interval.from.getHours() - 7]);
    }

    render() {
        return (
            <Container>
                <HeaderSearch Selection={this.handleSelection} />
                <View style={{width:width*0.5,alignSelf:'center'}}>
                    <Picker
                        selectedValue={this.state.daySelected}
                        onValueChange={this.onValueChange}
                        style={{color:'gray'}}
                    >
                        <Picker.Item label="LUNES" value={0} />
                        <Picker.Item label="MARTES" value={1} />
                        <Picker.Item label="MIÉRCOLES" value={2} />
                        <Picker.Item label="JUEVES" value={3} />
                        <Picker.Item label="VIERNES" value={4} />
                    </Picker>
                </View>
                <Content padder >
                    <FlatList
                        data={this.state.data}
                        keyExtractor={(item, index) => index}
                        renderItem={({ item }) => <CardClass{...item} />}
                    />
                </Content>
            </Container>
        )
    }
}

export default Home;