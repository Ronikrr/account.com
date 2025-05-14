import { useParams } from "react-router-dom"

const GroupDetails = () => {
    const { groupName } = useParams();
  return (
      <div className="max-w-2xl mx-auto p-6 bg-white shadow rounded-xl mt-6">
          <h1 className="text-2xl font-bold mb-4">Group: {decodeURIComponent(groupName)}</h1>
          {/* You can list group members, shared expenses, buttons to add/view expenses, etc. */}
          <p className="text-gray-600">Here you can manage group expenses or view group activity.</p>
      </div>
  )
}

export default GroupDetails