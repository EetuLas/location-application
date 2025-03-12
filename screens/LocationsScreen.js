import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from "react-native";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { db } from "../firebaseConfig";

const LocationsScreen = () => {
  const [locations, setLocations] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "locations"));
        const locationsList = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setLocations(locationsList);
      } catch (error) {
        console.error("Error fetching locations: ", error);
      }
    };
    fetchLocations();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity 
        style={styles.addButton} 
        onPress={() => navigation.navigate("Add Location")}
      >
        <Text style={styles.addButtonText}>Add new location</Text>
      </TouchableOpacity>

      <FlatList
        data={locations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.locationCard}>
            <Text style={styles.locationTitle}>{item.name}</Text>
            <Text style={styles.locationDescription}>{item.description}</Text>
            <Text style={styles.locationRating}>⭐ {item.rating}/5</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  addButton: { backgroundColor: "purple", padding: 10, borderRadius: 10, marginBottom: 10 },
  addButtonText: { color: "white", textAlign: "center", fontWeight: "bold" },
  locationCard: { backgroundColor: "#fff", padding: 15, borderRadius: 10, marginVertical: 5, elevation: 2 },
  locationTitle: { fontSize: 18, fontWeight: "bold" },
  locationDescription: { fontSize: 14, color: "gray" },
  locationRating: { fontSize: 16, color: "#FFD700", fontWeight: "bold" },
});

export default LocationsScreen;