import React from 'react';
import { View } from 'react-native';


const Card = (props) => {
     return (
          <View style={styles.viewStyle}>
               {props.children}
          </View>
     );
};

const styles = {
     viewStyle: {
          borderColor: '#ddd',
          borderWidth: 1,
          borderRadius: 2,

          shadowColor: '#000',
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          marginTop: 15,
          marginLeft: 5,
          marginRight: 5,
          padding: 5
     }
};

export { Card };
