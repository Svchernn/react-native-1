import React, { useState, useCallback } from "react";
import {
  StyleSheet,
  ImageBackground,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";


SplashScreen.preventAutoHideAsync();

const initialState = {
  email: "",
  password: "",
};

export default function LoginScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);
  const [focused, setFocused] = useState("");

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
   
  };

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("../assets/fonts/Roboto-Regular.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container} onLayout={onLayoutRootView}>
        <ImageBackground
          style={styles.image}
          source={require("../assets/images/bg-image.jpg")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : ""}
          >
            <View style={styles.formContainer}>
              <View
                style={{
                  ...styles.form,
                  marginBottom: isShowKeyboard ? 32 : 111,
                }}
              >
                
                <Text style={styles.formTitle}>Log in</Text>
                
                <View style={{marginBottom: 16,}}>
                  <TextInput
                    style={{
                      ...styles.input,
                      borderColor: focused == "email" ? "#FF6C00" : "#E8E8E8",
                    }}
                    placeholder="Email"
                    onFocus={() => {
                      setIsShowKeyboard(true);
                      setFocused("email");
                    }}
                    onBlur={() => setFocused("")}
                    value={state.email}
                    onChangeText={(value) =>
                      setState((prevState) => ({ ...prevState, email: value }))
                    }
                  />
                </View>
                <View>
                  <TextInput
                    onFocus={() => {
                      setIsShowKeyboard(true);
                      setFocused("password");
                    }}
                    style={{
                      ...styles.input,
                      borderColor:
                        focused == "password" ? "#FF6C00" : "#E8E8E8",
                    }}
                    placeholder="Password"
                    secureTextEntry={true}
                    onBlur={() => setFocused("")}
                    value={state.password}
                    onChangeText={(value) =>
                      setState((prevState) => ({
                        ...prevState,
                        password: value,
                      }))
                    }
                  />
                  <Text style={styles.showPassword}>Show</Text>
                </View>

                {!isShowKeyboard && (
                  <TouchableOpacity
                    activeOpacity={0.8}
                    style={styles.btn}
                    onPress={() => {keyboardHide;
                    setState(initialState);}}
                  >
                    {!isShowKeyboard && (
                      <Text style={styles.titleBtn}>Log in</Text>
                    )}
                  </TouchableOpacity>
                )}

                {!isShowKeyboard && (
                  <TouchableOpacity activeOpacity={0.8}>
                    <Text style={styles.link}>
                    Need an account? Registration
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },

  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  formContainer: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    backgroundColor: "#FFFFFF",
  },

  imgContainer: {
    position: "absolute",
    bottom: "88%",
    right: "35%",
    borderRadius: 16,
    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
  },


  formTitle: {
    marginTop: 33,
    marginBottom: 31,
    color: "#212121",
    textAlign: "center",
    fontSize: 30,
    fontFamily: "Roboto-Regular",
    fontWeight: 500,
  },

  input: {
    paddingLeft: 16,
    height: 50,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    backgroundColor: "#F6F6F6",
    borderRadius: 8,
    textAlign: "left",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    fontWeight: 400,
  },

  showPassword: {
    position: "absolute",
    top: "30%",
    left: "85%",
    fontSize: 16,
    color: "#1B4371",
  },

  form: {
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFFFFF",
    marginHorizontal: 16,
  },

  btn: {
    marginTop: 43,
    height: 50,
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    paddingHorizontal: 32,
    paddingVertical: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  titleBtn: {
    color: "#FFFFFF",
    fontWeight: 400,
    fontSize: 16,
  },
  link: {
    marginTop: 16,
    textAlign: "center",
    color: "#1B4371",
    fontWeight: 400,
    fontSize: 16,
  },
});
