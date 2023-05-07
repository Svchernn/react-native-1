import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";

import * as Font from 'expo-font';


const initialState = {
  login: "",
  email: "",
  password: "",
};

export default function RegistrationScreen() {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [state, setState] = useState(initialState);

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
    setState(initialState);
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : ""}
        >
          <View
            style={{ ...styles.form, marginBottom: isShowKeyboard ? 32 : 78 }}
          >
            <Text style={styles.formTitle}>Регистрация</Text>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Login"
                onFocus={() => setIsShowKeyboard(true)}
                value={state.login}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, login: value }))
                }
              />
            </View>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Email"
                onFocus={() => setIsShowKeyboard(true)}
                value={state.email}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, email: value }))
                }
              />
            </View>
            <View>
              <TextInput
                style={styles.input}
                placeholder="Password"
                secureTextEntry={true}
                onFocus={() => setIsShowKeyboard(true)}
                value={state.password}
                onChangeText={(value) =>
                  setState((prevState) => ({ ...prevState, password: value }))
                }
              />
            </View>
            <TouchableOpacity
              activeOpacity={0.8}
              style={styles.btn}
              onPress={keyboardHide}
            >
              <Text style={styles.titleBtn}>Зарегистрироваться</Text>
            </TouchableOpacity>
            <Text
              style={{
                ...styles.link,
                display: isShowKeyboard ? "none" : "flex",
              }}
            >
              Уже есть аккаунт? Войти
            </Text>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderRadius: 25,
  },
  formTitle: {
    marginBottom: 33,
    color: "#212121",
  },
  input: {
    marginBottom: 16,
    height: 50,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    color: "#F6F6F6",
    borderRadius: 8,
    textAlign: "center",
  },

  form: {
    marginHorizontal: 16,
    borderRadius: 25,
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
  },
  link: {
    color: "#1B4371",
  },
});
