import { useState, useEffect, type ChangeEvent, type FormEvent } from "react";
import type { Employee } from "../../types";
import "./AddEmployeeForm.css";

export type NewEmployee = Omit<Employee, "id">;

interface AddEmployeeFormProps {
  employee?: Employee;
  onSubmit: (employee: NewEmployee) => void;
}

const emptyForm: NewEmployee = {
  name: "",
  department: "",
  designation: "",
  email: "",
  mobile: "",
};

function AddEmployeeForm({ employee, onSubmit }: AddEmployeeFormProps) {
  const [form, setForm] = useState<NewEmployee>(employee ?? emptyForm);

  // keep the form in sync when switching which employee is being edited
  useEffect(() => {
    setForm(employee ?? emptyForm);
  }, [employee]);

  const handleChange = (field: keyof NewEmployee) => (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [field]: e.currentTarget.value });
  };

  const handleReset = () => setForm(employee ?? emptyForm);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.name) return;
    onSubmit(form);
    if (!employee) handleReset();
  };

  return (
    <form onSubmit={handleSubmit} className="employee-form">
      <h2>{employee ? "Update Employee" : "Add New Employee"}</h2>

      <label className="field">
        <span>Full Name</span>
        <input placeholder="e.g. Priya Nair" value={form.name} onChange={handleChange("name")} required />
      </label>

      <label className="field">
        <span>Department</span>
        <input placeholder="e.g. Engineering" value={form.department} onChange={handleChange("department")} required />
      </label>

      <label className="field">
        <span>Designation</span>
        <input placeholder="e.g. Software Engineer" value={form.designation} onChange={handleChange("designation")} required />
      </label>

      <label className="field">
        <span>Email</span>
        <input placeholder="e.g. priya.nair@example.com" type="email" value={form.email} onChange={handleChange("email")} required />
      </label>

      <label className="field">
        <span>Mobile Number</span>
        <input placeholder="10-digit number" type="tel" pattern="[0-9]{10}" value={form.mobile} onChange={handleChange("mobile")} required />
      </label>

      <div className="form-actions">
        <button type="submit" className="primary">{employee ? "Update Employee" : "Add Employee"}</button>
        <button type="button" onClick={handleReset}>Reset</button>
      </div>
    </form>
  );
}

export default AddEmployeeForm;
