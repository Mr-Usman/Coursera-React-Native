import React , { Component } from 'react'
import { View , Text , FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'
import { DISHES } from '../shared/dishes';
import IMG from './images/uthappizza.png'
import DishDetail from './dishDetailComponent';

class Menu extends Component {

    state = {
     dishes : DISHES
    }

    static navigationOptions = {
        title: 'Menu'
    };

    render(){

        const { navigate } = this.props.navigation;

        const renderMenuItem = ({item,index}) => {
          return(
              <ListItem 
                  key={index}
                  title={item.name}
                  subtitle={item.description}
                  onPress={() => navigate('DishDetail', { dishId: item.id })}
                  hideChevron={true}
                  leftAvatar={{ source: IMG }}
              />
          )
        }

      return(
         <FlatList 
              data={this.state.dishes}
              renderItem={renderMenuItem}
              keyExtractor={item => item.id.toString()}
         />
      )
    }
}

export default Menu;