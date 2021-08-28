import React from "react";
import { Button, Text, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/core";
// import { connect } from 'react-redux';

import { Container } from "./style";
export default () => {
  const { params } = useRoute();
  const navigation = useNavigation();
  return (
    <Container>

      <Text>Home Screen</Text>

      <Button
        title="Login screen"
        onPress={() => navigation.replace("Login")}
      />
    </Container>
  );
};
