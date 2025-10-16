import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground } from 'react-native';
import highRisk from '../../assets/images/desease.png';
import lowRisk from '../../assets/images/desease1.png';

const HomeScreen = ({ navigation }) => {
  return (

    <ImageBackground
      source={require('../../assets/images/bg-image.png')}
      style={styles.bg}
      resizeMode="cover"
    >
      <View style={styles.container}>

        {/* High Risk Card */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.card}
          onPress={() => navigation.navigate('HighRiskTime')}
        >
          <ImageBackground
            source={highRisk}
            style={styles.imageBackground}
            imageStyle={styles.imageStyle}
          >
            <Text style={[styles.cardText, { color: '#fff' }]}>
              High{'\n'}Risk{'\n'}Time
            </Text>
          </ImageBackground>
        </TouchableOpacity>

        {/* Low Risk Card */}
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.card}
        >
          <ImageBackground
            source={lowRisk}
            style={styles.imageBackground}
            imageStyle={styles.imageStyle}
          >
            <Text style={[styles.cardText, { color: '#000' }]}>
              Low{'\n'}Risk{'\n'}Time
            </Text>
          </ImageBackground>
        </TouchableOpacity>

        {/* Enter Button */}
        <TouchableOpacity style={styles.enterButton}  >
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
    overflow: 'hidden', // ensures image fits border radius
    elevation: 5,
    backgroundColor: '#fff',
  },

  imageBackground: {
    flex: 1, // fill the entire card
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20,
  },

  imageStyle: {
    borderRadius: 15,
    resizeMode: 'cover', 
  },

  cardText: {
    fontSize: 26,
    fontWeight: 'bold',
    lineHeight: 30,
  },

  enterButton: {
    backgroundColor: '#1A781D',
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
