import React, { Component } from 'react'
import { Container, Content, Form, Item, Input, Label, Button, Text, Thumbnail, Footer, View, Header, Card, CardItem, Body, Right, Icon, Left, Picker, Spinner } from 'native-base'
import { FlatList } from 'react-native'
import Dimensions from 'Dimensions'
import CardClass from './components/cardClass'
import HeaderSearch from './components/HeaderSearch'
import horario from './Data/horario'
import filter from '../tools/filter'
var { height, width } = Dimensions.get('window');

getscheduleDay = (horario, day) => {
    switch (day) {
        case 0: return horario.lunes
        case 1: return horario.martes
        case 2: return horario.miercoles
        case 3: return horario.jueves
        case 4: return horario.viernes
    }
}

filterSchedule = (schedule, from, to) => {
    if (from && to) {
        schedule = schedule.slice(from.getHours() - 7, to.getHours() - 7)
        let clasesInclude = [];
        schedule[0].clases.forEach(element => {
            let include = true;
            schedule.forEach(item => {
                if (!item.clases.includes(element)) { include = false }
            });
            if (include) clasesInclude.push(element);
        });
        if (clasesInclude.length == 0) alert("No hay clases disponibles en ese horario")
        return clasesInclude;
    }
    return [];
}

class Home extends Component {
    state = {
        daySelected: new Date().getDay(),
        data: getscheduleDay(horario, new Date().getDay()),
        datafilter: []
    }

    onValueChange = (value) => {
        this.setState({
            daySelected: value,
            data: getscheduleDay(horario, value),
            datafilter: []
        })


    }

    handleSelection = (from, to) => {
        if (from && to)
            if (from < to) {
                this.setState({
                    datafilter: filterSchedule(this.state.data, from, to)
                })
            }
            else
                alert("Horario incorrecto!")
        else {
            this.setState({ datafilter: [] })
        }
    }

    render() {
        return (
            <Container>
                <HeaderSearch 
                    Selection={this.handleSelection}
                 />
                <View style={{ width: width * 0.5, alignSelf: 'center' }}>
                    <Picker
                        selectedValue={this.state.daySelected}
                        onValueChange={this.onValueChange}
                        style={{ color: 'gray' }}
                    >
                        <Picker.Item label="LUNES" value={0} />
                        <Picker.Item label="MARTES" value={1} />
                        <Picker.Item label="MIÉRCOLES" value={2} />
                        <Picker.Item label="JUEVES" value={3} />
                        <Picker.Item label="VIERNES" value={4} />
                    </Picker>
                </View>
                <Content padder >
                    {
                        this.state.datafilter.length > 0 &&
                        <Card transparent>
                            <CardItem style={{ backgroundColor: 'green', borderRadius: 10 }} >
                                <Body >
                                    <FlatList
                                        data={this.state.datafilter}
                                        keyExtractor={(item, index) => index.toString() }
                                        renderItem={({ item }) => <Text style={{ color: 'white' }}> {item} </Text>}
                                    />
                                </Body>
                            </CardItem>
                        </Card>
                    }
                    <FlatList
                        data={this.state.data}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item }) => <CardClass{...item} />}
                    />
                </Content>
            </Container>
        )
    }
}

export default Home;