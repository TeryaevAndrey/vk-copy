import React, {FC} from 'react';
import { Route, Routes as RoutesList } from 'react-router-dom';
import { routes } from './List';

const Routes:FC = () => {
  const isAuth = true;

  return (
    <>
      <RoutesList>
        {routes.map(route => {
          if(route.auth && !isAuth) {
            return false;
          }

          return (
            <Route
              path={route.path}
              key={`route ${route.path}`}
              element={<route.component />}
            /> 
          )
        })}
      </RoutesList>
    </>
  );
};

export default Routes;