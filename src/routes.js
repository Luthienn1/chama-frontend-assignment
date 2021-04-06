import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import SearchPage from './pages/SearchPage/index';
import HistoryPage from './pages/HistoryPage/index';

function Routes() {
  return(
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={SearchPage}/>
        <Route path='/history' component={HistoryPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
