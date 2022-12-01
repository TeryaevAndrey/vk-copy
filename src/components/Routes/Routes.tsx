import React, {FC} from 'react';
import { Route, Routes as RoutesList } from 'react-router-dom';
import Auth from '../pages/Auth/Auth';
import { useAuth } from '../providers/useAuth';
import { routes } from './List';

const Routes:FC = () => {
  const {user} = useAuth();

  return (
    <>
      <RoutesList>
        {routes.map(route => {
          return (
            <Route
              path={route.path}
              key={`route ${route.path}`}
              element={route.auth && !user ? <Auth /> : <route.component />}
            /> 
          )
        })}
      </RoutesList>
    </>
  );
};

export default Routes;