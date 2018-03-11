import React from 'react';
import { TextInput, Text, View } from 'react-native';

const Input = ({ label, value, placeholder, autoCorrect, secureTextEntry, onChangeText }) => {
     const {
          inputContainerStyle,
          labelStyle,
          inputStyle
     } = styles;
     return (
          <View style={inputContainerStyle}>
          <Text style={labelStyle}>{label}</Text>
          <TextInput
          style={inputStyle}
          value={value}
          placeholder={placeholder}
          autoCorrect={autoCorrect}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          />
          </View>
     );
};

const styles = {
     inputContainerStyle: {
          flex: 1,
          flexDirection: 'row',
          height: 40,
          alignItems: 'center'
     },
     labelStyle: {
          flex: 1,
          fontSize: 16,
          paddingTop: 5,
          marginLeft: 10
     },
     inputStyle: {
          flex: 3,
          lineHeight: 23,
          paddingRight: 10

     }
};

export { Input };
