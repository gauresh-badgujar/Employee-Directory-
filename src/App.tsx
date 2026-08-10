import { useState } from "react";
import type { Employee } from "./types";
import EmployeeList from "./components/EmployeeList/EmployeeList";
import AddEmployeeForm, { type NewEmployee } from "./components/AddEmployeeForm/AddEmployeeForm";
import "./App.css";

const initialEmployees: Employee[] = [
  { id: 1, name: "Asha Rao", department: "Engineering", designation: "Frontend Developer", email: "asha.rao@example.com", mobile: "9876543210" },
  { id: 2, name: "Vikram Shah", department: "HR", designation: "HR Manager", email: "vikram.shah@example.com", mobile: "9876543211" },
  { id: 3, name: "Meera Iyer", department: "Sales", designation: "Sales Executive", email: "meera.iyer@example.com", mobile: "9876543212" },
];

type View = "list" | "add";

function App() {
  const [employees, setEmployees] = useState<Employee[]>(initialEmployees);
  const [view, setView] = useState<View>("list");
  const [editingId, setEditingId] = useState<number | null>(null);

  const editingEmployee = employees.find((emp) => emp.id === editingId);

  const goToList = () => {
    setEditingId(null);
    setView("list");
  };

  const handleEdit = (id: number) => {
    setEditingId(id);
    setView("add");
  };

  const isDuplicateEmail = (email: string, ignoreId?: number) =>
    employees.some(
      (emp) => emp.id !== ignoreId && emp.email.toLowerCase() === email.toLowerCase()
    );

  const handleSubmit = (employee: NewEmployee) => {
    if (isDuplicateEmail(employee.email, editingId ?? undefined)) {
      alert("An employee with this email already exists.");
      return;
    }

    if (editingId !== null) {
      setEmployees((prev) =>
        prev.map((emp) => (emp.id === editingId ? { ...employee, id: editingId } : emp))
      );
    } else {
      setEmployees((prev) => {
        const nextId = prev.length ? Math.max(...prev.map((emp) => emp.id)) + 1 : 1;
        return [...prev, { ...employee, id: nextId }];
      });
    }
    goToList();
  };

  const handleDelete = (id: number) => {
    setEmployees((prev) => prev.filter((emp) => emp.id !== id));
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>Employee Directory</h1>
        <p>Manage your team's records in one place</p>
      </header>
      <nav className="tabs">
        <button className={view === "list" ? "active" : ""} onClick={goToList}>
          Employee List
        </button>
        <button
          className={view === "add" ? "active" : ""}
          onClick={() => {
            setEditingId(null);
            setView("add");
          }}
        >
          Add Employee
        </button>
      </nav>
      {view === "list" ? (
        <EmployeeList employees={employees} onEdit={handleEdit} onDelete={handleDelete} />
      ) : (
        <AddEmployeeForm employee={editingEmployee} onSubmit={handleSubmit} />
      )}
    </div>
  );
}

export default App;
