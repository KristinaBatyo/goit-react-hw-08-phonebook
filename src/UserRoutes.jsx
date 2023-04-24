import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import PublicRoute from 'components/public/PublicRoute';
import PrivateRoute from 'components/private/PrivateRoute';


const Contacts = lazy(() => import('components/contacts/Contacts'));
const RegisterPage = lazy(() => import('components/register/RegisterPage'));
const LoginPage = lazy(() => import('components/login/LoginPage'));


const UserRoutes = () => {
  return (
    <Suspense fallback={<p>...loading</p>}>
      <Routes>
        <Route path="/">
          <Route element={<PrivateRoute />}>
            <Route path="/contacts" element={<Contacts />} />
          </Route>
          <Route element={<PublicRoute />}>
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
