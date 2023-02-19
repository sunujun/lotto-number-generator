import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabIcon } from '../components/TabIcon';
import { HomeScreen } from '../screens/HomeScreen';
import { HistoryListScreen } from '../screens/HistoryListScreen';

const Tab = createBottomTabNavigator();

export const BottomTabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => {
                const getIconName = () => {
                    if (route.name === 'Home') {
                        return 'home';
                    } else if (route.name === 'History') {
                        return 'time';
                    } else {
                        return '';
                    }
                };
                const iconName = getIconName();

                return {
                    headerShown: false,
                    tabBarIcon: ({ color }) => {
                        return <TabIcon visibleBadge={false} iconName={iconName} iconColor={color} />;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                };
            }}>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="History" component={HistoryListScreen} />
        </Tab.Navigator>
    );
};
