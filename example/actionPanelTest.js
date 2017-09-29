import React, { Component } from 'react';
import {
  View,
  ViewPropTypes,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

import ActionPanel from '@zdy/react-native-action-panel';


export default class Test extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    const actionPanelProps = {
      actionIcons: [
        {
          icon: 'photo',
          text: '照片',
        },{
          icon: 'camera',
          text: '相机',
        },{
          iconImage: 'https://img3.doubanio.com/img/fmadmin/large/708963.jpg',
          text: 'photo',
        },{
          iconImage: require('./media/1.jpg'),
          text: 'video',
        },{
          icon: 'photo',
          text: 'picture',
        },{
          icon: 'camera',
          text: 'camera',
        },],
        numColumns: 4,
    }
    return (
      <View style={styles.container}>
        <ActionPanel {...actionPanelProps}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
  },
});
