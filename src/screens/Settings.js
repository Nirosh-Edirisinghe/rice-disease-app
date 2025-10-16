import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import React from 'react'

const Settings = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>SETTINGS</Text>

      <View style={styles.menuContainer}>
        <View style={styles.menu} >
          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>NAME</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Medicine')}>
            <Text style={styles.menuText}>PHONE NUMBER</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Settings')}>
            <Text style={styles.menuText}>CHANGE PASSWORD</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.menuItem}>
            <Text style={styles.menuText}>HELP</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          {/* Left side - Edit Button */}
          <TouchableOpacity style={styles.editContainer}>
            {/* Circle Image with "!" */}
            <ImageBackground
              source={require('../../assets/images/edit-circle.png')} // your rounded image
              style={styles.circleImg}
              resizeMode="cover"
            >
            </ImageBackground>

            {/* Rectangle Image with "EDIT" */}
            <ImageBackground
              source={require('../../assets/images/edit-rect.png')}
              style={styles.editRectImg}
              resizeMode="cover"
            >
              <Text style={styles.editText}>EDIT</Text>
            </ImageBackground>
          </TouchableOpacity>

          {/* Right side - Back Text */}
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.backText}>BACK</Text>
          </TouchableOpacity>
        </View>

      </View>
    </View>
  )
}

export default Settings

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A781D',
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 15,
  },
  editContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 0
  },
  circleImg: {
    width: 35,
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
  },
  editRectImg: {
    height: 35,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  exclamation: {
    color: '#fff',
    fontSize: 22,
    fontWeight: '700',
  },
  editText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
  backText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
  },
})