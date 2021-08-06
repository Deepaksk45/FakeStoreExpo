import React, { useRef, useState } from "react";
import {
  Alert,
  LayoutAnimation,
  TouchableOpacity,
  Dimensions,
  Image,
  UIManager,
  StyleSheet,
  ScrollView,
  Text,
  View,
  ImageSourcePropType,
  TextInput,
  TextInputProps,
} from "react-native";
import { Input, Button, Icon, InputProps } from "react-native-elements";
const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;
import { LinearGradient } from "../../../components";

const Login = () => {
  const [isLoading, setLoading] = useState(false);
  const [selectedType, setSelectedType] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [validEmail, setEmailValid] = useState(true);
  const [validPassword, setPasswordValid] = useState(true);
  const [validUsername, setUsernameValid] = useState(true);
  const [validConfirmationPassword, setConfirmationPasswordValid] =
    useState(true);
  let emailInput = useRef("");
  let passwordInput = useRef("");
  let confirmationPasswordInput = useRef("");
  let usernameInput = useRef("");

  const validateUsername = () => {
    const usernameCheck = username.length > 0;
    LayoutAnimation.easeInEaseOut();
    setUsernameValid(usernameCheck);
    usernameCheck || usernameInput.shake();
    return usernameCheck;
  };

  const validateEmail = () => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const emailCheck = re.test(email);
    LayoutAnimation.easeInEaseOut();
    setEmailValid(emailCheck);
    emailCheck || emailInput.shake();
    return emailCheck;
  };

  const validatePassword = () => {
    const passwordCheck = password.length >= 8;
    LayoutAnimation.easeInEaseOut();
    setPasswordValid(passwordCheck);
    passwordCheck || passwordInput.shake();
    return passwordCheck;
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.signUpText}>Sign up</Text>
      <Text style={styles.whoAreYouText}>WHO YOU ARE ?</Text>
      <View style={{ width: "80%", marginLeft: "auto", marginRight: "auto" }}>

      </View>
      <Button
        loading={isLoading}
        title="SIGNUP"
        containerStyle={{ flex: -1, marginLeft: "auto", marginRight: "auto" }}
        buttonStyle={styles.signUpButton}
        // linearGradientProps={{
        //   colors: ["#FF9800", "#F44336"],
        //   start: [1, 0],
        //   end: [0.2, 0],
        // }}
        // ViewComponent={LinearGradient}
        titleStyle={styles.signUpButtonText}
        onPress={() => {
          signup();
        }}
        disabled={isLoading}
      />
      <View style={styles.loginHereContainer}>
        <Text style={styles.alreadyAccountText}>Already have an account.</Text>
        <Button
          title="Login here"
          titleStyle={styles.loginHereText}
          containerStyle={{ flex: -1 }}
          buttonStyle={{ backgroundColor: "transparent" }}
          onPress={() => Alert.alert("🔥", "You can login here")}
        />
      </View>
    </ScrollView>
  );
};

export const FormInput = (props) => {
  const { icon, refInput, ...otherProps } = props;

  return (
    <Input
      {...otherProps}
      ref={refInput}
      inputContainerStyle={styles.inputContainer}
      leftIcon={
        <Icon name={icon} type={"simple-line-icon"} color="#7384B4" size={18} />
      }
      inputStyle={styles.inputStyle}
      autoFocus={false}
      autoCapitalize="none"
      keyboardAppearance="dark"
      errorStyle={styles.errorInputStyle}
      autoCorrect={false}
      blurOnSubmit={false}
      placeholderTextColor="#7384B4"
    />
  );
};

const signup = () => {
  LayoutAnimation.easeInEaseOut();
  const usernameValid = validateUsername();
  const emailValid = validateEmail();
  const passwordValid = validatePassword();
  const confirmationPasswordValid = validateConfirmationPassword();
  if (
    emailValid &&
    passwordValid &&
    confirmationPasswordValid &&
    usernameValid
  ) {
    setLoading(true);
    setTimeout(() => {
      LayoutAnimation.easeInEaseOut();
      setLoading(false);
      Alert.alert("🎸", "You rock");
    }, 1500);
  }
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingBottom: 20,
    paddingTop: 20,
    backgroundColor: "#293046",
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    alignItems: "center",
    justifyContent: "space-around",
  },
  signUpText: {
    color: "white",
    fontSize: 28,
    fontFamily: "UbuntuLight",
    textAlign: "center",
  },
  whoAreYouText: {
    color: "#7384B4",
    fontFamily: "UbuntuBold",
    fontSize: 14,
    textAlign: "center",
  },
  userTypesContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: SCREEN_WIDTH,
    alignItems: "center",
  },
  userTypeItemContainer: {
    alignItems: "center",
    justifyContent: "center",
    opacity: 0.5,
  },
  userTypeItemContainerSelected: {
    opacity: 1,
  },
  userTypeMugshot: {
    margin: 4,
    height: 70,
    width: 70,
  },
  userTypeMugshotSelected: {
    height: 100,
    width: 100,
  },
  userTypeLabel: {
    color: "yellow",
    fontFamily: "UbuntuBold",
    fontSize: 11,
  },
  inputContainer: {
    paddingLeft: 8,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: "rgba(110, 120, 170, 1)",
    height: 45,
    marginVertical: 10,
  },
  inputStyle: {
    flex: 1,
    marginLeft: 10,
    color: "white",
    fontFamily: "UbuntuLight",
    fontSize: 16,
  },
  errorInputStyle: {
    marginTop: 0,
    textAlign: "center",
    color: "#F44336",
  },
  signUpButtonText: {
    fontFamily: "UbuntuBold",
    fontSize: 13,
  },
  signUpButton: {
    width: 250,
    borderRadius: Math.round(45 / 2),
    height: 45,
  },
  loginHereContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  alreadyAccountText: {
    fontFamily: "UbuntuLightItalic",
    fontSize: 12,
    color: "white",
  },
  loginHereText: {
    color: "#FF9800",
    fontFamily: "UbuntuLightItalic",
    fontSize: 12,
  },
});

export default Login;
