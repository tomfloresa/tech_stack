import React, { Component } from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Header from './components/common/Header';
import LibraryList from './components/LibraryList';

import reducers from './reducers';

export default class App extends Component {
    render() {
        return(
            <Provider store={ createStore(reducers) }>
              <SafeAreaView style={ styles.container }>
                <Header>
                  Title
                </Header>
                <LibraryList/>
              </SafeAreaView>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#434B6C',
      padding: 20,
      paddingTop: 40,
    },
  });