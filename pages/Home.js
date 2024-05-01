import React from 'react';
import { StyleSheet, SafeAreaView, View,Image, TouchableOpacity, TextInput, Text } from 'react-native';

const Home = () => {
  // Sample data of images, replace it with your actual data
  const imagesData = [
    { id: 1, source: require('../assets/home/Rectangle1.png') },
    { id: 2, source: require('../assets/home/Rectangle1.png') },
    { id: 3, source: require('../assets/home/Rectangle1.png') },
    { id: 4, source: require('../assets/home/Rectangle1.png') },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.gridContainer}>
        {imagesData.map(image => (
          <TouchableOpacity key={image.id} style={styles.imageContainer}>
            <Image source={image.source} style={styles.image} resizeMode="cover" />
            <Text>Everything is Okay</Text>
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Enter your text here" />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff', // Change the background color as needed
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  imageContainer: {
    width: '48%', // Adjust the width as needed to fit 2 columns
    aspectRatio: 1, // Maintain aspect ratio
    marginBottom: 10,
  },
  image: {
    flex: 1,
    borderRadius: 10,
  },
  inputContainer: {
    marginTop: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: 'blue', // Change the button color as needed
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff', // Change the button text color as needed
    fontWeight: 'bold',
  },
});

export default Home;
