import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  ActivityIndicator,
  TouchableOpacity,
  View,
  Platform,
  StatusBar,
} from "react-native";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";

import {
  selectedProduct,
  removeSelectedProduct,
} from "../../redux/actions/productActions";
export default () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [loaded, setLoaded] = useState(false);
  const {
    params: { productId },
  } = useRoute();

  const product = useSelector((state) => state.product);
  const { image, title, price, category, description } = product;

  const fetchProductDetail = async (id) => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .catch((err) => {
        console.log("Error", err);
      });
    setLoaded(true);
    dispatch(selectedProduct(response.data));
  };

  useEffect(() => {
    if (productId && productId !== "") fetchProductDetail(productId);
    return () => {
      console.log("removed");
      dispatch(removeSelectedProduct());
    };
  }, [productId]);

  console.log(product);
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
      }}
    >
      {!loaded ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <View>
          <View
            style={{
              // display:"flex",
              // justifyContent:"center",
              alignItems: "center",
              // flexDirection:"row",
              // flex:1
              padding: 20,
            }}
          >
            <Image
              source={{ uri: image }}
              style={{
                width: "55%",
                height: "70%",

                resizeMode: "stretch",
                borderRadius: 8,
              }}
            />
          </View>

          {/* <Container> */}
          {/* <FlatList
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
            console.log(product);
            const { id, title, image, category, price, description } =
              product.item;
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("Product", {
                    id: id,
                    title: title,
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
        /> */}

          <Text>Product Listing Screen</Text>

          {/* </Container> */}
        </View>
      )}
    </SafeAreaView>
  );
};
