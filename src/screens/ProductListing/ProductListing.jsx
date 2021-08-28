import React, { useEffect, useState } from "react";
import {
  Button,
  FlatList,
  Image,
  Platform,
  SafeAreaView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/core";
import axios from "axios";
import { setProducts } from "../../redux/actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "./style";

export default () => {
  const { params } = useRoute();
  const navigation = useNavigation();
  const [loaded, setLoaded] = useState(false);
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();
  const fatchProducts = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Err", err);
      });
    // console.log(response.data);
    dispatch(setProducts(response.data));
    setLoaded(true);
  };

  useEffect(() => {
    fatchProducts();
  }, []);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      <View>
        {/* <Container> */}
        <FlatList
          style={{
            // flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            // alignItems: "space-between",
            // paddingHorizontal: 10,
          }}
          scrollToOverflowEnabled={false}
          data={products}
          keyExtractor={(product) => product.index}
          key={(product) => product.item.id}
          renderItem={(product) => {
            // console.log(product)
            const { id, title, image, category, price, description } =
              product.item;
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Product", {
                    productId: id,
                    productTitle: title,
                  })
                }
              >
                <View
                  style={{
                    // flex:1,
                    flexDirection: "row",
                    justifyContent: "flex-start",
                    height: 200,
                    // backgroundColor: "blue",
                    marginBottom: 10,
                    // borderColor: "black",
                    borderWidth: 1,
                    paddingHorizontal: 8,
                    paddingVertical: 10,
                    borderRadius: 10,
                    shadowOpacity: 0.9,
                    shadowRadius: 44,
                    shadowOffset: {
                      height: 5,
                      width: 5,
                    },
                    backgroundColor: "#fff",
                  }}
                >
                  <View>
                    <Image
                      source={{ uri: image }}
                      style={{
                        width: 120,
                        height: 180,

                        resizeMode: "stretch",
                        borderRadius: 8,
                      }}
                    />
                  </View>
                  <View
                    style={{
                      flexDirection: "column",
                      flexWrap: "wrap",
                      paddingLeft: 20,
                    }}
                  >
                    <Text>{title}</Text>
                    <Text>{category}</Text>
                    <Text>$ {price}</Text>
                    <Text>{description}</Text>
                  </View>
                </View>
              </TouchableOpacity>
            );
          }}
        />

        <Text>Product Listing Screen</Text>

        <Button
          title="Login sckdjkldjkdfjkkdfllkjklkjjkdfkjdfklreen"
          onPress={() => navigation.replace("Login")}
        />
        {/* </Container> */}
      </View>
    </SafeAreaView>
  );
};
