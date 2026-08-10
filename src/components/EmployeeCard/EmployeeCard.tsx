import type { Employee } from "../../types";
import "./EmployeeCard.css";

interface EmployeeCardProps {
  employee: Employee;
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0].toUpperCase())
    .join("");
}

function EmployeeCard({ employee, onEdit, onDelete }: EmployeeCardProps) {
  return (
    <div className="card">
      <div className="card-header">
        <div className="avatar">{getInitials(employee.name)}</div>
        <div>
          <h3>{employee.name}</h3>
          <span className="designation">{employee.designation}</span>
        </div>
      </div>

      <span className="badge">{employee.department}</span>

      <dl className="card-details">
        <dt>ID</dt>
        <dd>{employee.id}</dd>
        <dt>Email</dt>
        <dd className="truncate">{employee.email}</dd>
        <dt>Mobile</dt>
        <dd>{employee.mobile}</dd>
      </dl>

      <div className="card-actions">
        <button onClick={() => onEdit(employee.id)}>Edit</button>
        <button className="danger" onClick={() => onDelete(employee.id)}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default EmployeeCard;
