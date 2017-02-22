import React, { Component } from 'react';
import { Navigator } from 'react-native';
import Main from './Main';
import NavigationBar from './NavigationBar';

//Componente principal...
export default class Root extends Component {
    renderScene(route, navigator){
        if (route.id === 'MAIN') {
            return <Main navigator={ navigator } />;
        }
    }

    render() {
        return (
            <Navigator 
                style={{ flex: 1 }}
                initialRoute={{ id: 'MAIN', title: 'Remember Words' }}
                renderScene={ this.renderScene }
                navigationBar={ NavigationBar }
            />
    );
  }
};