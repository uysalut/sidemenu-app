import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { getTheme } from 'react-native-material-kit';
const theme = getTheme();

class EmailCenter extends Component {
    render() {
        return (
            <View style={[theme.cardStyle, styles.containerStyle]}>
                <Text style={theme.cardContent}>You have no emails from Customer Service.</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  containerStyle: {
    marginTop: 70,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginHorizontal: 5
  }
});

export default EmailCenter;
