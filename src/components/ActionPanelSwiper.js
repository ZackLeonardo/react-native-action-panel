import React, { Component } from 'react';
import {
  View,
  ViewPropTypes,
  StyleSheet,
  FlatList,
  Dimensions,
  Text,
} from 'react-native';
import PropTypes from 'prop-types';

import Swiper from 'react-native-swiper';

import ActionPanel from './ActionPanel';

const deviceWidth = Dimensions.get('window').width;

export default class ActionPanelSwiper extends React.Component{
  constructor(props){
    super(props);

    this._ActionPanel = [];
    this._ActionPanelRef = [];

    this.setSwiperHeight = this.setSwiperHeight.bind(this);
  }

  setSwiperHeight(value){
    console.log('setSwiperHeight:'+value);
  }

  _preRenderActionPanel(){
    this._ActionPanel = [];
    const { actionIcons, numColumns, numRows, onPress, iconSize } = this.props;

    const actionsInOnePanel = numColumns * numRows;
    for (let i = 0 ; i < Math.ceil(actionIcons.length/actionsInOnePanel); i++){
      this._ActionPanel[i] = <ActionPanel
        key={i}
        actionIcons={actionIcons.slice(i*actionsInOnePanel, i*actionsInOnePanel + actionsInOnePanel)}
        numColumns={numColumns}
        onPress={onPress}
        setSwiperHeight={i===0 ? this.setSwiperHeight : null}
        iconSize={iconSize}
        />
    }
  }

  render(){
    this._preRenderActionPanel();
    return (
      <View style={[styles.wrapperContainer,{height: 2*this.props.iconSize + 80}, this.props.wrapperContainer]}>
        <Swiper
          style={styles.wrapper}
          index={0}
          loop={false}
          showsButtons={false}>
          {this._ActionPanel}
        </Swiper>
      </View>

    );
  }
}

ActionPanelSwiper.defaultProps = {
  actionIcons: [
    {
      icon: 'photo',
      text: '照片1',
    },{
      icon: 'camera',
      text: '相机2',
    },{
      icon: 'photo',
      text: 'photo3',
    },{
      icon: 'camera',
      text: 'video4',
    },{
      icon: 'photo',
      text: 'picture5',
    },{
      icon: 'camera',
      text: 'camera6',
    },{
      icon: 'photo',
      text: '照片7',
    },{
      icon: 'camera',
      text: '相机8',
    },{
      icon: 'photo',
      text: 'photo9',
    },{
      icon: 'camera',
      text: 'video10',
    },{
      icon: 'photo',
      text: 'picture11',
    },{
      icon: 'camera',
      text: 'camera12',
    },{
      icon: 'photo',
      text: '照片13',
    },{
      icon: 'camera',
      text: '相机14',
    },{
      icon: 'photo',
      text: 'photo15',
    },{
      icon: 'camera',
      text: 'video16',
    },{
      icon: 'photo',
      text: 'picture17',
    },{
      icon: 'camera',
      text: 'camera18',
    },],
    numColumns: 4,
    numRows: 2,
    onPress: (text) => { console.log('onPressed:'+ text)},
    iconSize: 80,
}

ActionPanelSwiper.propTypes = {
  actionIcons: PropTypes.array,
  numColumns: PropTypes.number,
  numRows: PropTypes.number,
  wrapperContainer: ViewPropTypes.style,
  onPress: PropTypes.func,
  iconSize: PropTypes.number,
}

const styles = StyleSheet.create({
  wrapperContainer: {
    position: 'absolute',
    bottom: 0,
  },
  wrapper: {
  },

});
