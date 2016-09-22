import * as React from 'react';

import { RaisedButton, FlatButton, Dialog } from 'material-ui';

export interface HelloProps {
    compiler: string;
    framework: string;
}

export interface HelloState {
    open: boolean;
}

const styles = {
    container: {
        textAlign: 'center',
        paddingTop: 200,
    },
};

export class Hello extends React.Component<HelloProps, HelloState> {

    constructor(props, context) {
        super(props, context);

        this.handleRequestClose = this.handleRequestClose.bind(this);
        this.handleTouchTap = this.handleTouchTap.bind(this);

        this.state = { open: false }
    }

    handleRequestClose() {
        this.setState({
            open: false,
        });
    }

    handleTouchTap() {
        this.setState({
            open: true,
        });
    }

    render() {
        const standardActions = [(
            <FlatButton
                label="Ok"
                primary={true}
                onTouchTap={this.handleRequestClose}
                />
        )];

        return (
            <div style={styles.container}>
                <Dialog
                    open={this.state.open}
                    title="Super Secret Password"
                    actions={standardActions}
                    onRequestClose={this.handleRequestClose}
                    >
                    1-2-3-4-5
          </Dialog>
                <h1>Material-UI</h1>
                <h2>example project</h2>
                <RaisedButton
                    label="Super Secret Password"
                    secondary={true}
                    onTouchTap={this.handleTouchTap}
                    />
            </div>
        );
    }
}

export default Hello;