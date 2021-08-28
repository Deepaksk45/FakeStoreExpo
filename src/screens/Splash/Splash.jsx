import React from "react";
import { Button, SafeAreaView, Text, View, Platform } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/core";
// import { connect } from 'react-redux';

export default () => {
  const { params } = useRoute();
  const navigation = useNavigation();
  return (
    <View
      style={{
        // flex: 1,
        // backgroundColor: "gray",
        // paddingTop: Platform.OS === "android" ? 25 : 0,
      }}
    >
      <Text>Splash Screen</Text>
      <Button
        title="jkfgjjddj screen"
        onPress={() => navigation.replace("Login")}
      />
    </View>
  );
};
