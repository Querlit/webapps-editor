import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './pages/App';

import { Provider } from 'react-redux';
import { store } from './store/store';

document.getElementById("loader-wrapper")?.remove()
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render((
    <Provider store={store}>
        <App />
    </Provider>
));