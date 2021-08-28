import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
// import { Login, Signup, Home } from "./src/screens";

import { Provider } from "react-redux";
import { store } from "./src/redux";
import Routes from "./src/routes";

export default function App() {
  const [index, setindex] = useState(undefined);
  return (
    <>
      <Provider store={store}>
        <Routes />
      </Provider>
    </>
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
