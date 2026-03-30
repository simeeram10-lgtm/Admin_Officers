// page.jsx for City Admin Pre-Provisioning
'use client';

import React, { useState } from 'react';
import { Plus, Users, UploadCloud, Trash2 } from "lucide-react";
import CSVUploader from '@/components/CityAdmin/CSVUploader';
import CityAdminTable from '@/components/CityAdmin/CityAdminTable';
import AddCityAdminDialog from '@/components/CityAdmin/AddCityAdminDialog';
import EditCityAdminDialog from '@/components/CityAdmin/EditCityAdminDialog';
import { parseCSVFile } from '@/lib/csvParser';
import { validateCityAdminData } from '@/lib/validateCityAdminData';
import { generatePassword } from '@/lib/generatePassword';
import { toast } from 'sonner';
import { ModeToggle } from '@/components/ModeToggle';

export default function CityAdminPage() {
  const [admins, setAdmins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isAddDialogOpen, setIsAddDialogOpen] = useState(false);
  const [editIdx, setEditIdx] = useState(null);

  // Handle CSV upload and parsing
  const handleFileParsed = async (file) => {
    setLoading(true);
    try {
      const parsed = await parseCSVFile(file);
      const emails = new Set();
      const validRows = [];
      let hasInvalid = false;
      parsed.forEach((row, idx) => {
        const errors = validateCityAdminData(row, emails);
        if (Object.keys(errors).length === 0) {
          emails.add(row.email);
          validRows.push({ ...row, password: generatePassword(row.fullName, row.dob) });
        } else {
          hasInvalid = true;
          toast.error(`Row ${idx + 2} invalid: ${Object.values(errors).join(', ')}`);
        }
      });
      setAdmins(validRows);
      if (!hasInvalid) toast.success('CSV uploaded and validated!');
    } catch (err) {
      toast.error('Failed to parse CSV: ' + err.message);
    }
    setLoading(false);
  };

  // Add new row
  const handleAddAdmin = (row) => {
    setAdmins([...admins, { ...row, password: generatePassword(row.fullName, row.dob) }]);
    toast.success('City Admin added');
  };

  // Edit row
  const handleEdit = (idx) => {
    setEditIdx(idx);
  };

  // Update row
  const handleUpdate = (row) => {
    setAdmins(admins.map((d, i) => (i === editIdx ? { ...row, password: generatePassword(row.fullName, row.dob) } : d)));
    setEditIdx(null);
    toast.success('City Admin updated');
  };

  // Delete row
  const handleDelete = (idx) => {
    setAdmins(admins.filter((_, i) => i !== idx));
    toast.success('City Admin deleted');
  };

  // Delete all
  const handleDeleteAll = () => {
    if (admins.length && confirm('Delete all city admins?')) {
      setAdmins([]);
      toast.success('All city admins deleted');
    }
  };

  const handleSubmitToDatabase = () => {
    if (!admins.length) {
      toast.error("No city admins to submit!");
      return;
    }
    // You can add your transform logic here if needed
    console.log("=== CITYCARE DATABASE SUBMISSION ===");
    console.log(admins);
    console.log("====================================");
    toast.success(`Submitted ${admins.length} city admins`);
  };


  return (
    <div className="w-full h-full min-h-screen bg-white dark:bg-slate-950 px-4 sm:px-6 py-6">
      {/* HEADER */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 dark:from-teal-400 dark:to-cyan-400 bg-clip-text text-transparent">
            City Admin Pre-Provisioning
          </h1>
          <p className="text-sm text-teal-700/80 dark:text-cyan-300/80 mt-1">
            Bulk onboard and manage city admin accounts efficiently
          </p>
        </div>
        <div className="flex items-center gap-3 flex-wrap justify-end mt-2 md:mt-0">
          <ModeToggle />
          <button
            onClick={() => setShowAdd(true)}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 active:scale-95"
          >
            <Plus className="w-4 h-4" />
            Add Admin
          </button>
        </div>
      </div>

      <div className="w-full max-w-screen-2xl flex flex-col gap-8 mx-auto px-0 sm:px-2 md:px-4 lg:px-8">
        {/* UPLOAD SECTION */}
        <div className="bg-white dark:bg-slate-900 border border-teal-100 dark:border-cyan-800 rounded-2xl p-12 shadow-lg transition-all duration-300 w-full min-h-[300px] flex flex-col justify-center mt-8">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-2 rounded-lg bg-teal-100 dark:bg-cyan-900/30">
              <UploadCloud className="w-5 h-5 text-teal-600 dark:text-cyan-300" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Bulk Upload</h2>
          </div>
          <CSVUploader onFileParsed={handleFileParsed} loading={loading} />
        </div>
        {/* TABLE SECTION */}
        <div className="bg-white dark:bg-slate-900 border border-teal-100 dark:border-cyan-800 rounded-2xl p-8 shadow-lg transition-all duration-300 w-full min-h-[340px] mt-0 flex flex-col">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-teal-100 dark:bg-cyan-900/30">
                <Users className="w-5 h-5 text-teal-600 dark:text-cyan-300" />
              </div>
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                City Admins ({admins.length})
              </h2>
            </div>
            {admins.length > 0 && (
              <button
                onClick={handleDeleteAll}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm font-medium shadow-sm hover:shadow-md transition"
              >
                <Trash2 className="w-4 h-4" />
                Delete All
              </button>
            )}
          </div>
          <CityAdminTable
            data={admins}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onAdd={() => setIsAddDialogOpen(true)}
            loading={loading}
          />
        </div>
      </div>

      {/* DIALOGS */}
      <AddCityAdminDialog isOpen={isAddDialogOpen} onClose={() => setIsAddDialogOpen(false)} onAdd={handleAddAdmin} />
      <EditCityAdminDialog
        isOpen={editIdx !== null}
        cityAdmin={editIdx !== null ? admins[editIdx] : null}
        onClose={() => setEditIdx(null)}
        onUpdate={handleUpdate}
      />
    </div>
  );
}
