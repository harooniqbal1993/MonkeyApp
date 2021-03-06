import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/Home';
import Cart from '../Screens/Cart';
import Favourites from '../Screens/Favourites';
import PastOrders from '../Screens/PastOrders';
import Account from '../Screens/Account';
import SubCategory from '../Screens/SubCategory';
import ItemDetail from '../Screens/ItemDetail';

const Stack = createStackNavigator();

export const HomeStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Stack.Screen name="SubCategory" component={SubCategory} options={{ headerShown: false }} />
            <Stack.Screen name="ItemDetail" component={ItemDetail} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export const CartStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Cart" component={Cart} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export const FavoriteStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Favorite" component={Favourites} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export const OrdersStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Past Orders" component={PastOrders} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}

export const AccountStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Account" component={Account} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}