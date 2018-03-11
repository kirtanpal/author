import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
     return (
          <View style={styles.viewStyle}>
               {props.children}
          </View>
     );
};

const styles = {
     viewStyle: {
          position: 'relative',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          backgroundColor: '#fff',
          borderColor: '#ddd',
          borderBottomWidth: 1,
          padding: 5
     }
};

export { CardSection };
