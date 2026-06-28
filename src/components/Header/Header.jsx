import "./Header.css";
import { FaUsers } from "react-icons/fa";

function Header() {
  return (
    <header className="header">
      <div className="header-container">

        <div className="header-icon">
          <FaUsers />
        </div>

        <div>
          <h1>User Management Dashboard</h1>
          <p>Manage, search and organize users efficiently.</p>
        </div>

      </div>
    </header>
  );
}

export default Header;