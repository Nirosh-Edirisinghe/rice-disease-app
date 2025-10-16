import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ImageBackground} from 'react-native'
import React from 'react'

const OTPVerification = ({ navigation }) => {
  return (
    <ImageBackground
      source={require('../../assets/images/bg-image.png')}
      style={styles.bg}
      resizeMode="cover"
    >
      {/* Top Green Bar */}
      <View style={styles.topBar} />

      {/* Header Row: Back Button + Title */}
      <View style={styles.headerRow}>
        <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/images/back-icon.png')}
            style={styles.backIcon}
            resizeMode="contain"
          />
        </TouchableOpacity>
        <Text style={styles.title}>OTP Verification</Text>
        {/* Spacer to balance alignment */}
        <View style={{ width: 35 }} />
      </View>

      {/* OTP Input */}
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="OTP Number"
          placeholderTextColor="#1A781D"
          keyboardType="numeric"
          style={styles.input}
        />
      </View>

      {/* Verify Button */}
      <TouchableOpacity style={styles.verifyBtn}>
        <Text style={styles.verifyText}>Verify</Text>
      </TouchableOpacity>

      {/* Info Text */}
      <Text style={styles.infoText}>
        If the OTP Number not received, please try again in a few minutes.
      </Text>

      {/* Bottom Section */}
      <View style={styles.bottom}>
        <Image
          source={require('../../assets/images/logo-1.png')} 
          style={styles.bottomLogo}
          resizeMode="contain"
        />
        <View style={styles.bottomBar} />
      </View>
    </ImageBackground>
  )
}

export default OTPVerification

const styles = StyleSheet.create({
 bg: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
    backgroundColor: '#fff',
  },
  topBar: {
    backgroundColor: '#1A781D',
    height: 20,
    width: '100%',
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
    fontSize: 20,
    color: '#1A781D',
    fontWeight: '600',
    textAlign: 'center',
    flex: 1,
  },
  inputContainer: {
    width: '80%',
    marginTop: 80,
    borderRadius: 15,
    backgroundColor: '#F0F0F0',
    elevation: 2,
  },
  input: {
    paddingHorizontal: 20,
    paddingVertical: 12,
    textAlign: 'center',
    fontSize: 16,
    color: '#1A781D',
  },
  verifyBtn: {
    backgroundColor: '#1A781D',
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 60,
    marginTop: 30,
  },
  verifyText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  infoText: {
    marginTop: 20,
    fontSize: 13,
    color: '#1A781D',
    textAlign: 'center',
    width: '70%',
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    alignItems: 'center',
    width: '100%',
  },
  bottomLogo: {
    width: 180,
    height: 60,
    marginBottom: 5,
  },
  bottomBar: {
    backgroundColor: '#1A781D',
    height: 40,
    width: '100%',
  },
})