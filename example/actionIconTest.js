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

import {ActionIcon} from '@zdy/react-native-action-panel';

export default class Test extends React.Component{
  constructor(props){
    super(props);

    this._onPress = this._onPress.bind(this);
  }

  _onPress(text){
    console.log('op:'+ text);
  }

  render(){
    const actionIconProps = {
      icon: 'photo',
      text: '相机',
    };
    return (
      <View style={styles.container}>
        <ActionIcon {...actionIconProps}
          onPress={this._onPress}/>
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
