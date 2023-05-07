import React from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function LoginScreen() {
  return (
    <View style={styles.form}>
      <Text style={styles.title}>Войти</Text>
      <View>
        <TextInput style={styles.input} textAlign={"left"} placeholder="e-mail@example.com" />
      </View>
      <View style={{ marginTop: 20 }}>
         <TextInput
          style={styles.input}
          textAlign={"center"}
          secureTextEntry={true}
        />
      </View>
      <Button title="SIGN IN" />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 32,
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    fontWeight: 500
  },
  input: {
    paddingLeft: 16,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    height: 50,
    borderRadius: 8,
    color: "#F6F6F6",
  },

  form: {
    marginHorizontal: 16,
  },

  inputTitle: {
    color: "#f0f8ff",
    marginBottom: 10,
    fontSize: 18,
  },
});
