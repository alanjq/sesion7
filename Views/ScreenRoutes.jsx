import React from 'react';
import { SafeAreaView } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';
import HorizontalMenu from './MenuHorizontal';
import MenuScreen from './MenuScreen';
import Pantalla1 from './Pantalla1';
import Pantalla2 from './Pantalla2';
import SCREENS from './Routes';

function ScreenRoutes() {
    return (
        <NativeRouter>
            <SafeAreaView>
                <Routes>
                    <Route exact path={SCREENS.MENU} Component={MenuScreen} />
                    <Route path={SCREENS.SCREEN1} Component={Pantalla1} />
                    <Route path={SCREENS.SCREEN2} Component={Pantalla2} />
                </Routes>
                <HorizontalMenu />
            </SafeAreaView>
        </NativeRouter>
    )
}
export default ScreenRoutes
