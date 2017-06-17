import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Scene, Router, ActionConst } from 'react-native-router-flux';
import { connect } from 'react-redux';

import AuthenticationContainer from './containers/AuthenticationContainer';
import SideBarContainer from './containers/SideBarContainer';
import BurgerIcon from './components/BurgerIcon';
import MyProfile from './components/MyProfile';
import MyLoans from './components/MyLoans';
import EmailCenter from './components/EmailCenter';
import ContactUs from './components/ContactUs';
import FAQ from './components/FAQ';
import StoreLocator from './components/StoreLocator';
import RatesTerms from './components/RatesTerms';
import About from './components/About';


const RouterWithRedux = connect()(Router);

class RouterComponent extends Component {
    render() {
        return (
            <RouterWithRedux
                navigationBarStyle={ styles.navbarStyle }
                titleStyle={ styles.titleStyle}
            >
                <Scene key="root">
                    <Scene key="auth" type={ActionConst.RESET}>
                        <Scene key="login" title="Login" component={AuthenticationContainer} hideNavBar />
                    </Scene>
                    <Scene key="drawer" component={SideBarContainer} open={false}>
                        <Scene key="nav">
                            <Scene
                                key="myProfile"
                                title="MyProfile"
                                component={MyProfile}
                                renderBackButton={() => <BurgerIcon />}
                                initial
                            />
                            <Scene
                                key="myLoans"
                                title="My Loans"
                                component={MyLoans}
                                renderBackButton={() => <BurgerIcon />}
                            />
                            <Scene
                                key="emailCenter"
                                title="Email Center"
                                component={EmailCenter}
                                renderBackButton={() => <BurgerIcon />}
                            />
                            <Scene
                                key="contactUs"
                                title="Contact Us"
                                component={ContactUs}
                                renderBackButton={() => <BurgerIcon />}
                            />
                            <Scene
                                key="storeLocator"
                                title="Store Locator"
                                component={StoreLocator}
                                renderBackButton={() => <BurgerIcon />}
                            />
                            <Scene
                                key="ratesTerms"
                                title="Loan Rates & Terms"
                                component={RatesTerms}
                                renderBackButton={() => <BurgerIcon />}
                            />
                            <Scene
                                key="faq"
                                title="FAQ"
                                component={FAQ}
                                renderBackButton={() => <BurgerIcon />}
                            />
                            <Scene
                                key="about"
                                title="About"
                                component={About}
                                renderBackButton={() => <BurgerIcon />}
                            />
                        </Scene>
                    </Scene>
                </Scene>
            </RouterWithRedux>
        );
    }
}

const styles = StyleSheet.create({
    navbarStyle: {
       backgroundColor: "#4caf50"
    },
    titleStyle: {
        color: "#FFFFFF",
        fontWeight: 'bold'
    }
});

export default RouterComponent;
