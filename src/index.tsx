import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import SiteHeader from './components/SiteHeader';
import SiteFooter from './components/SiteFooter';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import OrderListView from './views/OrderListView';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  (
    <SiteHeader />
  ),
  document.getElementById('header')
);

ReactDOM.render(
  (
    <BrowserRouter>
      <main role="main" className="container">
        <Route exact={true} path="/" component={HomeView} />
        <Route path="/login" component={LoginView} />
        <Route path="/orders" component={OrderListView} />
      </main>
    </BrowserRouter>
  ),
  document.getElementById('content')
);

ReactDOM.render(
  (
    <SiteFooter />
  ),
  document.getElementById('footer')
);

registerServiceWorker();
