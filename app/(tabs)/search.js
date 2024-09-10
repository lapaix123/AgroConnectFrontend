import React, { useState, useEffect } from "react";
import { Image, TextInput, TouchableOpacity, FlatList, View, Text, Alert } from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";
import { useGoBack } from "@/hooks/useGoback";

const SearchPost = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const goBack = useGoBack();

  // Fetch data from an API or local source
  useEffect(() => {
    // Replace with your actual API call or data fetching logic
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=30"); // Example API
        const data = await response.json();
        setPosts(data);
        setFilteredPosts(data); // Initially set filtered posts to all posts
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  // Handle search
  const handleSearch = (text) => {
    setSearchQuery(text);
    const filteredData = posts.filter((item) =>
      item.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredPosts(filteredData);
  };

  const renderPost = ({ item }) => (
    <TouchableOpacity
      style={{
        flex: 1,
        margin: 5,
        backgroundColor: 'green',
        borderRadius: 10,
        overflow: 'hidden',
        elevation: 2,
      }}
      onPress={() => Alert.alert("Post Selected", `Post ID: ${item.id}`)}
    >
      <Image source={{ uri: item.thumbnailUrl }} style={{ height: 150, width: '100%' }} resizeMode="cover" />
    </TouchableOpacity>
  );

  return (
    <View style={{ flex: 1, padding: 10, backgroundColor: '#f8f8f8' }}>
      <TouchableOpacity
        style={{
          backgroundColor: '#fff',
          borderRadius: 25,
          height: 50,
          width: 50,
          justifyContent: 'center',
          alignItems: 'center',
          marginVertical: 20,
        }}
        onPress={goBack}
      >
        <AntDesign name="left" size={24} color="#026338" />
      </TouchableOpacity>

      <TextInput
        style={{
          borderColor: '#ddd',
          borderWidth: 1,
          borderRadius: 8,
          padding: 10,
          marginBottom: 15,
          backgroundColor: '#fff',
        }}
        placeholder="Search for posts or videos..."
        value={searchQuery}
        onChangeText={handleSearch}
      />

      <FlatList
        data={filteredPosts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3} // This creates the grid layout with 3 columns
        columnWrapperStyle={{ justifyContent: 'space-between' }}
      />
    </View>
  );
};

export default SearchPost;
