import React, { Component } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";

export default class PostCard extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.cardContainer}>
          <View style={styles.authorContainer}>
            <View style={styles.authorImageContainer}>
              <Image
                source={require("../assets/profile_img.png")}
                style={styles.profileImage}
              />
            </View>
            <View style={styles.authorNameContainer}>
              <Text style={styles.authorNameText}></Text>
            </View>
          </View>
          <Image
            source={require("../assets/post.jpeg")}
            style={styles.postImage}
          />
          <View style={styles.captionContainer}>
            <Text style={styles.captionText}>{this.props.posts.caption}</Text>
          </View>
          <View style={styles.actionContainer}>
            <View style={styles.likeButton}>
              <Ionicons name={"heart"} size={RFValue(30)} color={"white"} />
              <Text style={styles.likeText}>12k</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20),
  },
  authorImageContainer: {
    resizeMode: "contain",
    width: "20%",
    alignSelf: "left",
    height: RFValue(50),
  },
  authorContainer: {
    paddingLeft: RFValue(20),
    justifyContent: "center",
  },
  authorNameContainer: {
    paddingLeft: RFValue(20),
    justifyContent: "center",
  },
  authorNameText: {
    fontSize: RFValue(18),
    color: "white",
  },
  postImage: {
    resizeMode: "contain",
    width: "100%",
    alignSelf: "center",
    height: RFValue(250),
  },
  captionContainer: {
    paddingLeft: RFValue(20),
    justifyContent: "center",
  },
  captionText: {
    fontSize: 13,
    color: "white",
    paddingTop: RFValue(10),
  },
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10),
  },
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#eb3948",
    borderRadius: RFValue(30),
  },
  likeText: {
    color: "white",
    fontSize: RFValue(25),
    marginLeft: RFValue(5),
  },
});
