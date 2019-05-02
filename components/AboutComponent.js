import React, { Component } from 'react'
import { View, Text , FlatList } from 'react-native'
import { Card , ListItem } from 'react-native-elements'
import { LEADERS } from '../shared/leaders';
import IMG from './images/alberto.png';

function History(props){
    const { data } = props
  return(
      <Card
          title="Our History"
      >
            <Text>{data}</Text>
      </Card>
  )
}

class About extends Component {

    state = {
        text: "Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.The restaurant traces its humble beginnings to The Frying Pan, a successful chain started by our CEO, Mr.Peter Pan, that featured for the first time the world's best cuisines in a pan.",
        leaders : LEADERS,
    }

    static navigationOptions = {
        title: 'About Us'
    };

    render(){
     
        const renderMenuItem = ({item , index}) => {
        return(
                <ListItem
                    key={index}
                    title={item.name}
                    subtitle={item.description}
                    hideChevron={true}
                    leftAvatar={{ source: IMG }}
                />
        )
        }

        return(
            <View style={{ flex : 1}}>
                <View>
                    <History data={this.state.text} />
                </View>
                <View>
                    <Card
                        title="Corporate Leadership"
                        featuredTitle="Corporate Leadership"
                    >
                        <FlatList
                            data={this.state.leaders}
                            renderItem={renderMenuItem}
                            keyExtractor={item => item.id.toString()}
                        />
                    </Card>
                </View>
            </View>
        )
    }
}

export default About;