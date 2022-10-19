import { View, Text, TextInput } from "react-native";
import { Formik } from "formik";
import React from "react";
import CustomButton from "./CustomButton";
import axios from "axios";
import * as Device from "expo-device";
import { BASE_URL } from "@env";

export default function Register({ navigation }) {
  return (
    <Formik
      initialValues={{ email: "", password: "", names: "" }}
      onSubmit={(values, { resetForm }) => {
        if (
          values.names !== "" &&
          values.email !== "" &&
          values.password !== ""
        ) {
          axios
            .post(`${BASE_URL}/api/register`, {
              email: values.email,
              password: values.password,
              names: values.names,
              deviceName: Device.designName,
            })
            .then((response) => {
              if (response.status === 200) {
                alert("User registered!");
                resetForm();
              }
            })
            .catch((error) => console.log(error.message));
        }
      }}
    >
      {({ handleChange, handleBlur, handleSubmit, values }) => (
        <View
          style={{
            flex: 1,
            padding: 30,
            alignItems: "center",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              width: "90%",
            }}
          >
            <Text
              style={{ fontSize: 30, fontWeight: "bold", marginBottom: 10 }}
            >
              REGISTER
            </Text>
            <Text
              style={{
                alignSelf: "flex-start",
                fontSize: 18,
                fontWeight: "bold",
                marginBottom: 10,
              }}
            >
              Names
            </Text>
            <TextInput
              onChangeText={handleChange("names")}
              onBlur={handleBlur("names")}
              value={values.names}
              placeholder="John Doe"
              style={{
                fontSize: 18,
                marginBottom: 5,
                borderWidth: 1,

                padding: 10,
                borderRadius: 5,
                borderColor: "#ddd",
                width: "100%",
              }}
            />

            <Text
              style={{
                alignSelf: "flex-start",
                fontSize: 18,
                fontWeight: "bold",
                marginBottom: 10,
              }}
            >
              Email
            </Text>
            <TextInput
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
              placeholder="johndoe@gmail.com"
              style={{
                fontSize: 18,
                marginBottom: 5,
                borderWidth: 1,

                padding: 10,
                borderRadius: 5,
                borderColor: "#ddd",
                width: "100%",
              }}
            />
            <Text
              style={{
                alignSelf: "flex-start",
                fontSize: 18,
                fontWeight: "bold",
                marginBottom: 10,
              }}
            >
              Password
            </Text>
            <TextInput
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
              placeholder="********"
              textContentType="password"
              secureTextEntry={true}
              style={{
                fontSize: 18,
                marginBottom: 5,
                borderWidth: 1,

                padding: 10,
                borderRadius: 5,
                borderColor: "#ddd",
                width: "100%",
              }}
            />
            <CustomButton
              bg="#fff"
              color="#5486b4"
              text="Register"
              onPress={handleSubmit}
            />
            <CustomButton
              bg="#5486b4"
              color="#fff"
              text="Login"
              onPress={() => navigation.navigate("Home")}
            />
          </View>
        </View>
      )}
    </Formik>
  );
}
