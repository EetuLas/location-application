import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import LocationsScreen from "./screens/LocationsScreen";
import AddLocationScreen from "./screens/AddLocationScreen";
import MapScreen from "./screens/MapScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Locations" component={LocationsScreen} />
        <Tab.Screen name="Add Location" component={AddLocationScreen} />
        <Tab.Screen name="Map" component={MapScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}