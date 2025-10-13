import { View, Text, Button, TextInput, TouchableOpacity, ImageBackground, StyleSheet, Image } from 'react-native'
import React from 'react'

const LoginScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../assets/images/bg-image.png')}
      style={styles.bg}
      resizeMode="cover"
    >
      <View style={styles.container}>
        {/* <Text style={styles.title}>CROP{"\n"}ANALYZER</Text> */}

        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.subtitle}>Product by CODEGREEN</Text>

        <TextInput placeholder="Enter User Name" style={styles.input} placeholderTextColor="#555" />
        <TextInput placeholder="Enter User Password" secureTextEntry style={styles.input} placeholderTextColor="#555" />

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomSection}>
        <Image
          source={require('../../assets/images/login-home.png')}
          style={styles.bottomImage}
          resizeMode="contain"
        />
        <TouchableOpacity style={styles.bottomBar} onPress={() => navigation.navigate('CreateAccount')}>
          <Text style={styles.bottomText}>Create New Account</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  bg: { flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%' },
  container: { flex: 1, width: '100%', alignItems: 'center', justifyContent: 'flex-start', position: 'relative', paddingTop: 150, },
  title: { fontSize: 36, fontWeight: 'bold', color: '#1A781D', textAlign: 'center' },
  subtitle: { fontSize: 12, color: '#1A781D', marginBottom: 50 },
  logo: { width: 200, height: 80, marginBottom: 10, },
  input: {
    width: '70%',
    backgroundColor: '#F0F0F0',
    borderRadius: 15,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 15,
    elevation: 2,
  },
  loginBtn: {
    backgroundColor: '#1A781D',
    paddingVertical: 12,
    paddingHorizontal: 50,
    borderRadius: 25,
    marginTop: 10,
  },
  loginText: { color: '#fff', fontSize: 18, fontWeight: '600' },
  bottomSection: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    alignItems: 'center',
  },
  bottomImage: { width: '100%', height: 120 },
  bottomBar: {
    backgroundColor: '#1A781D',
    width: '100%',
    paddingVertical: 15,
    alignItems: 'center',
  },
  bottomText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },

})