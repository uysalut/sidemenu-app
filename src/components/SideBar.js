import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import Drawer from 'react-native-drawer';
import { DefaultRenderer, Actions } from 'react-native-router-flux';

import SideBarContent from './SideBarContent';

class NavigationDrawer extends Component {
    render() {
        const state = this.props.navigationState;
        const children = state.children;
        return (
            <Drawer
                ref="navigation"
                open={state.open}
                onOpen={() => Actions.refresh({ key: state.key, open: true })}
                onClose={() => Actions.refresh({ key: state.key, open: false })}
                content={<SideBarContent {...this.props} />}
                styles={drawerStyles}
                tapToClose
                openDrawerOffset={0.25}
                panCloseMask={0.25}
                tweenHandler={(ratio) => ({
                 main: { opacity: Math.max(0.54, 1 - ratio) }
                })}
            >
                <DefaultRenderer navigationState={children[0]} onNavigate={this.props.onNavigate} />
            </Drawer>
        );
    }
}

const drawerStyles = {
  // drawer: { shadowColor: '#4caf50', shadowOpacity: 0.8, shadowRadius: 3 },
  // main: { paddingLeft: 3 },
};

export default NavigationDrawer;
