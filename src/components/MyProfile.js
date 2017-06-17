import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { changeEmail } from '../actions';

class MyProfile extends Component {

    constructor() {
        super();
        this.state = {
            email: ''
        }
    }

    onButtonPress() {
        this.props.changeEmail(this.state.email);
        this.setState({ email: '' });
    }

    render() {
        const { inputStyle, labelStyle, containerStyle } = styles;
        return (
            <View style={{ marginTop: 70, paddingHorizontal: 15, flex: 1 }}>
                <Text style={{ fontSize: 25, marginBottom: 30 }}>You may change your email address below.</Text>
                <Text style={{ color: '#d2d2d2', fontSize: 20 }}>Current Email Address</Text>
                <Text style={{ color: '#d2d2d2', fontSize: 20 }}>{this.props.email}</Text>
                <View style={containerStyle}>
                    <Text style={labelStyle}>New Email Address</Text>
                    <TextInput
                        autoCapitalize={'none'}
                        autoCorrect={false}
                        style={inputStyle}
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                    <TouchableOpacity style={styles.buttonStyle} onPress={this.onButtonPress.bind(this)}>
                        <Text style={styles.textStyle}>
                            CHANGE EMAIL ADDRESS
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.auth.user
    }
};

const styles = StyleSheet.create({
    inputStyle: {
        color: '#000',
        paddingRight: 5,
        paddingLeft: 7,
        fontSize: 18,
        lineHeight: 23,
        height: 40,
        borderWidth: 2,
        borderColor: '#4caf50'
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        marginVertical: 40
    },
    textStyle: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        alignSelf: 'stretch',
        backgroundColor: '#4caf50',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#4caf50',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 20
    }
});

export default connect(mapStateToProps, { changeEmail })(MyProfile);