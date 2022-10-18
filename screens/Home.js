import { View, Text } from "react-native";
import React from "react";
import Login from "../components/Login";
import { StatusBar } from "expo-status-bar";

export default function Home({navigation}) {
  return (
    <View style={{ flex: 1 }}>
    <StatusBar backgroundColor="transparent" style="light" />
      <View
        style={{
          backgroundColor: "#5486b4",
          width: "100%",
          height: 60,
        }}
      />
      <Login navigation={navigation} />
    </View>
  );
}
