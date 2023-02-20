import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { BottomTabNavigation } from './src/navigation/BottomTabNavigation';
import store from './src/store/store';

function App(): JSX.Element {
    return (
        <Provider store={store}>
            <SafeAreaProvider>
                <NavigationContainer>
                    <BottomTabNavigation />
                </NavigationContainer>
            </SafeAreaProvider>
        </Provider>
    );
}

export default App;
