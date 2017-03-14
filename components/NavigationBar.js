import React from 'react';
import {
  StyleSheet,
  Navigator,
  Text,
  TouchableOpacity,
  AlertIOS, 
	Platform, 
	Alert
} from 'react-native';
import { clrs } from '../utils/utils';
import { saveWord, searchFor } from '../utils/fetcher';
//Para Android...
import prompt from 'react-native-prompt-android';

//Crear una nueva palabra y validar si está ya existe...
const newWord = word => {
	if(word !== ""){
		searchFor(`word/${word}`)
			.then(response => {
				if(response.error){
					addMeaningWord(word);
				}
				else {
					Alert.alert(
						`Meaning: ${response.meaning}`, 
						`The word ${word} already exists`
					);
				}
			})
			.catch((error) => {
				throw error;
			});
	}
	else {
		errorAlert("word");
	}
};

//Crear una nueva palabra...
const addNewWord =  () => {
	if(Platform.OS === 'ios'){
		AlertIOS.prompt('Type the new word', null, word => newWord(word));
	}
	else {
		prompt('Type the new word', null, [
			{text: 'Cancel'}, 
			{text: 'OK', onPress: word => newWord(word)}
		]);
	}
};

//Adicionar el significado de la palabra...
const addMeaningWord = (word) => {
	if(Platform.OS === 'ios'){
		AlertIOS.prompt(`Write the meaning of the word ${word}`, null, meaning => meaningWord(word, meaning));
	}
	else {
		prompt(`Write the meaning of the word ${word}`, null, [
			{text: 'Cancel'}, 
			{text: 'OK', onPress: meaning => meaningWord(word, meaning)}
		]);
	}
};

//Guadar el significado de la palabra...
const meaningWord = (word, meaning) => {	
	if(meaning !== ""){
		saveWord(word, meaning, (status) => {
			Alert.alert(
				status ? word : 'Error',
				status ? 'Saved successfully' : 'Failed to save the word'
			);
		});
	}
	else {
		errorAlert("meaning", word);
	}
};

//Mostrar errores cuando no se completan los campos...
const errorAlert = (type, word = "") => {
	Alert.alert(
  	'Error',
  	type === 'word' ? 'Please, type the new word' : `Please, write the meaning of the word ${word}`, 
  	[
    	{
				text: 'OK', 
				onPress: () => {
					if(type === "word"){
						addNewWord();
					}
					else {
						addMeaningWord(word);
					}
				}
			}
		]);
};

const NavigationBarRouteMapper = {

  LeftButton: () => {
    return null;
  },

  RightButton: (route, navigator) => {
    return (
      <TouchableOpacity
        onPress={ () => addNewWord() }
        style={ styles.navBarRightButton }>
        <Text style={[styles.navBarText, styles.navBarButtonText]}>
          + ADD
        </Text>
      </TouchableOpacity>
    );
  },

  Title: (route) => {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        { route.title }
      </Text>
    );
  },
};

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: '#3F51B5',
  },
  navBarText: {
    fontSize: Platform.OS === 'ios' ? 16 : 20,
    marginVertical: 10,
    color: clrs.white,
    fontWeight: 'bold'
  },
  navBarTitleText: {
    fontWeight: '500',
    marginVertical: Platform.OS === 'ios' ? 9 : 15,
  },
  navBarRightButton: {
    paddingRight: 20,
		marginVertical: Platform.OS === 'ios' ? 0 : 5,
  },
});

export default (
  <Navigator.NavigationBar
    style={ styles.navBar }
    routeMapper={ NavigationBarRouteMapper } />
);