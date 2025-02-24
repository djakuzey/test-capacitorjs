import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Loans from './pages/Loans';
import Activity from './pages/Activity';
import Payments from './pages/Payments';
import Page404 from './pages/Page404';
import { ROUTES } from './constants/routes';

const AppRouter = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} Component={Home} />
      <Route path={ROUTES.LOANS} Component={Loans} />
      <Route path={ROUTES.ACTIVITY} Component={Activity} />
      <Route path={ROUTES.PAYMENTS} Component={Payments} />
      <Route path={ROUTES.PAGE404} Component={Page404} />
    </Routes>
  );
}

export default AppRouter;
