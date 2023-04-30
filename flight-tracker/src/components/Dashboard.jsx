import React from 'react'

const Dashboard = () => {
  return (
<div className="flex flex-col items-center mt-10">
  <h1 className="text-2xl font-bold mb-6">Flight Information</h1>
  <table className="table-auto border border-gray-300 rounded-lg">
    <thead>
      <tr>
        <th className="px-4 py-2 bg-gray-100 border-b border-gray-300 text-left">Flight Number</th>
        <th className="px-4 py-2 bg-gray-100 border-b border-gray-300 text-left">Departure Airport</th>
        <th className="px-4 py-2 bg-gray-100 border-b border-gray-300 text-left">Departure Time</th>
        <th className="px-4 py-2 bg-gray-100 border-b border-gray-300 text-left">Arrival Airport</th>
        <th className="px-4 py-2 bg-gray-100 border-b border-gray-300 text-left">Arrival Time</th>
      </tr>
    </thead>
    <tbody>
      
        <tr>
          <td className="px-4 py-2 border-b border-gray-300"> flight_number </td>
          <td className="px-4 py-2 border-b border-gray-300"> departure_airport.name </td>
          <td className="px-4 py-2 border-b border-gray-300"> departure_time </td>
          <td className="px-4 py-2 border-b border-gray-300"> arrival_airport.name </td>
          <td className="px-4 py-2 border-b border-gray-300"> arrival_time </td>
        </tr>
      
    </tbody>
  </table>
</div>

  )
}

export default Dashboard
