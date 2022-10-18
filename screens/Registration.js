import { View, Text } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import Register from "../components/Register";

export default function Registration({navigation}) {
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
      <Register navigation={navigation} />
    </View>
  )
}