import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Switch } from 'react-router';
import { Redirect, Route } from 'react-router-dom';
import Preloader from '../../components/common/Preloader/Preloader';
import { privateRoutes, publicRoutes } from '../../router/router';
import { getIsAuth } from '../../selectors/auth-selectors';


const AppRoutes: React.FC = () => {
   const isAuth = useSelector(getIsAuth)

   return (
      isAuth
         ? <Suspense fallback={<Preloader />}>
            <Switch>
               {privateRoutes.map(route =>
                  <Route
                     exact={route.exact}
                     path={route.path}
                     component={route.component}
                     key={route.path}
                  />)}
               <Redirect to='/profile' />
            </Switch>
         </Suspense>

         : <Suspense fallback={<Preloader />}>
            <Switch>
               {publicRoutes.map(route =>
                  <Route
                     exact={route.exact}
                     path={route.path}
                     component={route.component}
                     key={route.path}
                  />)}
               <Redirect to='/login' />
            </Switch>
         </Suspense>
   )
}

export default AppRoutes
