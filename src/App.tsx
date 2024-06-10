import Sidebar from '../src/components/Sidebar';
import Topbar from '../src/components/Topbar';
import HomePage from './components/HomePage';
import JobPage from "./components/JobPage"
import ReferralPage from './components/ReferralPage';
import SettingsPage from "./components/SettingsPage";
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Topbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/job" element={<JobPage />} />
          <Route path="/referral" element={<ReferralPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
    </div>
  );
}