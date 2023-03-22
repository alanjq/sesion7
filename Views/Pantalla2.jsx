import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import { Link } from 'react-router-native';
import SCREENS from './Routes';

function Pantalla2() {
    return (
        <SafeAreaView>
            <Text>Pantalla 2</Text>
            <Link to={SCREENS.MENU}><Text>Ir al menú principal</Text></Link>
        </SafeAreaView>
    )
}
export default Pantalla2
