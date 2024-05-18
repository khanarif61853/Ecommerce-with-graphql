import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  ToastAndroid,
} from "react-native";
import React, { useState } from "react";
import Style from "../styles/Style";

const Product = ({route:{params}}) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <View style={{ flex: 1 }}>
      <View style={Style.HomeHeader}>
        <Text style={Style.HomeHeaderText}>Product</Text>
      </View>
      <ScrollView>
      <View style={{ alignItems: "center" }}>
        <Image
          source={{uri:params?.goTo?.node?.featuredImage?.url}}
          style={{ width: "80%", height: 300 }}
        />
      </View>
      <View style={{ paddingHorizontal: 10 }}>
        <Text style={Style.productPageTitle}>{params?.goTo?.node?.title}</Text>
        <Text style={Style.productPageDesc}>
        {params?.goTo?.node?.description}
        </Text>
        <Text style={Style.productPagePrice}>

            ${params?.goTo?.node?.variants?.edges[0]?.node?.price?.amount ?
        params?.goTo?.node?.variants?.edges[0]?.node?.price?.amount : '500.00'    
        }
          {/* $500.00 */}
        </Text>
        <View
          style={Style.productPageVariant}
        >
          <TouchableOpacity
            activeOpacity={1}
            onPress={decrement}
            style={Style.decrementButton}
          >
            <Text style={Style.buttonText}>-</Text>
          </TouchableOpacity>
          <Text
            style={Style.Count}
          >
            {count}
          </Text>
          <TouchableOpacity
            activeOpacity={1}
            onPress={increment}
            style={Style.incrementButton}
          >
            <Text style={Style.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => ToastAndroid.show("Add to cart", ToastAndroid.SHORT)}
          style={Style.productPageAddtoCartView}
        >
          <Text
            style={Style.productPageAddToCart}
          >
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    </View>
  );
};

export default Product;
