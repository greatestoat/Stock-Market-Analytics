import React from 'react';
import { LineChart, LogOut } from 'lucide-react';

interface HeaderProps {
  onLogout: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onLogout }) => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-xl font-semibold text-gray-900 flex items-center gap-2">
          <LineChart className="text-indigo-600" />
          Stock Market Analytics
        </h1>
        <button
          onClick={onLogout}
          className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
          title="Logout"
        >
          <LogOut className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
};