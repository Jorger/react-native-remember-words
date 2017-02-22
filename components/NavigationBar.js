import React from 'react';
import {
  StyleSheet,
  Navigator,
  Text,
  TouchableOpacity,
  AlertIOS
} from 'react-native';
import { clrs } from '../utils/utils';
import { saveWord, searchFor } from '../utils/fetcher';

//Crear una nueva palabra...
const newWord =  () => {
	AlertIOS.prompt('Type the new word', null, word => {
		if(word !== ""){
			//Saber si la palabra existe...
			searchFor(`word/${word}`)
			.then(response => {
				if(response.error){
					meaningWord(word);
				}
				else {
					AlertIOS.alert(
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
	});
};

//Guadar el significado de la palabra...
const meaningWord = (word) => {
	AlertIOS.prompt(`Write the meaning of the word ${word}`, null, meaning => {
		if(meaning !== ""){
			saveWord(word, meaning, (status) => {
				AlertIOS.alert(
					status ? word : 'Error',
					status ? 'Saved successfully' : 'Failed to save the word'
				);
			});
		}
		else {
			errorAlert("meaning", word);
		}
	});
};

//Mostrar errores cuando no se completan los campos...
const errorAlert = (type, word = "") => {
	AlertIOS.alert(
		'Error',
		type === 'word' ? 'Please, type the new word' : `Please, write the meaning of the word ${word}`,
		[
			{
				text: 'Ok', 
				onPress: () => {
					if(type === "word"){
						newWord();
					}
					else{
						meaningWord(word);
					}
				}
			}
		]
	);
};

const NavigationBarRouteMapper = {

  LeftButton: () => {
    return null;
  },

  RightButton: (route, navigator) => {
    return (
      <TouchableOpacity
        onPress={ () => newWord() }
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
    backgroundColor: clrs.cyan,
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
    color: clrs.white,
    fontWeight: 'bold'
  },
  navBarTitleText: {
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarRightButton: {
    paddingRight: 20
  },
});

export default (
  <Navigator.NavigationBar
    style={ styles.navBar }
    routeMapper={ NavigationBarRouteMapper } />
);