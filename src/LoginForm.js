import React, { Component } from 'react';
import { Text } from 'react-native';
import { Card, CardSection, Button, Input, Spinner } from './common';
import * as firebase from 'firebase';

class LoginForm extends Component {
     state = { email: '', password: '', error: '', loading: false };

     onButtonPress() {
          const { email, password, error } = this.state;
          this.setState({ error: '', loading: true });
          firebase.auth().signInWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(() => {
               firebase.auth().createUserWithEmailAndPassword(email, password)
               .then(this.onLoginSuccess.bind(this))
               .catch(() => {
                    this.setState({ error: 'Authentication Failed', loading: false })
               });
          });
     }

     onLoginSuccess() {
          this.setState({
               email: '',
               password: '',
               error: '',
               loading: false
          });
     }

     renderContent() {
          if(this.state.loading === false){
               return (
                    <Button onPress={this.onButtonPress.bind(this)}>
                         Log in
                    </Button>
               );
          }
          return <Spinner size='small' />;
     }

     render(){
          return (
               <Card>
                    <CardSection>
                         <Input
                         value={this.state.email}
                         placeholder='user@gmail.com'
                         label='Email'
                         secureTextEntry={false}
                         autoCorrect={false}
                         onChangeText={text => this.setState({ email: text})}
                         />
                    </CardSection>
                    <CardSection>
                         <Input
                         value={this.state.password}
                         placeholder='user@gmail.com'
                         label='Password'
                         secureTextEntry={true}
                         autoCorrect={false}
                         onChangeText={text => this.setState({ password: text})}
                         />
                    </CardSection>
                    <Text style={styles.textStyle}>{this.state.error}</Text>
                    <CardSection>
                         {this.renderContent()}
                    </CardSection>
               </Card>
          );
     }
}

const styles = {
     textStyle: {
          color: 'red',
          alignSelf: 'center'
     }
};

export default LoginForm;
