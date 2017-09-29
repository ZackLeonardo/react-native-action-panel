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

import Icon from 'react-native-vector-icons/FontAwesome';

export default class ActionIcon extends Component {

  render () {
    const {
      icon,
      iconImage,
      iconSize,
      iconColor,
      iconStyle,
      text,
      onPress,
      containerStyle,
      textStyle,
    } = this.props;

    let source;
    if (iconImage) {
      // 可以兼容网络资源和本地资源
      source = typeof iconImage === 'string' ? { uri: iconImage } : iconImage;
    }

    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={()=>{onPress(text)}}
        style={[styles.container, {
          height: iconSize,
          width: iconSize,
        }, containerStyle]
        }
      >
        {icon ? <Icon name={icon} size={iconSize-45} color={iconColor}/> : null}
        {iconImage
          ?
          <Image
            source={source}
            style={[
              {
                height: iconSize -45,
                width: iconSize -45,
              },
              iconStyle
            ]}
            />
          : null
        }
        {text
          ?
          <Text style={[
              styles.text,
              textStyle,
          ]}>{text}</Text>
          : null
        }
      </TouchableOpacity>
    )
  }
}

ActionIcon.propTypes = {
  containerStyle: View.propTypes.style,
  icon: PropTypes.string,
  iconSize: PropTypes.number,
  iconColor: PropTypes.string,
  text: PropTypes.string,
  onPress: PropTypes.func,
  textStyle: Text.propTypes.style,
  iconStyle: Image.propTypes.style,
};

ActionIcon.defaultProps = {
  onPress: () => {},
  iconSize: 80,
  iconColor: '#808080',
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#808080',
    borderRadius: 10,
    justifyContent:'center',
    overflow:'hidden',
  },
  text: {
    fontSize: 15,
    color: '#808080',
    textAlign: 'center',
    marginTop: 5,
  }
})
