import {
  View,
  Text,
  Image, 
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useQuery, gql } from "@apollo/client";
import { FlatList } from "react-native-gesture-handler";
import Style from "../styles/Style";
import { useFonts } from "expo-font";

const collections = gql`
  {
    collections(first: 2) {
      edges {
        node {
          title
          description
          image {
            id
            url
          }
        }
      }
    }
  }
`;
const products = gql`
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
          variants(first: 2) {
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

const Home = () => {
    const [loaded] = useFonts({
        Bold: require('../assets/fonts/Poppins-Bold.ttf'),
        Medium: require('../assets/fonts/Poppins-Medium.ttf'),
        Regular: require('../assets/fonts/Poppins-Regular.ttf')
    })
    // if(!loaded){
    //     return null
    // }
  const navigation = useNavigation();
  const { data} = useQuery(collections);
  let productData = useQuery(products);
  productData = productData?.data;

  return (
    <View style={{ flex: 1 }}>
      <View
        style={Style.HomeHeader}
      >
        <Text style={Style.HomeHeaderText}>
          Header
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ position: "relative" }}>
          <Image
            source={require("../assets/banner.jpg")}
            style={Style.HomeHeroImage}
          />
          <View
            style={Style.HomeImageOverrideView}
          >
            <Text style={Style.HomeImageOverrideText}>
              Discover Your
            </Text>
            <Text style={Style.HomeImageOverrideText}>
              Unseen Passion
            </Text>
          </View>
        </View>
        <View style={{ marginVertical: 10, paddingHorizontal: 10 }}>
          <Text style={Style.HomeCollectionText}>Collections</Text>
          {
            data?.collections?.edges.map((item,index)=>{
                return (
                    <TouchableOpacity
                    key={item.title}
                      onPress={() => navigation.navigate("Collection")}
                      activeOpacity={0.9}
                      style={Style.collectionView}
                    >
                      <View style={{flex:1,alignItems:'center',paddingRight:10}}>
                      <Image
                        source={{ uri: item.node.image.url }}
                        style={Style.collectionImageStyle}
                      />
                          </View>
                          <View style={{flex:1.5,paddingHorizontal:10}}>
                      <Text style={Style.collectionTitle}>
                        {item.node.title}
                      </Text>
                      <Text style={Style.collectionDes}>
                        {item.node.description}
                      </Text>
                          </View>
                    </TouchableOpacity>
                  );
            })
          }
          <View>
            <Text style={Style.BuyText}>Buy Now</Text>

            <FlatList
              data={productData?.products?.edges}
              renderItem={({ item,index }) => {
                return (
                    <View
                    style={Style.productView}
                    >
                    <TouchableOpacity
                      activeOpacity={0.9}
                      onPress={() => navigation.navigate("Product",{goTo:item})}
                      style={Style.productCardView}
                      >
                      <View
                        style={Style.productImageView}
                        >
                        <Image
                          source={{ uri: item?.node?.featuredImage?.url }}
                          style={Style.productImage}
                          />
                      </View>
                      <View>
                        <Text style={Style.productTextTitle}>
                          {item?.node?.title}
                        </Text>
                        <Text
                          style={Style.productPrice}
                          >
                          ${item?.node?.variants?.edges[0]?.node?.price?.amount}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )
            }}
            />
          </View>
            </View>
      </ScrollView>
    </View>
  );
};

export default Home;
