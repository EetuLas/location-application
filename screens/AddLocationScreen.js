import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { db } from "../firebaseConfig";

const AddLocationScreen = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);
  const navigation = useNavigation();

  const addLocation = async () => {
    if (!name || !description || rating === 0) {
      Alert.alert("Error", "Please fill in all fields and select a rating.");
      return;
    }

    try {
      await addDoc(collection(db, "locations"), {
        name,
        description,
        rating,
      });
      Alert.alert("Success", "Location added successfully!");
      navigation.goBack();
    } catch (error) {
      console.error("Error adding location: ", error);
      Alert.alert("Error", "Could not add location.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name</Text>
      <TextInput 
        style={styles.input} 
        value={name} 
        onChangeText={setName} 
        placeholder="Enter location name" 
      />

      <Text style={styles.label}>Description</Text>
      <TextInput 
        style={styles.input} 
        value={description} 
        onChangeText={setDescription} 
        placeholder="Enter description" 
      />

      <Text style={styles.label}>Rating</Text>
      <View style={styles.ratingContainer}>
        {[1, 2, 3, 4, 5].map((star) => (
          <TouchableOpacity key={star} onPress={() => setRating(star)}>
            <Text style={[styles.star, rating >= star && styles.selectedStar]}>★</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.addButton} onPress={addLocation}>
        <Text style={styles.addButtonText}>Add new location</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  label: { fontSize: 16, fontWeight: "bold", marginTop: 10 },
  input: { borderWidth: 1, borderColor: "#ccc", padding: 10, borderRadius: 5, marginTop: 5 },
  ratingContainer: { flexDirection: "row", marginVertical: 10 },
  star: { fontSize: 30, color: "gray", marginRight: 5 },
  selectedStar: { color: "#FFD700" },
  addButton: { backgroundColor: "purple", padding: 10, borderRadius: 10, marginTop: 20 },
  addButtonText: { color: "white", textAlign: "center", fontWeight: "bold" },
});

export default AddLocationScreen;
