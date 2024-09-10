import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image, StyleSheet, Alert } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';

const AddPost = ({ navigation }) => {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const selectImage = () => {
    launchImageLibrary({}, (response) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else {
        setImage(response.assets[0].uri);
      }
    });
  };

  const handlePostSubmit = async () => {
    if (!text) {
      Alert.alert('Error', 'Text content is required.');
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('text', text);
      if (image) {
        formData.append('image', {
          uri: image,
          type: 'image/jpeg',
          name: 'photo.jpg',
        });
      }

      const response = await axios.post('http://localhost:8080/api/addPost', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      if (response.data.success) {
        Alert.alert('Success', 'Post created successfully!');
        navigation.navigate('Home'); // Navigate to the home screen or posts list
      } else {
        Alert.alert('Error', response.data.message);
      }
    } catch (error) {
      Alert.alert('Error', 'An error occurred while creating the post.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>What's on your mind?</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Type your post here..."
        value={text}
        onChangeText={setText}
        multiline
      />
      <Button title="Choose an Image (Optional)" onPress={selectImage} />
      {image && <Image source={{ uri: image }} style={styles.image} />}
      <Button title="Post" onPress={handlePostSubmit} disabled={loading} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  textInput: {
    height: 100,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 16,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 16,
    marginBottom: 16,
  },
});

export default AddPost;
