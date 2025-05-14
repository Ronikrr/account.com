import { useState } from 'react'
import Expence from './Expence'

const AddExpence = () => {
    const [activeTab, setactiveTab] = useState('add')
    return (
        <>
            <div className="max-w-2xl mx-auto mt-5">
                <div role="tablist" className="tabs tabs-boxed">
                    <button role="tab" className={`tab  ${activeTab === 'add' ? "tab-active" : ""}`} onClick={() => setactiveTab('add')} >Add Expense</button>
                    <button role="tab" className={`tab  ${activeTab === 'list' ? "tab-active" : ""}`} onClick={() => setactiveTab('list')}>Expense List</button>
                </div>

            </div>
            {activeTab === 'add' && (
                <div className="w-full mx-auto bg-white shadow-lg p-6 rounded-xl mt-6">
                    <h2 className="text-2xl font-semibold mb-4">Add Expense</h2>
                    <form className="space-y-4">
                        <div className="flex w-full gap-5">
                            <div className='w-full lg:w-1/2'  >
                                <label className="label">
                                    <span className="label-text">Title</span>
                                </label>
                                <input
                                    name="title"
                                    type="text"
                                    className="input input-bordered w-full"

                                    required
                                />
                            </div>

                            <div className='w-full lg:w-1/2'  >
                                <label className="label">
                                    <span className="label-text">Amount (₹)</span>
                                </label>
                                <input
                                    name="amount"
                                    type="number"
                                    className="input input-bordered w-full"

                                    required
                                />
                            </div>
                        </div>

                        <div>
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <select
                                name="category"
                                className="select select-bordered w-full"

                                required
                            >
                                <option value="">Select category</option>
                                <option value="Food">Food</option>
                                <option value="Travel">Travel</option>
                                <option value="Shopping">Shopping</option>
                                <option value="Bills">Bills</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Select Group</span>
                            </label>
                            <select
                                name="category"
                                className="select select-bordered w-full"

                                required
                            >
                                <option value="">Select Groups</option>
                                <option value="group1">group1</option>
                                <option value="group2">group2</option>
                                <option value="group3">group3</option>

                                <option value="None">None</option>
                            </select>
                        </div>

                        <button className="btn btn-primary w-full" type="submit">
                            Add Expense
                        </button>
                    </form>
                </div>
            )}
            {activeTab === "list" && (
                <Expence />
            )}
        </>
    )
}

export default AddExpence