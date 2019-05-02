import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'
import { DISHES } from '../shared/dishes';
import { PROMOTIONS } from '../shared/promotions';
import { LEADERS } from '../shared/leaders';
import { COMMENTS } from '../shared/comments';
import { Card } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';

function RenderItem(props){
  const item = props.item;

  if(item != null){
    return(
      <Card
        featuredTitle={item.name}
        featuredSubtitle={item.designation}
        image={require('./images/uthappizza.png')}
      >
        <Text style={{margin : 10}}> { item.description } </Text>
      </Card>
    )
  }
  else{
      return(<View></View>)
  }

}

class Home extends Component {

    state = {
        dishes : DISHES,
        leaders : LEADERS,
        promotions : PROMOTIONS,
    }
    

    static navigationOptions = {
        title: 'Home'
    };
    
  render(){
      return(
          <View style={{ flex: 1 }}>
              <ScrollView>
                  <RenderItem item={this.state.dishes.filter( dish => dish.featured)[0]} />
                  <RenderItem item={this.state.promotions.filter( promo => promo.featured)[0]} />
                  <RenderItem item={this.state.leaders.filter( leader => leader.featured)[0]} />
              </ScrollView>
          </View>
      )
  }
}

export default Home;