import React from 'react';
import './index.css';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { HashRouter} from "react-router-dom";
import {store} from "./Components/Redux/redux-store";
import {Provider} from 'react-redux';

       ReactDOM.render(
        <HashRouter >
         <Provider store={store}>
            <App/>
         </Provider>
        </HashRouter>,
        document.getElementById('root'));

serviceWorker.unregister();


