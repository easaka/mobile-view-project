import React from 'react';
import { StyleSheet, SafeAreaView, View, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
  const navigation = useNavigation();

  // Sample data of images, replace it with your actual data
  const imagesData = [
    { id: 1, source: require('../assets/home/Rectangle1.png'),text:"Everything is Okay" },
    { id: 2, source: require('../assets/home/Rectangle2.png'),text:"I don't know" },
    { id: 3, source: require('../assets/home/Rectangle3.png'),text:"Everything is fine" },
    { id: 4, source: require('../assets/home/Rectangle4.png'),text:"Point of Objection" },
  ];

  const handleTranslatePress = () => {
    navigation.navigate('Translate'); // Navigate to the Translate screen
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Common Sign Language</Text>
      <View style={styles.gridContainer}>
        {imagesData.map(image => (
          <TouchableOpacity key={image.id} style={styles.imageContainer}>
            <Image source={image.source} style={styles.image} resizeMode="cover" />
            <Text> {image.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity style={styles.translateButton} onPress={handleTranslatePress}>
        <Text style={styles.translateButtonText}>Translate to Word</Text>
      </TouchableOpacity>
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
  translateButton: {
    backgroundColor: 'blue', // Change the button color as needed
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 20,
  },
  translateButtonText: {
    color: '#fff', // Change the button text color as needed
    fontWeight: 'bold',
    fontSize: 18,
  },
  text:{
    fontWeight: 'bold',
    fontSize: 18,
    margin: 12
  }
});

export default Home;
