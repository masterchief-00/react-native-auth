import { View, Text, Button, TextInput } from "react-native";
import { Formik } from "formik";
import React from "react";
import CustomButton from "./CustomButton";
import axios from "axios";
import { BASE_URL } from "@env";

export default function Login({ navigation }) {
  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      onSubmit={(values, { resetForm }) => {
        if (values.email !== "" && values.password !== "") {
          axios
            .post(`${BASE_URL}/api/login`, {
              email: values.email,
              password: values.password,
            })
            .then((response) => {
              if (response.status === 200) {
                alert("Login successful!");
                resetForm();
              }
            })
            .catch((error) => console.log(error));
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
              LOGIN
            </Text>
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
              bg="#5486b4"
              color="#fff"
              text="Login"
              onPress={handleSubmit}
            />
            <CustomButton
              bg="#fff"
              color="#5486b4"
              text="Register"
              onPress={() => navigation.navigate("Register")}
            />
          </View>
        </View>
      )}
    </Formik>
  );
}
