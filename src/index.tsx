
import * as React from 'react';
import { render } from 'react-dom';

const { AppContainer } = require('react-hot-loader');

import App from 'containers/App';

declare var module: { hot: any };

const rootEl = document.getElementById('app');

import injectTapEventPlugin from 'react-tap-event-plugin';

// Needed for onTouchTap
// Check this repo:
// https://github.com/zilverline/react-tap-event-plugin
injectTapEventPlugin();

// The HMR App ontainer handles the hot reloading
render(
    <AppContainer>
        <App />
    </AppContainer>,
    rootEl
);

// Handle hot reloading requests from Webpack
if (module.hot) {
    module.hot.accept('./containers/App', () => {
        // If we receive a HMR request for our App container, then reload it using require (we can't do this dynamically with import)
        const NextApp = require('./containers/App').default;

        // And render it into the root element again
        render(
            <AppContainer>
                <NextApp />
            </AppContainer>,
            rootEl
        );
    })
}