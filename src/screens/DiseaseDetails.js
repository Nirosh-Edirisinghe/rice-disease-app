import { View, Text, StyleSheet, Image, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';

const DiseaseDetails = ({ navigation }) => {
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


        {/* Graph Image Section */}
        <View style={styles.graphCard}>
          <Image
            source={require('../../assets/images/graph.png')}
            style={styles.graphImage}
          />
        </View>

        {/* Title */}
        <Text style={styles.title}>High Risk Time</Text>


        {/* Bottom Section */}
        <View style={styles.bottomSection}>
          <View style={styles.subtitle}>
            <Text style={styles.title1}>Disease</Text>
            <Text style={styles.title1}>Risk</Text>
          </View>

          <View style={styles.graphCard1}>
            <Image
              source={require('../../assets/images/graph1.png')}
              style={styles.graphImage}
            />
          </View>
        </View>

        {/* Menu Icon (Bottom Left) */}
        <TouchableOpacity style={styles.menuIcon} onPress={() => navigation.openDrawer()}>
          <Image source={require('../../assets/images/menu.png')} style={styles.iconImage} />
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
};

export default DiseaseDetails;

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
    paddingTop: 70,
  },
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
  graphCard: {
    width: '85%',
    height: 200,
    marginTop: 40,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    overflow: 'hidden', // ensures image respects rounded corners
    alignSelf: 'center', // centers horizontally
  },
  graphCard1: {
    width: '100%',
    height: 200,
    marginVertical: 20,
    borderRadius: 30,
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 3 },
    overflow: 'hidden', // ensures image respects rounded corners
    alignSelf: 'center', // centers horizontally
  },

  graphImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius: 30, // keeps smooth corners
  },

  title: {
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 30,
  },
  viewButton: {
    backgroundColor: '#1A781D',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 20,
    marginBottom: 40,
  },
  viewButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  bottomSection: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 150, // keeps it above the menu icon
  },
  subtitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
    marginBottom: 20,
  },
  title1: {
    fontSize: 20,
    fontWeight: '700',
  },
  smallDiseaseImage: {
    width: 350,
    height: 200,
    borderRadius: 30,
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
