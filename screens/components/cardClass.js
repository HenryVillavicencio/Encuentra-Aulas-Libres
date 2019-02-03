import React, { Component } from 'react'
import { Container, Content, Form, Item, Input, Label, Button, Text, Thumbnail, Footer, View, Header, Card, CardItem, Body, Right, Icon, Left } from 'native-base'
import Dimensions from 'Dimensions';
import { FlatList }from 'react-native'

var { height, width } = Dimensions.get('window');

class CardClass extends Component {

    render() {
        return (
            <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'center' }}>
                <View style={{alignItems: "center",}}>
                    <Text style={{ fontSize: 23, color: 'gray' }}>{this.props.hora > 12 ? this.props.hora -12: this.props.hora} </Text>
                    <Text style={{ fontSize: 23, color: 'gray' }}>{this.props.hora > 12 ? "PM": "AM"}</Text>
                </View>
                <Card transparent style={{ width: width * 0.75, marginLeft: 16 }} >
                    <CardItem style={{ backgroundColor: 'blue', borderRadius: 10 }} >
                        <Body >
                            <FlatList
                                data={this.props.clases}
                                renderItem= {({item}) => <Text style={{ color: 'white' }}> {item} </Text>}
                            />
                        </Body>
                        <Right>
                            <Thumbnail large source={require('../../assets/img/icons8-student-center-96.png')} />
                        </Right>
                       
                    </CardItem>
                </Card>
            </View>
        )
    }
}

export default CardClass;