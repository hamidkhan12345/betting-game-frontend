import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import InvitePage from "./InvitePage";
import SettingsPage from "./SettingsPage";
import UserProfile from "./UserProfile"; // New profile page component
import TransactionsPage from "./TransactionsPage"; // New transactions page component
import BottomNav from "./BottomNav";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import BtcPage from "./BtcPage";
import FreePlans from "./FreePlans";
import HistoryPage from "./HistoryPage";
import WithdrawPage from "./WithdrawPage";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/invite" element={<InvitePage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/transactions" element={<TransactionsPage />} />
          <Route path="/btc-page" element={<BtcPage />} />
          <Route path="/free-plans" element={<FreePlans />} />
          <Route path="/history" element={<HistoryPage />} />
          <Route path="/withdraw" element={<WithdrawPage />} />
          <Route path="/trade" element={<Navigate to="/btc-page" replace />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        {/* Bottom Navigation appears on all routes except /login and /register */}
        <Routes>
          <Route path="/login" element={null} />
          <Route path="/register" element={null} />
          <Route path="/*" element={<BottomNav />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
