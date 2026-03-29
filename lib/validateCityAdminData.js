// validateCityAdminData.js
// Validation logic for City Admin CSV rows

export function validateCityAdminData(row, existingEmails = new Set()) {
  const errors = {};
  // Email validation
  if (!row.email || !/^\S+@\S+\.\S+$/.test(row.email)) {
    errors.email = "Invalid email format";
  } else if (existingEmails.has(row.email)) {
    errors.email = "Duplicate email";
  }
  // Phone validation
  if (!/^\d{10}$/.test(row.phone)) {
    errors.phone = "Phone must be 10 digits";
  }
  // DOB validation (must be valid date and age >= 21)
  const dob = new Date(row.dob);
  const now = new Date();
  const age = now.getFullYear() - dob.getFullYear() - (now < new Date(now.getFullYear(), dob.getMonth(), dob.getDate()) ? 1 : 0);
  if (isNaN(dob.getTime()) || age < 21) {
    errors.dob = "DOB invalid or under 21";
  }
  // Role validation
  if (row.role !== "city_admin") {
    errors.role = "Role must be city_admin";
  }
  // Name validation
  if (!row.fullName || row.fullName.length < 3 || /[^a-zA-Z\s]/.test(row.fullName)) {
    errors.fullName = "Name must be at least 3 letters, no special chars";
  }
  // Location validation
  ["state", "city", "district"].forEach((field) => {
    if (!row[field] || typeof row[field] !== "string" || !row[field].trim()) {
      errors[field] = `${field} required`;
    }
  });
  return errors;
}
