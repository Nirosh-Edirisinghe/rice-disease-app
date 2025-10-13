import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ImageBackground } from 'react-native'
import React from 'react'

const CreateAccount = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../assets/images/bg-image.png')}
      style={styles.bg}
      resizeMode="cover"
    >
      {/* Top Green Bar */}
      <View style={styles.topBar} />


      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/images/back-icon.png')}
            style={styles.backIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Account Creation</Text>
      </View>


      {/* Form Section */}
      <View style={styles.form}>
        <TextInput
          placeholder="Enter Your Full Name"
          placeholderTextColor="#1A781D"
          style={styles.input}
        />
        <TextInput
          placeholder="Enter Your Mobile Number"
          placeholderTextColor="#1A781D"
          style={styles.input}
          keyboardType="numeric"
        />
        <TextInput
          placeholder="Enter Your Email Address"
          placeholderTextColor="#1A781D"
          style={styles.input}
          keyboardType="email-address"
        />
        <TouchableOpacity style={styles.submitBtn}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottom}>
        {/* Logo Section */}
        <Image
          source={require('../../assets/images/logo-1.png')}
          style={styles.logo}
          resizeMode="contain"
        />

        {/* Bottom Green Bar */}
        <View style={styles.bottomBar} />
      </View>

    </ImageBackground>
  )
}

export default CreateAccount

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    width: "100%"
  },
  topBar: {
    backgroundColor: '#1A781D',
    height: 20,
    width: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -60,
    width: '100%',
    position: 'relative',
  },
  backBtn: {
    position: 'absolute',
    left: 20,
  },
  backIcon: {
    width: 40,
    height: 40,
  },
  headerText: {
    fontSize: 22,
    color: '#1A781D',
    fontWeight: '600',
  },
  form: {
    width: '80%',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    backgroundColor: '#F0F0F0',
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 12,
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 14,
    color: '#1A781D',
    elevation: 2,
  },
  submitBtn: {
    backgroundColor: '#1A781D',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 60,
  },
  submitText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  logo: {
    width: 180,
    height: 60,
    marginBottom: 10,
  },
  bottom: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },
  bottomBar: {
    backgroundColor: '#1A781D',
    height: 40,
    width: '100%',
  },
})