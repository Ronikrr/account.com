import { useState } from 'react';
import { Link } from 'react-router-dom';

const GroupManagement = () => {
    const [groups, setGroups] = useState(['Roommates', 'Trip Buddies', 'Project Team']);
    const [newGroup, setNewGroup] = useState('');
    const [error, setError] = useState('');

    const handleAddGroup = (e) => {
        e.preventDefault();
        if (!newGroup.trim()) {
            setError('Group name cannot be empty');
            return;
        }
        if (groups.includes(newGroup.trim())) {
            setError('Group already exists');
            return;
        }

        setGroups(prev => [...prev, newGroup.trim()]);
        setNewGroup('');
        setError('');
    };

    return (
        <div className="max-w-xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-6">
            <h2 className="text-2xl font-bold mb-4">Your Groups</h2>
            <ul className="list-disc pl-5 space-y-1 mb-6">
                {groups.map((group, idx) => (
                    <li key={idx}> <Link to={`/groups/${encodeURIComponent(group)}`} className="text-blue-600 hover:underline">
                        {group}
                    </Link></li>
                ))}
                {groups.length === 0 && <li className="text-gray-500">No groups found</li>}
            </ul>

            <form onSubmit={handleAddGroup} className="space-y-4">
                <div>
                    <label className="label">
                        <span className="label-text">Create New Group</span>
                    </label>
                    <input
                        type="text"
                        className="input input-bordered w-full"
                        placeholder="Enter group name"
                        value={newGroup}
                        onChange={(e) => setNewGroup(e.target.value)}
                    />
                    {error && <p className="text-sm text-red-500 mt-1">{error}</p>}
                </div>
                <button type="submit" className="btn btn-primary w-full">
                    Create Group
                </button>
            </form>
        </div>
    );
};

export default GroupManagement;
