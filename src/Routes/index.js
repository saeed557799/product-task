import React from 'react';
import {
  Route,
  BrowserRouter as Router,
  Routes,
  Navigate,
} from 'react-router-dom';
import NotFound from '../components/ErrorPage/ErrorPage';
import { PanelLayout } from '../components/layout/PanelLayout';
import { routes, authRoutes } from './authRoutes';

const accessToken = localStorage.getItem('token');

export default function index() {
  return (
    <Router>
      <Routes>
        <Route
          path='/'
          element={
            <Navigate to={!!accessToken ? '/dashboard' : '/login'} replace />
          }
        />
        {(!!accessToken ? routes : authRoutes)?.map((route, i) => {
          return route.component ? (
            <Route
              key={i}
              exact={true}
              index={
                !!accessToken
                  ? route.path === '/dashboard'
                  : route.path === '/login'
              }
              path={`${route.path}`}
              element={
                <>
                  {!!accessToken ? (
                    <PanelLayout children={<route.component />} />
                  ) : (
                    <route.component />
                  )}
                </>
              }
            />
          ) : null;
        })}
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}
