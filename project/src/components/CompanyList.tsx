import React from 'react';
import { Building2 } from 'lucide-react';
import { Company } from '../types/company';

interface CompanyListProps {
  companies: Company[];
  selectedCompany: Company | null;
  onSelectCompany: (company: Company) => void;
}

export const CompanyList: React.FC<CompanyListProps> = ({
  companies,
  selectedCompany,
  onSelectCompany,
}) => {
  return (
    <div className="w-64 bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4 bg-indigo-600">
        <h2 className="text-white text-lg font-semibold flex items-center gap-2">
          <Building2 size={20} />
          Companies
        </h2>
      </div>
      <ul className="divide-y divide-gray-200">
        {companies.map((company) => (
          <li
            key={company.id}
            className={`cursor-pointer hover:bg-indigo-50 transition-colors ${
              selectedCompany?.id === company.id ? 'bg-indigo-100' : ''
            }`}
            onClick={() => onSelectCompany(company)}
          >
            <div className="p-4">
              <p className="text-sm font-medium text-gray-900">{company.name}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};