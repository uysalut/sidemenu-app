import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, Card, CardSection, Input, Spinner } from './common';

class Authentication extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errorMessage: ''
        };
    }

    onButtonPress() {
        const { email, password } = this.state;
        if(!email || !password) {
            this.setState({ errorMessage: 'Enter Password and Email'});
        } else {
            this.props.onLoginPress(email, password);
        }
    }

    renderButton() {
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
        );
    }

    render() {

        if (this.props.loading) {
            return <Spinner />;
        }

        return (
            <View style={styles.loginContainer}>
                <Text style={styles.title}>Welcome</Text>
                <Card>
                    <CardSection>
                        <Input
                            placeholder="user@gmail.com"
                            label="Email"
                            value={this.state.email}
                            onChangeText={email => this.setState({ email })}
                        />
                    </CardSection>

                    <CardSection>
                        <Input
                            secureTextEntry
                            placeholder="password"
                            label="Password"
                            value={this.state.password}
                            onChangeText={password => this.setState({ password })}
                        />
                    </CardSection>
                    {this.state.errorMessage ?
                        <Text style={styles.errorMessage}>
                            {this.state.errorMessage}
                        </Text>
                    :
                        null
                    }
                    <CardSection>
                        {this.renderButton()}
                    </CardSection>
                </Card>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    loginContainer: {
      flex: 1,
      backgroundColor: '#4caf50'
    },
    title: {
      marginTop: 50,
      marginBottom: 100,
      alignSelf: 'center',
      fontSize: 25,
      color: '#fff'
    },
    errorMessage: {
        color: 'red',
        backgroundColor: '#fff',
        alignSelf: 'stretch',
        paddingLeft: 20,
        paddingVertical: 10
    }
});

export default Authentication;
