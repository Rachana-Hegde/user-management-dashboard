import "./UserTable.css";
import UserRow from "./UserRow";
import { FaSort, FaSortUp, FaSortDown } from "react-icons/fa";

function UserTable({
    users,
    sortField,
    sortOrder,
    onSort,
    onEdit,
    onDelete
}) {

    const renderSortIcon = (field) => {
  if (sortField !== field) {
    return <FaSort className="sort-icon" />;
  }

  return sortOrder === "asc"
    ? <FaSortUp className="sort-icon active" />
    : <FaSortDown className="sort-icon active" />;
};
  return (
    <div className="table-container">
      {/* Display the list of users with sortable columns */}
      <table>
        <thead>
  <tr>
    <th onClick={() => onSort("id")}>
  <div className="header-cell">
    ID
    {renderSortIcon("id")}
  </div>
</th>

    <th onClick={() => onSort("firstName")}>
  <div className="header-cell">
    First Name
    {renderSortIcon("firstName")}
  </div>
</th>

    <th onClick={() => onSort("lastName")}>
  <div className="header-cell">
    Last Name
    {renderSortIcon("lastName")}
  </div>
</th>


    <th onClick={() => onSort("email")}>
  <div className="header-cell">
    Email
    {renderSortIcon("email")}
  </div>
</th>

    <th onClick={() => onSort("department")}>
  <div className="header-cell">
    Department
    {renderSortIcon("department")}
  </div>
</th>

    <th style={{ textAlign: "center" }}>Actions</th>
  </tr>
</thead>
        <tbody>

          {users.map(user=>(
            <UserRow
    key={user.id}
    user={user}
    onEdit={onEdit}
    onDelete={onDelete}
/>
          ))}

        </tbody>

      </table>
    </div>
  );
}

export default UserTable;