import React, { Component } from 'react'
import { Text, Thumbnail, View, Card, CardItem, Body, Right } from 'native-base'
import Dimensions from 'Dimensions';
import { FlatList } from 'react-native'

var { height, width } = Dimensions.get('window');

class CardClass extends Component {

    render() {
        return (
            <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'center' }}>
                <View style={{ alignItems: "center", }}>
                    <Text style={{ fontSize: 23, color: 'gray' }}>{this.props.hora > 12 ? this.props.hora - 12 : this.props.hora} </Text>
                    <Text style={{ fontSize: 23, color: 'gray' }}>{this.props.hora > 12 ? "PM" : "AM"}</Text>
                </View>
                <Card transparent style={{ width: width * 0.75, marginLeft: 16 }} >
                    <CardItem style={{ backgroundColor: '#2196f3', borderRadius: 10 }} >
                        <Body >
                            <FlatList
                                data={this.props.clases}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item }) => <Text style={{ color: 'white' }}> {item} </Text>}
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