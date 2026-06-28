import { useEffect, useState } from "react";
import { getUsers } from "../api/userService";
import { splitName, assignDepartment } from "../utils/helpers";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch users from the mock API and normalize the data
  const fetchUsers = async () => {
    try {
      setLoading(true);
      setError("");

      const response = await getUsers();

      const mappedUsers = response.data.map((user) => {
        const { firstName, lastName } = splitName(user.name);

        return {
          id: user.id,
          firstName,
          lastName,
          email: user.email,
          department: assignDepartment(user.id),
        };
      });

      setUsers(mappedUsers);
    } catch (err) {
      setError("Failed to fetch users. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return {
    users,
    setUsers,
    loading,
    error,
    fetchUsers,
  };
};

export default useUsers;