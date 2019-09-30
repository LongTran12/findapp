import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import SiteContext from './contexts/SiteContext'
import Category from './page/Category'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import ContactUs from './page/ContactUs'

function WrapApp() {

    return (
        <SiteContext>
            <Router>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/category/:cate" component={Category} />
                    <Route exact path="/contact-us" component={ContactUs} />
                </Switch>

            </Router>
        </SiteContext>
    );
}
ReactDOM.render(<WrapApp />, document.getElementById('root'));

serviceWorker.unregister();
