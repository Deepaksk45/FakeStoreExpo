import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Badge, Tab, ThemeProvider } from "react-native-elements";
import { Login, Signup, Home } from "./src/screens";

const theme = {
  Avatar: {
    rounded: true,
  },
  Button: {
    titleStyle: {
      color: "red",
    },
  },
};
export default function App() {
  const [index, setindex] = useState(undefined);
  return (
    <ThemeProvider theme={theme}>
      <View style={styles.container}>
        <Login />
      </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
