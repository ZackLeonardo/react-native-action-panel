import React, { Component } from 'react';
import {
  Text,
  View,
  ViewPropTypes,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';

import ActionIcon from './ActionIcon';

export default class Test extends React.Component{
  constructor(props){
    super(props);

  }

  render(){
    const actionIconProps = {
      icon: 'photo',
      text: '相机',
    };
    return (
      <View style={styles.container}>
        <ActionIcon {...actionIconProps} />
      </View>


    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    flex: 1,
  },


});
