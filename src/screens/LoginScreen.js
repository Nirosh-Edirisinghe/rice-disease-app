import { View, Text, Button, StyleSheet } from 'react-native'
import React from 'react'

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <Button title="Back to Login" onPress={() => navigation.goBack()} />
        
        <Button
        title="Create Account"
        onPress={() => navigation.replace('Home')}
      />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center' },
  title: { fontSize:24, marginBottom:20 }
})