import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import MenuDrawer from '../components/MenuDrawer'; // your custom drawer

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
    screenOptions={{ headerShown: false,
      sceneContainerStyle: { backgroundColor: 'transparent', paddingBottom: 0 },
     }}
    
      initialRouteName="Home"
      drawerContent={(props) => <MenuDrawer {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
