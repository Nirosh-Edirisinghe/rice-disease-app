import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import highRisk from '../../assets/images/desease.png';
import lowRisk from '../../assets/images/lowrisk.png';

const HomeScreen = ({ navigation }) => {
  return (

    <ImageBackground
      source={require('../../assets/images/bg-image.png')}
      style={styles.bg}
      resizeMode="cover"
    >
      <View style={styles.container}>

        {/* High Risk Card */}
        <View style={styles.card}>
          <ImageBackground
            source={highRisk}
            style={styles.imageBackground}
            imageStyle={{ borderRadius: 15 }}
          >
            <Text style={[styles.cardText, { color: '#000' }]}>
              High{'\n'}Risk{'\n'}Time
            </Text>
          </ImageBackground>
        </View>


        {/* Low Risk Card */}
        <View style={styles.card}>
          <ImageBackground
            source={highRisk}
            style={styles.imageBackground}
            imageStyle={{ borderRadius: 15 }}
          >
            <Text style={[styles.cardText, { color: '#000' }]}>Low{'\n'}Risk{'\n'}Time</Text>
          </ImageBackground>
        </View>

        {/* Enter Button */}
        <TouchableOpacity style={styles.enterButton}>
          <Text style={styles.enterText}>Enter...</Text>
        </TouchableOpacity>

        {/* Research Name */}
        <Text style={styles.researchName}>Add Research Name</Text>

        {/* Drawer Menu Icon */}
        <TouchableOpacity style={styles.menuButton} onPress={() => navigation.openDrawer()}>
          <Image
            source={require('../../assets/images/menu.png')} // use your uploaded Asset 14@4x.png
            style={styles.menuIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  bg: { flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%' },
  container: { flex: 1, width: '100%', alignItems: 'center', justifyContent: 'flex-start', position: 'relative', paddingTop: 70, },
  card: {
    width: '85%',
    height: 120,
    marginVertical: 10,
    borderRadius: 15,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: '#fff', 
  },

  imageBackground: {
    position: 'absolute',
    width: '100%',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'center',
    paddingLeft: 20,
  },
  cardText: {
    fontSize: 26,
    fontWeight: 'bold',
    lineHeight: 30,
  },
  enterButton: {
    backgroundColor: '#19a31eff',
    width: '70%',
    paddingVertical: 18,
    borderRadius: 15,
    alignItems: 'center',
    marginTop: 40,
  },
  enterText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  researchName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 70,
  },
  menuButton: {
    position: 'absolute',
    bottom: 40,
    left: 25,
    padding: 0,
    backgroundColor: 'transparent',

  },
  menuIcon: {
    width: 45,
    height: 45,
  },
});
