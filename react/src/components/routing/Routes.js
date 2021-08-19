import React from 'react';
import {Route, Switch} from 'react-router-dom';
import UserProfile from '../restricted/user/Profile';
import ClientsTable from '../restricted/client/ViewAll';
import PageNotFound from '../alert/PageNotFound';
import ClientView from '../restricted/client/ViewOne';
import AddClientForm from '../restricted/client/form/AddClient';
import EditClientForm from '../restricted/client/form/EditClient';

const Routes = () => (
    <Switch>
        <Route path='/' exact component={ClientsTable}/>
        <Route path={'/profile'} component={UserProfile}/>
        <Route path={'/client/view/:id'} component={ClientView}/>
        <Route path={'/client/add'} component={AddClientForm}/>
        <Route path={'/client/edit/:id'} component={EditClientForm}/>
        <Route path={'*'} component={PageNotFound}/>
    </Switch>
);
export default Routes;