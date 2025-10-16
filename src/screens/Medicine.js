import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native'
import React from 'react'

const Medicine = ({ navigation }) => {
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
        <Text style={styles.title}>Select Disease</Text>
        <View style={{ width: 35 }} /> {/* Spacer for balance */}
      </View>

      {/* Disease List */}
      <View style={styles.listContainer}>
        <TouchableOpacity style={styles.diseaseBtn} onPress={() => navigation.navigate('Solution')}>
          <Text style={styles.diseaseText}>Disease Name 01</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.diseaseBtn, styles.diseaseBtnLarge]}>
          <Text style={styles.diseaseText}>Disease Name 02</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.diseaseBtn}>
          <Text style={styles.diseaseText}>Disease Name 03</Text>
        </TouchableOpacity>
      </View>

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

export default Medicine

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
  listContainer: {
    marginTop: 80,
    alignItems: 'center',
    width: '100%',
    gap: 25,
  },
  diseaseBtn: {
    backgroundColor: '#1A781D',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
    width: '80%',
    alignItems: 'center',
    elevation: 3,
  },
  diseaseBtnLarge: {
    borderRadius: 20,
    paddingVertical: 25,
  },
  diseaseText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '700',
    textAlign: 'center',
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
