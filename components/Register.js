import { View, Text, Button, TextInput } from "react-native";
import { Formik } from "formik";
import React from "react";
import CustomButton from "./CustomButton";

export default function Register({navigation}) {
  return (
    <Formik
      initialValues={{ email: "", password: "", names: "", address: "" }}
      onSubmit={(values) => console.log(values)}
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
              Address
            </Text>
            <TextInput
              onChangeText={handleChange("address")}
              onBlur={handleBlur("address")}
              value={values.address}
              placeholder="Kimisagara"
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
