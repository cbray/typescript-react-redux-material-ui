import * as React from 'react'

import { Hello } from '../components/Hello'

import { getMuiTheme, MuiThemeProvider, lightBaseTheme } from "material-ui/styles";

const muiTheme = getMuiTheme(lightBaseTheme);

export class App extends React.Component<{}, {}> {
    render() {
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <Hello framework="React" compiler="TypeScript" />
            </MuiThemeProvider>
        )
    }
}

export default App;