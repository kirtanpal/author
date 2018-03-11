import React from 'react';
import { View, Text } from 'react-native';

const Header = (props) => {
     const {
          viewStyle,
          textStyle
     } = style;
     return (
          <View style={viewStyle}>
               <Text style={textStyle}>{props.headerText}</Text>
          </View>
     );
};

const style = {
     viewStyle: {
          backgroundColor: '#20B2AA',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          height: 60,
          paddingTop: 15,
          alignItems: 'center',
          justifyContent: 'center'
     },
     textStyle: {
          fontSize: 20,
          fontWeight: 'bold',
          color: 'white'
     }
};
export { Header };
