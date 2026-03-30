// EditCityAdminDialog.jsx
// Dialog for editing a City Admin row

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogDescription,
} from "../ui/dialog";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { X, Shield } from "lucide-react";

export default function EditCityAdminDialog({ isOpen, cityAdmin, onClose, onUpdate }) {
  const [formData, setFormData] = useState({});

  useEffect(() => {
    if (cityAdmin) setFormData(cityAdmin);
  }, [cityAdmin]);

  const handleSubmit = () => {
    onUpdate(formData);
    onClose();
  };

  if (!cityAdmin) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent
        className="
        max-w-3xl p-0
        rounded-3xl
        h-[90vh] flex flex-col overflow-hidden
        bg-gradient-to-b from-white via-gray-50 to-gray-100
        dark:from-slate-900 dark:via-slate-900 dark:to-slate-950
        border border-gray-200 dark:border-cyan-900
        shadow-[0_50px_150px_rgba(0,0,0,0.35)]
        [&>button]:hidden
      "
      >
        {/* TOP BAR */}
        <div className="h-1.5 bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500" />
        {/* HEADER */}
        <DialogHeader className="px-6 py-5 border-b border-gray-200 dark:border-cyan-900">
          <div className="flex justify-between items-center">
            <div>
              <DialogTitle className="text-xl font-bold text-gray-900 dark:text-white">
                Edit City Admin
              </DialogTitle>
              <DialogDescription className="text-sm text-teal-600 dark:text-cyan-300">
                Update city admin information
              </DialogDescription>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-800"
            >
              <X className="w-5 h-5 text-gray-500" />
            </button>
          </div>
        </DialogHeader>
        {/* BODY */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          <Section title="Basic Information">
            <Grid>
              <StyledInput label="Full Name" value={formData.fullName} onChange={(v) => setFormData({ ...formData, fullName: v })} />
              <StyledInput label="Email" value={formData.email} onChange={(v) => setFormData({ ...formData, email: v })} />
              <StyledInput label="Phone" value={formData.phone} onChange={(v) => setFormData({ ...formData, phone: v })} />
              <StyledInput type="date" label="DOB" value={formData.dob} onChange={(v) => setFormData({ ...formData, dob: v })} />
            </Grid>
          </Section>
          <Section title="Location Details">
            <Grid>
              <StyledInput label="State" value={formData.state} onChange={(v) => setFormData({ ...formData, state: v })} />
              <StyledInput label="City" value={formData.city} onChange={(v) => setFormData({ ...formData, city: v })} />
              <StyledInput label="District" value={formData.district} onChange={(v) => setFormData({ ...formData, district: v })} />
            </Grid>
          </Section>
        </div>
        {/* FOOTER */}
        <DialogFooter
          className="
          px-6 py-4
          border-t border-gray-200 dark:border-cyan-900
          flex justify-end gap-3
          backdrop-blur bg-white/80 dark:bg-slate-900/80
        "
        >
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            onClick={handleSubmit}
            className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white hover:scale-[1.02]"
          >
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function Section({ title, children }) {
  return (
    <div
      className="
      rounded-2xl p-5
      bg-gradient-to-b from-white to-gray-50
      dark:from-slate-800/50 dark:to-slate-900/40
      border border-gray-200 dark:border-cyan-900
      shadow-sm
    "
    >
      <h3 className="text-sm font-semibold mb-4 text-gray-700 dark:text-cyan-300">
        {title}
      </h3>
      {children}
    </div>
  );
}

function Grid({ children }) {
  return <div className="grid sm:grid-cols-2 gap-4">{children}</div>;
}

function StyledInput({ label, value, onChange, type = "text" }) {
  return (
    <div>
      <label className="text-xs text-gray-600 dark:text-gray-300">{label}</label>
      <Input
        type={type}
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        className="
          mt-1 rounded-xl
          bg-white dark:bg-slate-800
          border-gray-300 dark:border-cyan-800
          focus-visible:ring-2 focus-visible:ring-teal-500
          dark:focus-visible:ring-cyan-500
          hover:border-teal-400 dark:hover:border-cyan-400
        "
      />
    </div>
  );
}
