import React from 'react';
import { ActivityIndicator, View } from 'react-native';

const Spinner = ({ size }) => {
     return (
          <View style={styles.spinnerStyle}>
               <ActivityIndicator
               style={{ paddingTop: 10, paddingBottom: 10 }}
               size={size || 'large'}
               />
          </View>
     );
};

const styles = {
     spinnerStyle: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center'
     }
};
export { Spinner };
