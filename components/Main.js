import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	TextInput,
	ListView,
	StatusBar,
	Platform
} from 'react-native';
import {debounce} from 'lodash';
import ListItem from './ListItem';
import { clrs } from '../utils/utils';
import { searchFor } from '../utils/fetcher';

//Componente que lista las palabras...
export default class Main extends Component {
	constructor(props) {
		super(props);
    	const dataSource = new ListView.DataSource({
      		rowHasChanged: (r1, r2) => r1 !== r2,
    	});
    	this.state = { words: dataSource };
  	}

	//Invoca un servicio antes de renderizar el componente...
	componentWillMount() {
    	this.makeQuery();
  	}

	//Renderiza el listView con las palabras...
	renderRow = (words, sId, id) => {
		return (
			<ListItem index={ id }
				text={ words.word }
		  		meaning={words.meaning}
			/>
		);
  	};

	render() {
		const { words } = this.state;
		return (
			<View style={ styles.container }>
        		<StatusBar barStyle="light-content" />
        			<TextInput style={ Platform.OS === 'ios' ? styles.searchBoxiOS : styles.searchBoxAndroid}
          				onChangeText={ this.makeQuery }
          				keyboardType="web-search"
          				placeholder="Search Word"
          			/>

        		<ListView dataSource={ words }
          			style={ styles.listView }
          			renderRow={ this.renderRow } 
          			enableEmptySections={true}
				/>
      		</View>
			);
	}

	//Realiza una búsqueda, tiene un delay de 400 milisegundos...
	makeQuery = debounce((query = "") => {
		searchFor(query !== "" ? `searchword/${query}` : "all")
		.then(response => {
        	this.setState({
          		words: this.state.words.cloneWithRows(response.words),
        	});
      	})
      	.catch((error) => {
        	throw error;
      	});
  	}, 400);
}


Main.propTypes = {
  navigator: React.PropTypes.object,
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 64,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: clrs.white,
  },
  searchBoxiOS: {
    height: 40,
    borderColor: clrs.black,
    borderWidth: 2,
    margin: 16,
    paddingLeft: 10,
    fontWeight: '800',
  },
	searchBoxAndroid: {
    height: 40,
    margin: 16,
    paddingLeft: 10,
    fontWeight: '800',
		fontSize : 18, 
		alignSelf: "stretch"
  },
  listView: {
    flex: 1,
    alignSelf: 'stretch',
  },
});
