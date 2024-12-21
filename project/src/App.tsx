import React, { useState, useEffect } from 'react';
import { ParsedStockData } from './types/stock';
import { Header } from './components/Header';
import { StockList } from './components/StockList';
import { StockCharts } from './components/StockCharts';
import { LoginForm } from './components/LoginForm';
import { SignupForm } from './components/SignupForm';
import { WelcomeDialog } from './components/WelcomeDialog';
import { stockData } from './data/stockData';
import { getCurrentUser, logoutUser } from './utils/auth';

function App() {
  const [selectedStock, setSelectedStock] = useState<ParsedStockData | null>(
    stockData.length > 0 ? stockData[0] : null
  );
  const [user, setUser] = useState(getCurrentUser());
  const [showLogin, setShowLogin] = useState(true);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser) {
      setUser(currentUser);
    }
  }, []);

  const handleLogin = (userData: { name: string; email: string }) => {
    setUser(userData);
    setShowWelcome(true);
  };

  const handleLogout = () => {
    logoutUser();
    setUser(null);
    setShowLogin(true);
  };

  if (!user) {
    return showLogin ? (
      <LoginForm onLogin={handleLogin} onSwitchToSignup={() => setShowLogin(false)} />
    ) : (
      <SignupForm onSignup={() => {}} onSwitchToLogin={() => setShowLogin(true)} />
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header onLogout={handleLogout} />
      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex gap-8">
          <StockList
            stocks={stockData}
            selectedStock={selectedStock}
            onSelectStock={setSelectedStock}
          />
          <div className="flex-1">
            {selectedStock ? (
              <StockCharts stock={selectedStock} />
            ) : (
              <div className="bg-white p-8 rounded-lg shadow-lg text-center">
                <p className="text-gray-500">No stock data available</p>
              </div>
            )}
          </div>
        </div>
      </main>
      {showWelcome && (
        <WelcomeDialog name={user.name} onClose={() => setShowWelcome(false)} />
      )}
    </div>
  );
}

export default App;