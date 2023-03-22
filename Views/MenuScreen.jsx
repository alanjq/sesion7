import React from 'react';
import { Text, View } from 'react-native';
import { Link } from 'react-router-native';
import SCREENS from './Routes';

function MenuScreen() {
    return (
        <View>
            <Text style={{ fontWeight: 'bold', fontSize: 30 }}>Menú</Text>
            <Link to={SCREENS.SCREEN1}><Text>Ir a la pantalla 1</Text></Link>
            <Link to={SCREENS.SCREEN2}><Text>Ir a la pantalla 2</Text></Link>
            <Link to={SCREENS.MENU}><Text>Ir al menú principal</Text></Link>
        </View>
    )
}
export default MenuScreen
