import React, { Component } from 'react'
import { Container, Content, Form, Item, Input, Label, Button, Text, Thumbnail, Footer, View, Header, Card, CardItem, Body, Right, Icon, Left } from 'native-base'
import Dimensions from 'Dimensions'


var { height, width } = Dimensions.get('window');

class HeaderSearch extends Component {

    onFocus  = () => {
        alert('hola...... =)');
        
    }
    render() {
        return (
            <Header searchBar rounded>
                <Item >
                    <Input placeholder="Buscar" />
                    <Icon name="ios-home"></Icon>
                </Item>
            </Header>
        )
    }
}

export default HeaderSearch;