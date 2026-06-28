import { FaUsersSlash } from "react-icons/fa";

import "./EmptyState.css";

function EmptyState() {
  return (
    <div className="empty-state">

      <FaUsersSlash size={60} />

      <h2>No Users Found</h2>

      <p>
        Try changing your search or filters.
      </p>

    </div>
  );
}

export default EmptyState;