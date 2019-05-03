import React, { Component } from "react";
import { View, Text, ScrollView, FlatList } from "react-native";
import { Card, Icon } from "react-native-elements";

import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import IMG from "./images/uthappizza.png";

const RenderDish = props => {
  const dish = props.dish;

  if (dish != null) {
    return (
      <Card
        featuredTitle={dish.name}
        image={require("./images/uthappizza.png")}
      >
        <Text style={{ margin: 10 }}>{dish.description}</Text>
        <Icon
          raised
          reverse
          name={props.favourite ? "heart" : "heart-o"}
          type="font-awesome"
          color="#f50"
          onPress={() =>
            props.favourite ? console.log("Already favourite") : props.onPress()
          }
        />
      </Card>
    );
  } else {
    return <View />;
  }
};

const RenderComments = props => {
  const comments = props.comments;

  const renderCommentItem = ({ item, index }) => {
    return (
      <View key={index} style={{ margin: 10 }}>
        <Text style={{ fontSize: 14 }}>{item.comment}</Text>
        <Text style={{ fontSize: 12 }}>{item.comment} Star</Text>
        <Text style={{ fontSize: 12 }}>
          {"-- " + item.author + ", " + item.date}
        </Text>
      </View>
    );
  };

  return (
    <Card title="Comments">
      <FlatList
        data={comments}
        renderItem={renderCommentItem}
        keyExtractor={item => item.id.toString()}
      />
    </Card>
  );
};

class DishDetail extends Component {
  state = {
    dishes: DISHES,
    comments: COMMENTS,
    favourite: []
  };

  markFavourite(dishId) {
    this.setState({
      favourite: this.state.favourite.concat(dishId)
    });
  }

  static navigationOptions = {
    title: "Dish Details"
  };

  render() {
    const dishId = this.props.navigation.getParam("dishId", "");
    return (
      <View>
        <RenderDish
          dish={this.state.dishes[+dishId]}
          favourite={this.state.favourite.some(el => el === dishId)}
          onPress={() => this.markFavourite(dishId)}
        />
        <RenderComments
          comments={this.state.comments.filter(
            comment => comment.id === dishId
          )}
        />
      </View>
    );
  }
}

export default DishDetail;
