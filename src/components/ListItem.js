import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import * as actions from '../actions';

import CardSection from '../components/common/CardSection';

class ListItem extends Component {
    renderDescription() {
        const { library, selectedLibraryId } = this.props;

        if (library.id === selectedLibraryId) {
            return(
                <Text>{ library.description }</Text>
            );
        }
    }

    render() {
        const { techTitle } = styles;
        const { id, title } =  this.props.library;

        return(
            <TouchableWithoutFeedback onPress={ () => this.props.selectLibrary(id) }>
              <View> 
                <CardSection>
                    <Text style={ techTitle }>
                      { title }
                    </Text>
                </CardSection>
                { this.renderDescription() }
              </View>
            </TouchableWithoutFeedback>
        );
    }
}

const styles = StyleSheet.create({
    techTitle: {
        fontSize: 18,
        paddingLeft: 16,
    }
});

const mapStateToProps = state => {
    return { selectedLibraryId: state.selectedLibraryId }
}

export default connect(mapStateToProps, actions)(ListItem);
