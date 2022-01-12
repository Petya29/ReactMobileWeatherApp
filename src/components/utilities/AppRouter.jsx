import React, { useEffect, useRef } from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { setScreenName } from '../../store/reducers/weatherSlice';
import { routes } from '../../router/routes';

export default function AppRouter() {

    const history = useHistory();

    let dispatch = useRef(() => { });
    dispatch = useDispatch();

    useEffect(() => {
        history.listen((location) => {
            dispatch(setScreenName(location.pathname));
        })
        if (localStorage.getItem('redirect') === 'true') {
            localStorage.setItem('redirect', false);
            history.push('/weather');
        }
    }, [history]);

    return (
        <Switch>
            {routes.map((route) => (
                <Route
                    component={route.component}
                    path={route.path}
                    exact={route.exact}
                    key={route.id}
                />
            ))}
            <Redirect to="/weather" />
        </Switch>
    )
}
