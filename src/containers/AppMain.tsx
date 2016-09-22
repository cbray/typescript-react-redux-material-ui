
import * as React from 'react';

import { AppBar, Drawer, RaisedButton, IconButton, IconMenu, MenuItem } from 'material-ui';

import NavigationMoreVert from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';

import { Hello } from '../components/Hello';

export interface AppMainProps {
}

export interface AppMainState {
    drawerOpen: boolean;
}

const styles = {
    container: {
        textAlign: 'left',
        paddingTop: 0,
    },
};

export class AppMain extends React.Component<AppMainProps, AppMainState> {

    constructor(props, context) {
        super(props, context);

        this.handleToggleDrawer = this.handleToggleDrawer.bind(this);

        this.state = { drawerOpen: false };
    }

    handleToggleDrawer() {
        this.setState({
            drawerOpen: !this.state.drawerOpen
        });
    }

    render() {
        return (
            <div style={styles.container}>
                <AppBar title="Demo Application"
                    iconElementLeft={<IconButton><NavigationClose /></IconButton>}
                    iconElementRight={
                        <IconMenu
                            iconButtonElement={
                                <IconButton><NavigationMoreVert /></IconButton>
                            }
                            targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
                            >
                            <MenuItem primaryText="Refresh" />
                            <MenuItem primaryText="Help" />
                            <MenuItem primaryText="Sign out" />
                        </IconMenu>
                    }
                    />
                <RaisedButton
                    label="Toggle Drawer"
                    onTouchTap={this.handleToggleDrawer}
                    />
                <Drawer open={this.state.drawerOpen}>
                    <MenuItem>Menu Item</MenuItem>
                    <MenuItem>Menu Item 2</MenuItem>
                </Drawer>
                <Hello framework="React" compiler="TypeScript" />
            </div>
        );
    }
}

export default AppMain;