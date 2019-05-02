import React, { Component } from 'react'
import { Card } from 'react-native-elements'
import {Text , View} from 'react-native'

function RenderContactInfo(props){
     const { Data } = props;
          return(
             <Card
             featuredTitle={Data.title}
             >
               <Text>{Data.addressInfo}</Text>
              <Text>Tel :{Data.TelNo}</Text>
              <Text>Fax :{Data.Fax}</Text>
              <Text>Email :{Data.Email}</Text>
             </Card>
          )
}

class Contact extends Component {

    state = {
      Data: {
        title: "Contact Information",
        addressInfo: "121, Clear Water Bay Road Clear Water Bay, Kowloon HONG KONG",
        TelNo: "+852 1234 5678",
        Fax: " +852 8765 4321",
        Email: "confusion@food.net",
      }
    }

  static navigationOptions = {
    title: 'Contact Information'
  };

    render(){
      return(
         <RenderContactInfo Data={this.state.Data} />
      )
    }
}

export default Contact;