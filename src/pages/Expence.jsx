import  { useState, useEffect } from 'react';
import { format } from 'date-fns';


const dummyExpenses = [
    { id: 1, title: 'Groceries', amount: 1500, category: 'Food', date: '2024-05-01' },
    { id: 2, title: 'Internet Bill', amount: 700, category: 'Utilities', date: '2024-05-02' },
    { id: 3, title: 'Movie Night', amount: 400, category: 'Entertainment', date: '2024-05-03' },
    { id: 4, title: 'Cab', amount: 250, category: 'Transport', date: '2024-05-03' },
    { id: 5, title: 'Dinner', amount: 800, category: 'Food', date: '2024-05-04' },
];

const ExpensesPage = () => {
    const [expenses, setExpenses] = useState(dummyExpenses);
    const [filtered, setFiltered] = useState(dummyExpenses);
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedDate, setSelectedDate] = useState('');

    useEffect(() => {
        filterExpenses();
    }, [selectedCategory, selectedDate]);

    const filterExpenses = () => {
        let filteredData = [...expenses];
        if (selectedCategory !== 'All') {
            filteredData = filteredData.filter(exp => exp.category === selectedCategory);
        }
        if (selectedDate !== '') {
            filteredData = filteredData.filter(exp => exp.date === selectedDate);
        }
        setFiltered(filteredData);
    };

    const categories = ['All', 'Food', 'Utilities', 'Entertainment', 'Transport'];

    return (
        <div className="p-4 space-y-4">
            <h1 className="text-2xl font-bold">Expenses</h1>

            <div className="flex gap-4 flex-wrap">
                <div className="form-control">
                    <label className="label">Filter by Category</label>
                    <select className="select select-bordered" value={selectedCategory} onChange={e => setSelectedCategory(e.target.value)}>
                        {categories.map(cat => (
                            <option key={cat}>{cat}</option>
                        ))}
                    </select>
                </div>

                <div className="form-control">
                    <label className="label">Filter by Date</label>
                    <input
                        type="date"
                        className="input input-bordered"
                        value={selectedDate}
                        onChange={e => setSelectedDate(e.target.value)}
                    />
                </div>
            </div>

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Category</th>
                            <th>Date</th>
                            <th>Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filtered.map(exp => (
                            <tr key={exp.id}>
                                <td>{exp.title}</td>
                                <td>{exp.category}</td>
                                <td>{format(new Date(exp.date), 'yyyy-MM-dd')}</td>
                                <td className="font-semibold">₹{exp.amount}</td>
                            </tr>
                        ))}
                        {filtered.length === 0 && (
                            <tr>
                                <td colSpan="4" className="text-center text-gray-500">No expenses found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ExpensesPage;
