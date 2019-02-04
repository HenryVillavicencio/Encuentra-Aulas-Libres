import React, { Component } from 'react'
import { Item, Button, Text, Header, Body, Right, Icon, Left } from 'native-base'
import DateTimePicker from 'react-native-modal-datetime-picker';

class HeaderSearch extends Component {

    state = {
        isDateTimePickerFromVisible: false,
        isDateTimePickerToVisible: false,
        interval: {
            from: null,
            to: null,
        }
    };

    _showDateTimePickerFrom = () => this.setState({ isDateTimePickerFromVisible: true });

    _hideDateTimePickerFrom = () => this.setState({ isDateTimePickerFromVisible: false });

    _handleDatePickedFrom = (date) => {
        const hora = date.getHours();
        if( hora < 7 || hora >17 ){
            alert("El horario de inicio debe estar entre las 7:00 y las 17:00")
        }else{
            this.setState({
                interval: {
                    from: date,
                    to: this.state.interval.to
                }
            })
            this.props.Selection(this.state.interval);
        }
        
        this._hideDateTimePickerFrom();
    };

    timeFormat = (date) => {
        const horas = date.getHours();
        const minutos = date.getMinutes();
        let h = horas > 10 ? horas : "0" + horas
        let m = minutos > 10 ? minutos : "0" + minutos
        return h + ":" + m
    }

    _showDateTimePickerTo = () => this.setState({ isDateTimePickerToVisible: true });

    _hideDateTimePickerTo = () => this.setState({ isDateTimePickerToVisible: false });

    _handleDatePickedTo = (date) => {
        const hora = date.getHours();

        if( hora < 8 || hora >18 ){
            alert("El horario de inicio debe estar entre las 8:00 y las 18:00")
        }else{

            this.setState({
                interval: {
                    from: this.state.interval.from,
                    to: date
                }
            })
            this.props.Selection(this.state.interval);
        }

        this._hideDateTimePickerTo();
    };


    render() {
        return (
            <Header transparent searchBar >
                <Body style={{ flexDirection: 'row' }}>
                    <Button style={{ flex: 1 }} block bordered rounded onPress={this._showDateTimePickerFrom}>
                        <Left style={{ paddingLeft: 10 }}>
                            <Text style={{ color: 'gray' }}>
                                {this.state.interval.from ? this.timeFormat(this.state.interval.from) : "Inicio"}
                            </Text>
                        </Left>
                        <Icon active type='MaterialCommunityIcons' name='clock-start' />
                    </Button>
                    <Button style={{ flex: 1 }} block bordered rounded onPress={this._showDateTimePickerTo}>
                        <Left style={{ paddingLeft: 10 }}>
                            <Text style={{ color: 'gray' }}>
                                {this.state.interval.to ? this.timeFormat(this.state.interval.to) : "Fin"}
                            </Text>
                        </Left>
                        <Icon active type='MaterialCommunityIcons' name='clock-end' />
                    </Button>
                </Body>
                <DateTimePicker
                    mode="time"
                    minuteInterval={10}
                    isVisible={this.state.isDateTimePickerFromVisible}
                    onConfirm={this._handleDatePickedFrom}
                    onCancel={this._hideDateTimePickerFrom}
                />
                <DateTimePicker
                    mode="time"
                    minuteInterval={10}
                    isVisible={this.state.isDateTimePickerToVisible}
                    onConfirm={this._handleDatePickedTo}
                    onCancel={this._hideDateTimePickerTo}
                />
            </Header>
        )
    }
}

export default HeaderSearch;