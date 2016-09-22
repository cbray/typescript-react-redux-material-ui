import * as React from 'react';

import { RaisedButton } from 'material-ui';

export interface HelloProps { compiler: string; framework: string; }

export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return (
            <RaisedButton label="Hello" />
        )
    }
}

export default Hello;