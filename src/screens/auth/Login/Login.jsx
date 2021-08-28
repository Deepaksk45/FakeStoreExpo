import React from "react";
import { Button, Text, View } from "react-native";

import { useNavigation, useRoute } from "@react-navigation/core";
// import { connect } from 'react-redux';

export default () => {
  const { params } = useRoute();
  const navigation = useNavigation();
  return (
    <View>
      <Text>Login Screen</Text>
      <Button title="Home screen" onPress={() => navigation.replace("Home")} />
    </View>
  );
};
