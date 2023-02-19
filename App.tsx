import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BottomTabNavigation } from './src/navigation/BottomTabNavigation';

function App(): JSX.Element {
    return (
        <SafeAreaProvider>
            <NavigationContainer>
                <BottomTabNavigation />
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

export default App;
