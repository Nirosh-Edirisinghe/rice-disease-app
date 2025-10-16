import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';

const HighRiskTimeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../assets/images/bg-image.png')}
      style={styles.bg}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* Back Icon */}
        <TouchableOpacity style={styles.backIcon} onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/images/back-icon.png')} style={styles.iconImage} />
        </TouchableOpacity>

        {/* Disease Image */}
        <Image
          source={require('../../assets/images/desease.png')}
          style={styles.diseaseImage}
        />

        {/* Title */}
        <Text style={styles.title}>High Risk Time</Text>

        {/* View Button */}
        <TouchableOpacity style={styles.viewButton} onPress={() => navigation.navigate('DiseaseDetails')}>
          <Text style={styles.viewButtonText}>Views</Text>
        </TouchableOpacity>

        {/* Menu Icon (Bottom Left) */}
        <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.openDrawer()}>
          <Image source={require('../../assets/images/menu.png')} style={styles.iconImage} />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

export default HighRiskTimeScreen;

const styles = StyleSheet.create({
  bg: { flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%' },
  container: { flex: 1, width: '100%', alignItems: 'center', justifyContent: 'flex-start', position: 'relative', paddingTop: 70, },
  backIcon: {
    position: 'absolute',
    top: 40,
    left: 20,
    borderRadius: 30,
    padding: 5,
  },
  iconImage: {
    width: 40,
    height: 40,
  },
  diseaseImage: {
    width: 350,
    height: 200,
    borderRadius: 30,
    marginTop: 60,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginVertical: 30,
  },
  viewButton: {
    backgroundColor: '#1A781D',
    paddingHorizontal: 25,
    paddingVertical: 10,
    borderRadius: 20,
  },
  viewButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  menuIcon: {
    position: 'absolute',
    bottom: 40,
    left: 20,
    backgroundColor: '#1A781D',
    borderRadius: 30,
    padding: 5,
  },
});
