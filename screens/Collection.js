import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { useQuery, gql } from "@apollo/client";
import { FlatList } from "react-native-gesture-handler";
import Style from "../styles/Style";

const CollectionProduct = gql`
{
    products(first: 2) {
      edges {
        node {
          id
          title
          description
          featuredImage {
            id
            url
          }
          variants(first: 3) {
            edges {
              node {
                price {
                  amount
                  currencyCode
                }
              }
            }
          }
        }
      }
    }
  }
`;

const Collection = () => {
  const { data } = useQuery(CollectionProduct);
  const navigation = useNavigation();
  return (
    <View style={{ flex: 1 }}>
      <View style={Style.HomeHeader}>
        <Text style={Style.HomeHeaderText}>Collection</Text>
      </View>
      <FlatList
        data={data?.products?.edges}
        renderItem={({ item, index }) => {
          return  (
            <View style={Style.productView}>
              <TouchableOpacity
                activeOpacity={0.9}
                onPress={() => navigation.navigate("Product",{goTo:item})}
                style={Style.productCardView}
              >
                <View style={Style.productImageView}>
                  <Image
                    source={{ uri: item?.node?.featuredImage?.url }}
                    style={Style.productImage}
                  />
                </View>
                <View>
                  <Text style={Style.productTextTitle}>
                    {item?.node?.title}
                  </Text>
                  <Text style={Style.productPrice}>
                    $ {item?.node?.variants?.edges[0]?.node?.price?.amount? item?.node?.variants?.edges[0]?.node?.price?.amount:'500'}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )
        }}
      />
    </View>
  );
};

export default Collection;
