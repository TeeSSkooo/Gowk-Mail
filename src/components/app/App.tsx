import { Routes, Route } from 'react-router-dom';

import Layout from 'components/layout/Layout';
import Header from 'components/header/Header';
import HomePage from 'pages/HomePage';
import ProfilePage from 'pages/ProfilePage';

export default function App() {
  return (
    <Layout>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </Layout>
  );
}
