// AddCityAdminDialog.jsx
// Dialog for adding a new City Admin row

import { useState } from "react";
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
import { X, UserPlus } from "lucide-react";

export default function AddCityAdminDialog({ isOpen, onClose, onAdd }) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    state: "",
    city: "",
    district: "",
    role: "city_admin",
  });

  const handleSubmit = () => {
    if (!formData.fullName || !formData.email) return;
    onAdd(formData);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl p-0 rounded-3xl h-[90vh] flex flex-col overflow-hidden border border-gray-200 dark:border-cyan-900 bg-gradient-to-b from-white via-gray-50 to-gray-100 dark:from-slate-900 dark:via-slate-900 dark:to-slate-950 shadow-[0_40px_120px_rgba(0,0,0,0.25)] [&>button]:hidden">
        <DialogDescription>
          Fill in the details to add a new city admin.
        </DialogDescription>
        {/* TOP GLOW BAR */}
        <div className="h-1.5 bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500" />

        {/* HEADER */}
        <DialogHeader className="px-6 pt-5 pb-4 border-b border-gray-200 dark:border-cyan-900">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 shadow-lg">
                <UserPlus className="text-white w-5 h-5" />
              </div>

              <div>
                <DialogTitle className="text-lg font-bold text-gray-900 dark:text-white">
                  Add City Admin
                </DialogTitle>
                <p className="text-xs text-teal-600 dark:text-cyan-300">
                  Pre-provision account for CityCare
                </p>
              </div>
            </div>

            {/* CUSTOM CLOSE ONLY */}
            <button
              onClick={onClose}
              className="p-2 rounded-xl hover:bg-gray-100 dark:hover:bg-slate-800 transition"
            >
              <X className="w-5 h-5 text-cyan-600" />
            </button>
          </div>
        </DialogHeader>
        {/* BODY */}
        <div className="max-h-[60vh] overflow-y-auto px-6 py-5 space-y-6" style={{ scrollPaddingTop: '120px' }}>
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
        <DialogFooter className="px-6 py-4 border-t border-gray-200 dark:border-cyan-900 flex justify-end gap-3 backdrop-blur bg-white/80 dark:bg-slate-900/80">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button onClick={handleSubmit} className="bg-teal-500 hover:bg-cyan-600 text-white font-semibold px-4 py-2 rounded-lg shadow">
            Add City Admin
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

function Section({ title, children }) {
  // Match SystemAdmin section style
  return (
    <div
      className="rounded-2xl p-5 bg-gradient-to-b from-white to-gray-50 dark:from-slate-800/50 dark:to-slate-900/40 border border-gray-200 dark:border-cyan-900 shadow-sm"
    >
      <h3 className="text-sm font-semibold mb-4 text-gray-700 dark:text-cyan-300 tracking-wide uppercase">{title}</h3>
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
      <label className="text-xs mb-1 block text-specialBlue-500 dark:text-specialGreen-500">{label}</label>
      <Input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="bg-white dark:bg-dark-600 border-specialBlue-200 dark:border-specialGreen-700 focus-visible:ring-2 focus-visible:ring-specialGreen-500 dark:focus-visible:ring-specialBlue-500"
      />
    </div>
  );
}
