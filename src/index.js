import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import BasicDetail from './Users/UsersData';
import PaginationData from './Users/TablePagination';
import Popup from './Popup/Popup';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

//import DataTable from './Users/BasicInfoDetails';
//import Pagination from './Pagination//Pagination';


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path='/' component={App} />

        <Route exact path='/table' component={BasicDetail} />
        <Route exact path='/page' component={PaginationData} />
        <Route exact path='/popup' component={Popup} />
      </Switch>
    </Router>

    {/* <App />*/}

  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
