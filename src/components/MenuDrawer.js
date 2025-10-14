import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MenuDrawer = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Menu</Text>
      </View>
      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Home')}>
          <Text style={styles.menuText}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MenuDrawer;

const styles = StyleSheet.create({
  container: { flex:1,backgroundColor:'#1A781D', },
  header: { padding:20, justifyContent:'center', alignItems:'center' },
  headerText: { color:'#fff', fontSize:20, fontWeight:'600' },
  menu: { flex:1, padding:20 },
  menuItem: { paddingVertical:15 },
  menuText: { fontSize:16, color:'#1A781D', fontWeight:'500' },
});
