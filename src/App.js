import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Header, Spinner, CardSection, Button } from './common';
import firebase from 'firebase';
import LoginForm from './LoginForm';

class App extends Component {
     state = { loggedIn: null };
     componentDidMount() {
          firebase.initializeApp(
               {
                    apiKey: "AIzaSyCHzni6_FB03lC6M3X9mr4BkRsugsaaghA",
                    authDomain: "authy-3478f.firebaseapp.com",
                    databaseURL: "https://authy-3478f.firebaseio.com",
                    projectId: "authy-3478f",
                    storageBucket: "authy-3478f.appspot.com",
                    messagingSenderId: "998724649283"
               });

               firebase.auth().onAuthStateChanged((user) => {
                    if(user){
                         this.setState({ loggedIn: true });
                    }
                    else this.setState({ loggedIn: false });
               })
          }

     renderContent() {
          if(this.state.loggedIn === false){
               return <LoginForm />;
          }else if(this.state.loggedIn === true){
               return (
                    <CardSection style={{ borderRadius: 2 }}>
                         <Button onPress={() => firebase.auth().signOut()}>
                              Log out
                         </Button>
                    </CardSection>
               );
          }
          return (
               <View style={styles.spinnerStyle}>
                <Spinner size='large' />
                </View>
           );
     }

     render() {
          return (
          <View>
               <Header headerText='Authentication' />
               {this.renderContent()}
          </View>
     );}
}

const styles = {
     spinnerStyle: {
          height: 300,
          justifyContent: 'center'
     }
};

export default App;
