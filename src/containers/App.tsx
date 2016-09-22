import * as React from 'react'

import { Hello } from '../components/Hello'

import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { MuiThemeProvider, lightBaseTheme } from "material-ui/styles";

const lightMuiTheme = getMuiTheme(lightBaseTheme);

export class App extends React.Component<{}, {}> {
    render() {
        return (
            <MuiThemeProvider muiTheme={lightMuiTheme}>
                <Hello framework="React" compiler="TypeScript" />
            </MuiThemeProvider>
        )
    }
}

export default App;