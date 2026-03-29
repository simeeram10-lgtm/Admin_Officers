// CityAdminTable.jsx
// Preview and edit table for City Admin onboarding

import React from "react";
import { Button } from "../ui/button";

export default function CityAdminTable({ data, onEdit, onDelete, onAdd, loading }) {
  if (!data || data.length === 0) {
    return (
      <div className="h-72 grid place-items-center rounded-3xl border-2 border-dashed border-teal-400/40 dark:border-cyan-700/40 bg-gradient-to-br from-teal-100/40 to-cyan-100/40 dark:from-slate-900 dark:to-slate-950 mt-6">
        <div className="text-center">
          <h3 className="text-xl font-bold text-teal-800 dark:text-white">
            No Admins
          </h3>
          <p className="text-teal-600 dark:text-cyan-300 text-sm">
            Upload CSV or add manually
          </p>
        </div>
      </div>
    );
  }
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
          {data.map((row, idx) => (
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
          ))}
        </tbody>
      </table>
      <div className="flex justify-end mt-4">
        <Button onClick={onAdd} className="bg-specialBlue-500 hover:bg-specialBlue-600 text-white font-semibold px-4 py-2 rounded-lg shadow">Add Row</Button>
      </div>
    </div>
  );
}
