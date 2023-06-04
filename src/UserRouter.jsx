import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

// import PrivateRote from 'modules/PrivateRote/PrivateRote';
// import PublicRote from 'modules/PublicRote/PublicRote';
// import HeaderWraper from 'components/HeaderWraper/HeaderWraper';

const HomePage = lazy(() => import('./pages/HomePage/HomePage'));
const TweetsPage = lazy(() => import('./pages/TweetsPage/TweetsPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage/NotFoundPage'));

const UserRoutes = () => {
  return (
    <Suspense>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/tweets" element={<TweetsPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
