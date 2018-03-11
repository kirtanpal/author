import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
     const { buttonStyle, textStyle } = styles;
     return (
          <TouchableOpacity onPress={props.onPress} style={buttonStyle}>
               <Text style={textStyle}>{props.children}</Text>
          </TouchableOpacity>
     );
};

const styles = {
     buttonStyle: {
          flex: 1,
          borderRadius: 5,
          alignSelf: 'stretch',
          borderColor: '#20B2AA',
          borderWidth: 2,
          backgroundColor: '#fff',
          marginLeft: 5,
          marginRight: 5
     },
     textStyle: {
          alignSelf: 'center',
          fontSize: 18,
          fontWeight: 'bold',
          color: '#20B2AA',
          paddingTop: 10,
          paddingBottom: 10
     }
};

export { Button };
