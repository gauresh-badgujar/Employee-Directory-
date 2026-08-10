import { useState, type ChangeEvent } from "react";
import type { Employee } from "../../types";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import "./EmployeeList.css";

interface EmployeeListProps {
  employees: Employee[];
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

function EmployeeList({ employees, onEdit, onDelete }: EmployeeListProps) {
  const [search, setSearch] = useState<string>("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const filtered = employees.filter((emp) =>
    emp.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={handleSearchChange}
          className="search-input"
        />
      </div>
      <p className="result-count">
        {filtered.length} of {employees.length} employee{employees.length === 1 ? "" : "s"}
      </p>
      {filtered.length === 0 ? (
        <div className="empty-state">
          <p>No employees found.</p>
        </div>
      ) : (
        <div className="card-grid">
          {filtered.map((emp) => (
            <EmployeeCard key={emp.id} employee={emp} onEdit={onEdit} onDelete={onDelete} />
          ))}
        </div>
      )}
    </div>
  );
}

export default EmployeeList;
