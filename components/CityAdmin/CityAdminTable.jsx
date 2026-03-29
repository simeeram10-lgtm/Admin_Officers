// CityAdminTable.jsx
// Preview and edit table for City Admin onboarding

import React from "react";
import { Button } from "../ui/button";

export default function CityAdminTable({ data, onEdit, onDelete, onAdd, loading }) {
  return (
    <div className="overflow-x-auto rounded-lg shadow-md bg-white dark:bg-dark-400 p-4 mt-6">
      <table className="min-w-full divide-y divide-specialBlue-500">
        <thead className="bg-specialBlue-500 text-white">
          <tr>
            <th className="px-4 py-2">Full Name</th>
            <th className="px-4 py-2">Email</th>
            <th className="px-4 py-2">Phone</th>
            <th className="px-4 py-2">DOB</th>
            <th className="px-4 py-2">State</th>
            <th className="px-4 py-2">City</th>
            <th className="px-4 py-2">District</th>
            <th className="px-4 py-2">Role</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-specialBlue-100">
          {data && data.length > 0 ? (
            data.map((row, idx) => (
              <tr key={idx} className="hover:bg-specialBlue-100/40 transition-colors">
                <td className="px-4 py-2 font-medium">{row.fullName}</td>
                <td className="px-4 py-2">{row.email}</td>
                <td className="px-4 py-2">{row.phone}</td>
                <td className="px-4 py-2">{row.dob}</td>
                <td className="px-4 py-2">{row.state}</td>
                <td className="px-4 py-2">{row.city}</td>
                <td className="px-4 py-2">{row.district}</td>
                <td className="px-4 py-2 text-center font-semibold text-specialGreen-500">city_admin</td>
                <td className="px-4 py-2 flex gap-2">
                  <Button size="sm" variant="outline" onClick={() => onEdit(idx)} className="border-specialGreen-500 text-specialGreen-500 hover:bg-specialGreen-500 hover:text-white">Edit</Button>
                  <Button size="sm" variant="outline" onClick={() => onDelete(idx)} className="border-specialRed-500 text-specialRed-500 hover:bg-specialRed-500 hover:text-white">Delete</Button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={9} className="text-center text-dark-600 py-6">No data to preview.</td>
            </tr>
          )}
        </tbody>
      </table>
      <div className="flex justify-end mt-4">
        <Button onClick={onAdd} className="bg-specialBlue-500 hover:bg-specialBlue-600 text-white font-semibold px-4 py-2 rounded-lg shadow">Add Row</Button>
      </div>
    </div>
  );
}
