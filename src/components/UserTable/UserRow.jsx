import "./UserTable.css";
import { FaEdit, FaTrash } from "react-icons/fa";

function UserRow({
    user,
    onEdit,
    onDelete
}) {
  return (
    <tr>

      <td>{user.id}</td>

      <td>{user.firstName}</td>

      <td>{user.lastName}</td>

      <td>{user.email}</td>

      <td>
        <span className="department">
          {user.department}
        </span>
      </td>

      <td>

        <div className="actions">

          <button
  className="edit-btn"
  onClick={() => onEdit(user)}
>
            <FaEdit/>
          </button>

          <button
    className="delete-btn"
    onClick={()=>onDelete(user.id)}
>
            <FaTrash/>
          </button>

        </div>

      </td>

    </tr>
  );
}

export default UserRow;