import React from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
import LoginScreen from "./Screens/LoginScreen";
import RegistrationScreen from "./Screens/RegistrationScreen";

export default App = () => (
  <View style={styles.container}>
  <ImageBackground
    style={styles.image}
    source={require("./assets/images/bg-image.jpg")}
  >
    <RegistrationScreen />
  </ImageBackground>
  
</View>

);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
});