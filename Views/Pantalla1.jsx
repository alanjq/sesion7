import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Link } from 'react-router-native';
import SCREENS from './Routes';

function Pantalla1() {
    return (
        <SafeAreaView>
            <Text>Pantalla 1</Text>
            <Link to={SCREENS.MENU}><Text>Ir al menú principal</Text></Link>
        </SafeAreaView>
    )
}
export default Pantalla1
