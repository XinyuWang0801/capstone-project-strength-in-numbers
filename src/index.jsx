import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Icon, Spin } from 'antd';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import * as serviceWorker from './serviceWorker';
import './index.scss';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

ReactDOM.render(<Provider store={store}><PersistGate loading={<Spin indicator={antIcon} />} persistor={persistor}><App /></PersistGate></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
