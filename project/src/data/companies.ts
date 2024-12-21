import { Company } from '../types/company';

export const companies: Company[] = [
  {
    id: 1,
    name: "Tech Innovations Inc",
    revenue: [2.5, 3.1, 3.8, 4.2],
    profit: [0.5, 0.7, 0.9, 1.1],
    employees: [150, 180, 210, 250],
    quarters: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023']
  },
  {
    id: 2,
    name: "Global Solutions Ltd",
    revenue: [1.8, 2.2, 2.5, 3.0],
    profit: [0.3, 0.4, 0.5, 0.7],
    employees: [100, 120, 130, 150],
    quarters: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023']
  },
  {
    id: 3,
    name: "Future Dynamics",
    revenue: [3.2, 3.8, 4.1, 4.8],
    profit: [0.8, 1.0, 1.2, 1.5],
    employees: [200, 230, 260, 300],
    quarters: ['Q1 2023', 'Q2 2023', 'Q3 2023', 'Q4 2023']
  }
];