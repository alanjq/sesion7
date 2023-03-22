import React from 'react';
import { Text, View } from 'react-native';
import { Link } from 'react-router-native';
import SCREENS from './Routes';

function HorizontalMenu() {
    const menustyles = {
        backgroundColor: 'black',
        color: 'white',
        flex: 'flex',
        flexDirection: 'row',
        gap: 30,
        padding: 15,
    };

    const menuItemStyle = {
        fontWeight: 'bold',
        fontSize: 20,
        color: 'white'
    }

    return (
        <View style={menustyles}>
            <Link to={SCREENS.MENU}><Text style={menuItemStyle}>Inicio</Text></Link>
            <Link to={SCREENS.SCREEN1}><Text style={menuItemStyle}>Pantalla 1</Text></Link>
            <Link to={SCREENS.SCREEN2}><Text style={menuItemStyle}>Pantalla 2</Text></Link>
        </View>
    )
}
export default HorizontalMenu
