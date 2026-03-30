
import React from "react";
import { Button } from "../ui/button";
import { Edit3, Trash2 } from "lucide-react";

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
    <div className="hidden lg:block bg-white dark:bg-slate-900 rounded-3xl border border-teal-400/30 dark:border-cyan-700/40 shadow-xl overflow-hidden mt-6">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
              <th className="px-4 py-3 text-left">Full Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Phone</th>
              <th className="px-4 py-3">DOB</th>
              <th className="px-4 py-3">State</th>
              <th className="px-4 py-3">City</th>
              <th className="px-4 py-3">District</th>
              <th className="px-4 py-3">Role</th>
              <th className="px-4 py-3 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => (
              <tr
                key={idx}
                className="border-b border-teal-100 dark:border-cyan-900 hover:bg-teal-50 dark:hover:bg-cyan-950/40 transition"
              >
                <td className="px-4 py-3 font-medium text-gray-900 dark:text-white">{row.fullName}</td>
                <td className="px-4 py-3 text-gray-700 dark:text-gray-300">{row.email}</td>
                <td className="px-4 py-3">{row.phone}</td>
                <td className="px-4 py-3">{row.dob}</td>
                <td className="px-4 py-3">{row.state}</td>
                <td className="px-4 py-3">{row.city}</td>
                <td className="px-4 py-3">{row.district}</td>
                <td className="px-4 py-3 text-center font-semibold">
                  <span className="px-2 py-1 rounded-full text-xs font-semibold bg-cyan-100 text-cyan-800 dark:bg-cyan-900/40 dark:text-cyan-200">
                    city_admin
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => onEdit(idx)}
                      className="p-2 rounded-lg bg-teal-100 hover:bg-teal-200 dark:bg-teal-900/40 dark:hover:bg-teal-800/60 transition"
                      title="Edit"
                    >
                      <Edit3 className="w-4 h-4 text-teal-700 dark:text-teal-300" />
                    </button>
                    <button
                      onClick={() => onDelete(idx)}
                      className="p-2 rounded-lg bg-red-100 hover:bg-red-200 dark:bg-red-900/40 dark:hover:bg-red-800/60 transition"
                      title="Delete"
                    >
                      <Trash2 className="w-4 h-4 text-red-600" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-end mt-4 p-4">
        <Button onClick={onAdd} className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold px-4 py-2 rounded-lg shadow">Add Row</Button>
      </div>
    </div>
  );
}
