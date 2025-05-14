import { useState, useEffect } from 'react';
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    const [view, setView] = useState('personal');
    const [summaryData, setSummaryData] = useState(null);
    const [recentExpenses, setRecentExpenses] = useState([]);

    useEffect(() => {
        fetchSummary();
        fetchExpenses();
    }, [view]);

    const fetchSummary = async () => {
        const mockSummary = {
            totalSpent: view === 'personal' ? 12500 : 45000,
            monthlyLimit: view === 'personal' ? 20000 : 80000,
            categoryWise: [
                { category: 'Food', amount: view === 'personal' ? 4500 : 17000 },
                { category: 'Travel', amount: view === 'personal' ? 3000 : 12000 },
                { category: 'Entertainment', amount: view === 'personal' ? 2500 : 8000 },
                { category: 'Bills', amount: view === 'personal' ? 2500 : 8000 },
            ],
            monthlyTrend: [
                { month: 'Jan', total: view === 'personal' ? 4000 : 15000 },
                { month: 'Feb', total: view === 'personal' ? 5000 : 16000 },
                { month: 'Mar', total: view === 'personal' ? 3500 : 14000 },
                { month: 'Apr', total: view === 'personal' ? 4500 : 17000 },
            ]
        };
        setSummaryData(mockSummary);
    };

    const fetchExpenses = async () => {
        const mockExpenses = view === 'personal'
            ? [
                { _id: '1', title: 'Lunch', amount: 300 },
                { _id: '2', title: 'Bus Ticket', amount: 100 },
                { _id: '3', title: 'Netflix', amount: 500 },
            ]
            : [
                { _id: '1', title: 'Team Lunch', amount: 2000 },
                { _id: '2', title: 'Group Cab', amount: 800 },
                { _id: '3', title: 'Shared WiFi Bill', amount: 1200 },
            ];
        setRecentExpenses(mockExpenses);
    };

    const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff6b6b', '#a29bfe'];

    return (
        <div className="p-4 space-y-6">
            <div className="flex gap-4">
                <button
                    className={`btn  ${view === 'personal' ? 'btn-primary text-white  ' : 'btn-outline  '}`}
                    onClick={() => setView('personal')}
                >
                    Personal
                </button>
                <button
                    className={`btn  ${view === 'group' ? 'btn-primary text-white  ' : 'btn-outline  '}`}
                    onClick={() => setView('group')}
                >
                    Group
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="card bg-white shadow">
                    <div className="card-body">
                        <p className="text-sm text-gray-500">Total Spent</p>
                        <h2 className="text-xl font-bold">₹{summaryData?.totalSpent || 0}</h2>
                    </div>
                </div>
                <div className="card bg-white shadow">
                    <div className="card-body">
                        <p className="text-sm text-gray-500">Monthly Limit</p>
                        <h2 className="text-xl font-bold">₹{summaryData?.monthlyLimit || 0}</h2>
                    </div>
                </div>
                <div className="card bg-white shadow">
                    <div className="card-body">
                        <p className="text-sm text-gray-500">Remaining Budget</p>
                        <h2 className="text-xl font-bold">
                            ₹{(summaryData?.monthlyLimit || 0) - (summaryData?.totalSpent || 0)}
                        </h2>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="card bg-white shadow">
                    <div className="card-body">
                        <h3 className="font-semibold mb-2">Expenses by Category</h3>
                        <ResponsiveContainer width="100%" height={250}>
                            <PieChart>
                                <Pie
                                    data={summaryData?.categoryWise || []}
                                    dataKey="amount"
                                    nameKey="category"
                                    cx="50%"
                                    cy="50%"
                                    outerRadius={80}
                                    fill="#8884d8"
                                    label
                                >
                                    {summaryData?.categoryWise?.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="card bg-white shadow">
                    <div className="card-body">
                        <h3 className="font-semibold mb-2">Monthly Spend</h3>
                        <ResponsiveContainer width="100%" height={250}>
                            <BarChart data={summaryData?.monthlyTrend || []}>
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Bar dataKey="total" fill="#82ca9d" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            <div className="card bg-white shadow">
                <div className="card-body">
                    <h3 className="font-semibold mb-4">Recent Expenses</h3>
                    <ul className="space-y-2">
                        {recentExpenses.map((expense) => (
                            <li key={expense._id} className="flex justify-between border-b pb-2">
                                <span>{expense.title}</span>
                                <span className="font-semibold">₹{expense.amount}</span>
                            </li>
                        ))}
                        {recentExpenses.length === 0 && <p className="text-sm text-gray-500">No recent expenses</p>}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;