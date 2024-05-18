import { StyleSheet } from "react-native";
import Product from "../screens/Product";

const Style = StyleSheet.create({
  HomeHeader: {
    backgroundColor: "#369AA1",
    alignItems: "center",
    height: 80,
    justifyContent: "center",
    alignItems: "center",
  },
  HomeHeaderText: {
    fontSize: 20,
    marginTop: 30,
    fontFamily:'Bold'
    ,color:'black'
  },
  HomeHeroImage: { width: "100%", height: 250, resizeMode: "cover" },
  HomeImageOverrideView: {
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.47)",
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  HomeImageOverrideText: { fontSize: 30, color: "white", textAlign: "center",fontFamily:'Bold' },
  HomeCollectionText: { fontSize: 30, marginBottom: 10,fontFamily:'Bold',color:'black'},
  productView: {
    paddingVertical: 20,
    alignItems: "center",
    marginVertical:20
  },
  BuyText:{ fontSize: 30, marginBottom: 10,fontFamily:'Bold',color:'black'},
  productCardView: {
    alignItems: "center",
    width: 200,
    backgroundColor: "rgba(62, 40, 51, 0.14)",
    paddingBottom: 10,
    borderRadius: 10,
  },
  productImageView: {
    borderRadius: 10,
    width: 150,
    height: 150,
    elevation: 10,
    backgroundColor:'rgba(62, 40, 51, 0.14)',
    shadowColor: "black",
    marginTop: -20,
  },
  productImage: {
    width: "100%",
    height: "100%",
    resizeMode: "center",
    borderRadius: 10,
  },
  productTextTitle: { fontSize: 30, textAlign: "center",fontFamily:'Bold',color:'black' },
  productPrice:{
    fontSize: 20,
    color: "rgba(245, 174, 39, 0.8)",
    textAlign: "center",
    fontFamily:'Medium'
  },
  productPageTitle:{ fontSize: 25,color:'black', fontFamily: "Bold" },
  productPageDesc:{ fontSize: 20, color:'grey', fontFamily: "Medium" },
  productPagePrice:{ fontSize: 20, color: "rgba(231, 198, 45, 1)",fontFamily:'Bold' },
  decrementButton:{
    borderWidth: 1,
    paddingHorizontal: 10,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  collectionTitle:{ fontSize: 25,textAlign:'center',fontFamily:'Bold' },
  collectionDes:{ fontSize: 10,textAlign:'center',fontFamily:'Medium' },
  collectionImageStyle:{
    width: 120,
    height: 120,
    resizeMode: "center",
    borderRadius: 10,
  },
  collectionView:{
    marginVertical:10,
  backgroundColor: "rgba(62, 40, 51, 0.14)",
  paddingVertical: 10,
  paddingHorizontal:10,
  borderRadius: 10,
  alignItems: "center",
  justifyContent:'space-between',
  flexDirection:'row',
},
incrementButton:{
    borderWidth: 1,
    paddingHorizontal: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  productPageVariant:{ flexDirection: "row", alignItems: "center", marginV: 10 },
  productPageAddToCart:{
    fontSize: 20,
    color: "white",
    paddingVertical: 10,
    paddingHorizontal: 10,
    textAlign: "center",
  },
  Count:{
    fontSize: 20,
    fontFamily: "Bold",
    textAlign: "center",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    width: 50,
  },
  productPageAddtoCartView:{ backgroundColor: "black", borderRadius: 8, marginTop: 10 },
  buttonText:{ fontFamily: "Bold", fontSize: 20,color:'black' }

});

export default Style;
