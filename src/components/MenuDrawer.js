import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const MenuDrawer = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>MENU</Text>

      <View style={styles.menuContainer}>
        <View style={styles.menu} >
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>SEE BEST TIME SERIES</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Medicine')}>
            <Text style={styles.menuText}>MEDICINE FOR DISEASES</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Settings')}>
            <Text style={styles.menuText}>SETTINGS</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>LOG OUT</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>RESEARCH NAME</Text>
        </View>
      </View>
    </View>
  );
};

export default MenuDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A781D',
    borderTopRightRadius: 100,
    borderBottomRightRadius: 100,
    overflow: 'hidden',
    paddingVertical: 40,
  },
  header: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#b4e2b4',
  },
  menuContainer: {
    flex: 1,
    justifyContent: 'space-between', 
    paddingHorizontal: 25,
    paddingTop: 100,
  },
  menu: {
    gap: 20,
  },
  menuItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#a0dba0',
    paddingBottom: 10,
  },
  menuText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#fff',
    paddingHorizontal: 10,
  },
  footer: {
    paddingBottom: 40,
  },
  footerText: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 15,
  },
});
