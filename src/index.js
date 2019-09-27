import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from './components/Header'
import * as serviceWorker from './serviceWorker';
import SiteContext from './contexts/SiteContext'

function WrapApp() {
    return (
        <SiteContext>
            <Header />
            <App />
        </SiteContext>
    );
}
ReactDOM.render(<WrapApp />, document.getElementById('root'));
serviceWorker.unregister();
