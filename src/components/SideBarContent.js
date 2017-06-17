import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

const contextTypes = {
    drawer: React.PropTypes.object,
};

const SideBarContent = (props, context) => {
    const drawer = context.drawer;
    const { sideBarItemTitle, container } = styles;
    return (
        <View style={container}>
            <TouchableOpacity
              style={styles.sideBarItemContainer}
              onPress={() => { drawer.close(); Actions.myLoans(); }}>
                <View style={{ width: 35 }}>
                  <Icon name="home" size={25} color="#fff" style={{ alignSelf: 'center' }} />
                </View>
                <Text style={sideBarItemTitle}>My Loans</Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={[styles.sideBarItemContainer, styles.menuBorder]}
              onPress={() => { drawer.close(); Actions.myProfile(); }}>
                <View style={{ width: 35 }}>
                  <Icon name="user" size={25} color="#fff" style={{ alignSelf: 'center' }} />
                </View>
                <Text style={sideBarItemTitle}>My Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sideBarItemContainer}
              onPress={() => { drawer.close(); Actions.emailCenter(); }}>
                <View style={{ width: 35 }}>
                  <Icon name="envelope-o" size={25} color="#fff" style={{ alignSelf: 'center' }} />
                </View>
                <Text style={sideBarItemTitle}>Email Center</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.sideBarItemContainer}
              onPress={() => { drawer.close(); Actions.contactUs(); }}>
                <View style={{ width: 35 }}>
                  <Icon name="phone" size={25} color="#fff" style={{ alignSelf: 'center' }} />
                </View>
                <Text style={sideBarItemTitle}>Contact Us</Text>
            </TouchableOpacity>
            <TouchableOpacity
               style={[styles.sideBarItemContainer, styles.menuBorder]}
              onPress={() => { drawer.close(); Actions.storeLocator(); }}>
                <View style={{ width: 35 }}>
                  <Icon name="map-marker" size={25} color="#fff" style={{ alignSelf: 'center' }} />
                </View>
                <Text style={sideBarItemTitle}>Store Locator</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sideBarItemContainer}
              onPress={() => { drawer.close(); Actions.ratesTerms(); }}>
                <View style={{ width: 35 }}>
                  <Icon name="arrow-right" size={25} color="#fff" style={{ alignSelf: 'center' }} />
                </View>
                <Text style={sideBarItemTitle}>Loan Rates & Terms</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sideBarItemContainer}
              onPress={() => { drawer.close(); Actions.faq(); }}>
                <View style={{ width: 35 }}>
                  <Icon name="question-circle" size={25} color="#fff" style={{ alignSelf: 'center' }} />
                </View>
                <Text style={sideBarItemTitle}>FAQs</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.sideBarItemContainer}
              onPress={() => { drawer.close(); Actions.about(); }}>
                <View style={{ width: 35 }}>
                  <Icon name="info-circle" size={25} color="#fff" style={{ alignSelf: 'center' }} />
                </View>
                <Text style={sideBarItemTitle}>About</Text>
            </TouchableOpacity>
            <View style={{ justifyContent: 'flex-end', flex: 1 }}>
              <TouchableOpacity
                style={[styles.sideBarItemContainer]}
                onPress={() => { props.onLogOut(); }}>
                  <View style={{ width: 35 }}>
                    <Icon name="sign-out" size={25} color="#fff" style={{ alignSelf: 'center' }} />
                  </View>
                  <Text style={sideBarItemTitle}>Log Out</Text>
              </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'stretch',
      backgroundColor: '#4caf50',
      paddingTop: 20,
      paddingHorizontal: 10,
    },
    sideBarItemTitle: {
      color: '#fff',
      marginLeft: 10,
      fontSize: 18
    },
    sideBarItemContainer: {
      flexDirection: 'row',
      marginVertical: 5
    },
    menuBorder: {
      borderBottomWidth: 2,
      borderColor: '#fff',
      paddingBottom: 10
    }
});

SideBarContent.contextTypes = contextTypes;

export default SideBarContent;
