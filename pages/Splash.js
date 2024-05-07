import React, { useEffect } from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();

  // This useEffect hook will navigate to the Home screen after 2 seconds (for demonstration purposes)
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home'); // Navigate to the Home screen
    }, 10000); // 10000 milliseconds = 10 seconds
    return () => clearTimeout(timer);
  }, []); // Only run this effect once after the component mounts

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/Logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.text}>We Hear You</Text>
      {/* Optional: You can also add a button to navigate to Home */}
      {/* <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity> */}
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
    fontSize: 40, // Adjust the font size as needed
    textAlign: 'center',
  },
  buttonText: {
    marginTop: 20,
    fontSize: 20,
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default SplashScreen;
