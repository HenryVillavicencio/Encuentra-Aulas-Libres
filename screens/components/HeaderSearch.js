import React, { Component } from 'react'
import { Item, Button, Text, Header, Body, Right, Icon, Left, Picker, Footer, View } from 'native-base'
import DateTimePicker from 'react-native-modal-datetime-picker';

class HeaderSearch extends Component {

    state = {
        isDateTimePickerFromVisible: false,
        isDateTimePickerToVisible: false,
        from: null,
        to: null,
    };

    _showDateTimePickerFrom = () => this.setState({ isDateTimePickerFromVisible: true });

    _hideDateTimePickerFrom = () => this.setState({ isDateTimePickerFromVisible: false });

    _onCancelTimePickerTo = () => {
        this.setState({ to: null, isDateTimePickerToVisible: false });
        this.props.Selection(this.state.from, this.state.to);
    }


    _handleDatePickedFrom = (date) => {

        this.setState({ from: date })
        this.props.Selection(this.state.from, this.state.to);

        this._hideDateTimePickerFrom();
    };

    timeFormat = (date) => {
        const horas = date.getHours();
        const minutos = date.getMinutes();
        let h = horas > 9 ? horas : "0" + horas
        let m = minutos > 9 ? minutos : "0" + minutos
        return h + ":" + m
    }

    _showDateTimePickerTo = () => this.setState({ isDateTimePickerToVisible: true });

    _hideDateTimePickerTo = () => this.setState({ isDateTimePickerToVisible: false });

    _onCancelTimePickerFrom = () => {

        this.setState({ from: null, isDateTimePickerFromVisible: false });
        this.props.Selection(this.state.from, this.state.to);
    }

    _handleDatePickedTo = (date) => {
        this.setState({ to: date })
        this.props.Selection(this.state.from, this.state.to);
        this._hideDateTimePickerTo();
    };

    render() {
        return (
            <Header transparent searchBar >
                <Body style={{ flexDirection: 'row' }}>
                    <Button style={{ flex: 1, margin: 10 }} block bordered rounded onPress={this._showDateTimePickerFrom}>
                        <Left style={{ paddingLeft: 10 }}>
                            <Text style={{ color: 'gray' }}>
                                {this.state.from ? this.timeFormat(this.state.from) : "Inicio"}
                            </Text>
                        </Left>
                        <Icon active type='MaterialCommunityIcons' name='clock-start' />
                    </Button>
                    <Button style={{ flex: 1, margin: 10 }} block bordered rounded onPress={this._showDateTimePickerTo}>
                        <Left style={{ paddingLeft: 10 }}>
                            <Text style={{ color: 'gray' }}>
                                {this.state.to ? this.timeFormat(this.state.to) : "Fin"}
                            </Text>
                        </Left>
                        <Icon active type='MaterialCommunityIcons' name='clock-end' />
                    </Button>
                </Body>
                <DateTimePicker
                    mode="time"
                    isVisible={this.state.isDateTimePickerFromVisible}
                    onConfirm={this._handleDatePickedFrom}
                    onCancel={this._onCancelTimePickerFrom}
                />
                <DateTimePicker
                    mode="time"
                    isVisible={this.state.isDateTimePickerToVisible}
                    onConfirm={this._handleDatePickedTo}
                    onCancel={this._onCancelTimePickerTo}
                />
            </Header>
        )
    }
}

export default HeaderSearch;