import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/splash.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.text}>We Hear You</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff', // Change the background color as needed
  },
  logo: {
    width: '80%', // Adjust the width as needed
    height: '50%', // Adjust the height as needed
    marginBottom: 20,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20, // Adjust the font size as needed
    textAlign: 'center',
  },
});

export default SplashScreen;
