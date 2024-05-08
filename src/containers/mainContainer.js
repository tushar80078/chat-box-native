import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import {COLORS, FONTFAMILY, FONTSIZE, SPACING} from '../theme';
import {Platform, StyleSheet, Text} from 'react-native';
import Messages from '../screens/messages';

function Mainapp() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: {},
      }}>
      {/* ==> Bottom Tab Routes */}
      <Tab.Screen
        name="Home"
        component={Messages}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <AntDesignIcons
              name="home"
              color={focused ? COLORS.primaryYellowRgb : COLORS.primaryBrownRgb}
              size={20}
            />
          ),
          // Tabbar Screen labels
          tabBarLabel: ({focused}) => <Text>Home</Text>,
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});

export default Mainapp;
