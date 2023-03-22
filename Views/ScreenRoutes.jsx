import React from 'react';
import { SafeAreaView } from 'react-native';
import { NativeRouter, Route, Routes } from 'react-router-native';
import MenuScreen from './MenuScreen';
import Pantalla1 from './Pantalla1';
import Pantalla2 from './Pantalla2';

function ScreenRoutes() {
    return (
        <NativeRouter>
            <SafeAreaView>
                <Routes>
                    <Route exact path="/" Component={MenuScreen} />
                    <Route path="/screen1" Component={Pantalla1} />
                    <Route path="/screen2" Component={Pantalla2} />
                </Routes>
            </SafeAreaView>
        </NativeRouter>
    )
}
export default ScreenRoutes
