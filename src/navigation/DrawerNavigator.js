import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import MenuDrawer from '../components/MenuDrawer'; // your custom drawer
import HighRiskTimeScreen from '../screens/HighRiskTimeScreen';
import DiseaseDetails from '../screens/DiseaseDetails';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
    screenOptions={{ headerShown: false,
      sceneContainerStyle: { backgroundColor: 'transparent', paddingBottom: 0 },
      drawerStyle: { backgroundColor: '#1A781D' },
     }}
    
      initialRouteName="Home"
      drawerContent={(props) => <MenuDrawer {...props} />}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="HighRiskTime" component={HighRiskTimeScreen} />
      <Drawer.Screen name="DiseaseDetails" component={DiseaseDetails} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
