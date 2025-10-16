import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image, ScrollView } from 'react-native'
import React from 'react'

const Solution = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../assets/images/bg-image.png')}
      style={styles.bg}
      resizeMode="cover"
    >
      {/* Header */}
      <View style={styles.headerRow}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/images/back-icon.png')}
            style={styles.backIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.title}>Disease Name</Text>
        <View style={{ width: 35 }} /> {/* Spacer */}
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Disease Image */}
        <Image
          source={require('../../assets/images/desease.png')} // Replace with your real image
          style={styles.diseaseImage}
          resizeMode="cover"
        />

        {/* Solution Section */}
        <View style={styles.solutionContainer}>
          <Text style={styles.solutionTitle}>Solution</Text>
          <Text style={styles.solutionText}>
            Use of resistant rice varieties.{'\n'}
            Crop rotation and proper field drainage.{'\n'}
            Balanced fertilizer use.{'\n'}
            Fungicide application when needed.
          </Text>
        </View>
      </ScrollView>

      {/* Bottom Menu Button */}
      <TouchableOpacity style={styles.menuBtn} onPress={() => navigation.openDrawer()}>
        <Image
          source={require('../../assets/images/menu.png')}
          style={styles.menuIcon}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </ImageBackground>
  )
}

export default Solution

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    marginTop: 60,
  },
  backBtn: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: 40,
    height: 40,
  },
  title: {
    fontSize: 22,
    color: '#000',
    fontWeight: '700',
    textAlign: 'center',
    flex: 1,
  },
  scrollContent: {
    alignItems: 'center',
    paddingBottom: 100,
  },
  diseaseImage: {
    width: '100%',
    height: 220,
    borderRadius: 15,
    marginTop: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
  solutionContainer: {
    width: '85%',
    marginTop: 30,
  },
  solutionTitle: {
    fontSize: 20,
    color: '#000',
    fontWeight: '700',
    marginBottom: 8,
  },
  solutionText: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
    lineHeight: 24,
  },
  menuBtn: {
    position: 'absolute',
    bottom: 30,
    left: 25,
    backgroundColor: '#1A781D',
    borderRadius: 30,
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuIcon: {
    width: 35,
    height: 35,
  },
})
