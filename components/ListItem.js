import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  AlertIOS
} from 'react-native';
import FadeInView from './FadeInView';
import { clrs, convert_case } from '../utils/utils';

//Lista las palabras y muestra su significado...
const ListItem = ({ index, text, meaning }) => {
	return (
    	<TouchableOpacity
      		underlayColor={ clrs.gray }
      		onPress={ () => AlertIOS.alert(`${convert_case(text)}`, convert_case(meaning))}>
      		<FadeInView delay={ index * 25 }>
        		<View style={ styles.mediaObject }>
          			<Text style={ styles.text }>{ convert_case(text) }</Text>
        		</View>
      		</FadeInView>
    	</TouchableOpacity>
	);
};

export default ListItem;

const styles = StyleSheet.create({
  mediaObject: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    marginBottom: 10, 
    height: 40, 
    marginRight: 16, 
    marginLeft: 16, 
    borderBottomWidth : 1, 
    borderColor : 'gray', 
    paddingBottom : 5
  },
  text: { 
    flex: 1, 
    fontSize : 25, 
    fontWeight : "600"
  }
});

ListItem.propTypes = {
  index: React.PropTypes.string,
  text: React.PropTypes.string,
  meaning : React.PropTypes.string
};