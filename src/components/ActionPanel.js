import React, { Component } from 'react';
import {
  View,
  ViewPropTypes,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import PropTypes from 'prop-types';

import ActionIcon from './ActionIcon';

const deviceWidth = Dimensions.get('window').width;

export default class ActionPanel extends React.Component{
  constructor(props){
    super(props);

    this._renderItem = this._renderItem.bind(this);

    this._numColumns = this.props.numColumns;

    do {
      this._space = (deviceWidth - this._numColumns * 80) / (this._numColumns + 1) / 2;
      this._numColumns -= 1;
    }
    while(this._space < 0);
    this._numColumns += 1;

    console.log(this._space);
  }

  _renderItem(item, index){
    return (
      <View style={{margin: this._space}}>
        <ActionIcon {...item}/>
      </View>
    );
  }

  render(){
    const { actionIcons } = this.props;
    return (
      <FlatList
        style={styles.flatlist}
        columnWrapperStyle = {[styles.flatlistItem, {marginLeft: this._space, marginRight: this._space}]}
        numColumns = {this._numColumns}
        data = {actionIcons}
        renderItem = {({item, index}) => this._renderItem(item, index)}
        keyExtractor={item => item.text}
        />
    );
  }
}

ActionPanel.defaultProps = {
  actionIcons: [
    {
      icon: 'photo',
      text: '照片',
    },{
      icon: 'camera',
      text: '相机',
    },{
      icon: 'photo',
      text: 'photo',
    },{
      icon: 'camera',
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

ActionPanel.propTypes = {
  actionIcons: PropTypes.array,
  numColumns: PropTypes.number,
}

const styles = StyleSheet.create({
  flatlist: {
    backgroundColor: '#FFFFFF',
  },
  flatlistItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
