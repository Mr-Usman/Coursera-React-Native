import React from 'react';
import { createAppContainer , createStackNavigator , createDrawerNavigator } from 'react-navigation'
import { View , Text , Platform } from 'react-native'
import Menu from './MenuComponent';
import DishDetail from './dishDetailComponent';
import Home from './HomeComponent';
import Contact from './ContactComponent';
import About from './AboutComponent';

const MenuNavigator = createStackNavigator({
    Menu: { screen: Menu },
    DishDetail: { screen: DishDetail }
},  
    {
        initialRouteName: 'Menu',
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#512DA8"      
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"
            }
        }
    }
);

const HomeNavigator = createStackNavigator({
    Home: { screen: Home }
},
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"
            }
        }
    }
);

const ContactNavigator = createStackNavigator({
    Contact : { screen: Contact }
},
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"
            }
        }
    }
);

const AboutNavigator = createStackNavigator({
    About: { screen: About }
},
    {
        navigationOptions: {
            headerStyle: {
                backgroundColor: "#512DA8"
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: "#fff"
            }
        }
    }
);

const MainNavigator = createDrawerNavigator({
  Home : {
   screen: HomeNavigator,
   navigationOptions : {
       title :'Home',
       drawerLabel : 'Home'
   }
  },
  Menu : {
      screen: MenuNavigator,
      navigationOptions: {
          title: 'Menu',
          drawerLabel: 'Menu'
      }
  },
    Contact: {
        screen: ContactNavigator,
        navigationOptions: {
            title: 'Contact',
            drawerLabel: 'Contact'
        }
    },
    About : {
        screen: AboutNavigator,
        navigationOptions: {
            title: 'About',
            drawerLabel: 'About'
        }
    }
}, 
{
  drawerBackgroundColor : '#D1C4E9'    
})

class Main extends React.Component {

    render() {
        return(
            <View style={{ flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : 10 }}>
                <MainNavigator />
            </View>
        )
    }
}

export default Main;