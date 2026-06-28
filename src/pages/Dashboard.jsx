import { useMemo, useState } from "react";

import Header from "../components/Header/Header";
import Toolbar from "../components/Toolbar/Toolbar";
import Loader from "../components/Loader/Loader";
import EmptyState from "../components/EmptyState/EmptyState";
import UserTable from "../components/UserTable/UserTable";
import FilterModal from "../components/FilterModal/FilterModal";
import Pagination from "../components/Pagination/Pagination";
import UserForm from "../components/UserForm/UserForm";
import DeleteModal from "../components/DeleteModal/DeleteModal";
import {
  createUser,
  updateUser,
  deleteUser,
} from "../api/userService";
import { toast } from "react-toastify";

import useUsers from "../hooks/useUsers";

function Dashboard() {

  const {
  users,
  setUsers,
  loading,
  error,
  fetchUsers,
} = useUsers();

  const [searchTerm, setSearchTerm] = useState("");
  const [sortField, setSortField] = useState("id");
  const [sortOrder, setSortOrder] = useState("asc");

  const [showFilter, setShowFilter] = useState(false);
  const [showUserForm, setShowUserForm] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteUserId, setDeleteUserId] = useState(null);

const [filters, setFilters] = useState({
  firstName: "",
  lastName: "",
  email: "",
  department: "",
});

const [currentPage, setCurrentPage] = useState(1);
const [pageSize, setPageSize] = useState(10);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSort = (field) => {

    console.log("Sorting:", field);
  if (sortField === field) {
    setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
  } else {
    setSortField(field);
    setSortOrder("asc");
  }
};

const applyFilters = () => {
  setShowFilter(false);
};

const resetFilters = () => {
  setFilters({
    firstName: "",
    lastName: "",
    email: "",
    department: "",
  });
};

// Create a new user using the API and update the local state
const handleAddUser = async (newUser) => {
  try {
    const response = await createUser(newUser);

    setUsers((prev) => [
      response.data,
      ...prev,
    ]);

    toast.success("User added successfully!");

    setShowUserForm(false);

  } catch (error) {
    console.error(error);
    toast.error("Failed to add user.");
  }
};

  // Apply search, filters, and sorting before displaying users
  const filteredUsers = useMemo(() => {

    const search = searchTerm.toLowerCase();

    let filtered = users.filter((user)=>{

        const searchMatch=

            user.firstName.toLowerCase().includes(search) ||

            user.lastName.toLowerCase().includes(search) ||

            user.email.toLowerCase().includes(search) ||

            user.department.toLowerCase().includes(search);

        const filterMatch=

            user.firstName.toLowerCase().includes(filters.firstName.toLowerCase()) &&

            user.lastName.toLowerCase().includes(filters.lastName.toLowerCase()) &&

            user.email.toLowerCase().includes(filters.email.toLowerCase()) &&

            user.department.toLowerCase().includes(filters.department.toLowerCase());

        return searchMatch && filterMatch;

    });

    filtered.sort((a,b)=>{

        if(sortField==="id"){

            return sortOrder==="asc"

            ? a.id-b.id

            : b.id-a.id;

        }

        return sortOrder==="asc"

        ? a[sortField].localeCompare(b[sortField])

        : b[sortField].localeCompare(a[sortField]);

    });

    return filtered;

},[users,searchTerm,filters,sortField,sortOrder]);

// Update an existing user in the API and refresh the table
const handleEditUser = async (updatedUser) => {
  try {
    await updateUser(updatedUser.id, updatedUser);

    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === updatedUser.id ? updatedUser : user
      )
    );

    toast.success("User updated successfully!");

    setSelectedUser(null);
    setShowUserForm(false);

  } catch (error) {
    console.error(error);
    toast.error("Failed to update user.");
  }
};

// Delete the selected user after confirmation
const handleDeleteUser = async () => {
  try {
    await deleteUser(deleteUserId);

    setUsers((prevUsers) =>
      prevUsers.filter((user) => user.id !== deleteUserId)
    );

    toast.success("User deleted successfully!");

    setDeleteUserId(null);
    setShowDeleteModal(false);

  } catch (error) {
    console.error(error);
    toast.error("Failed to delete user.");
  }
};

const totalPages = Math.ceil(filteredUsers.length / pageSize);

const startIndex = (currentPage - 1) * pageSize;

// Calculate the users to display on the current page
const paginatedUsers = filteredUsers.slice(
  startIndex,
  startIndex + pageSize
);

  return (
    <div className="min-h-screen bg-slate-100">

      <Header />

      <div
    style={{
        width:"92%",
        maxWidth:"1300px",
        margin:"30px auto"
    }}
>

        <Toolbar
    searchTerm={searchTerm}
    onSearch={handleSearch}
    onFilter={() => setShowFilter(true)}
    onAddUser={() => setShowUserForm(true)}
/>

        {loading && <Loader />}

        {!loading && error && (
  <div
    style={{
      background: "#fee2e2",
      padding: "20px",
      borderRadius: "10px",
      textAlign: "center",
    }}
  >
    <p>{error}</p>

    <button
      onClick={fetchUsers}
      className="add-btn"
    >
      Retry
    </button>
  </div>
)}

        {!loading && !error && filteredUsers.length === 0 && (
          <EmptyState />
        )}

        {!loading && !error && users.length > 0 && (
          <UserTable
    users={paginatedUsers}
    sortField={sortField}
    sortOrder={sortOrder}
    onSort={handleSort}
    onEdit={(user)=>{
        setSelectedUser(user);
        setShowUserForm(true);
    }}
    onDelete={(id)=>{
        setDeleteUserId(id);
        setShowDeleteModal(true);
    }}
/>
        )}

        <Pagination
  currentPage={currentPage}
  totalPages={totalPages}
  pageSize={pageSize}
  setPageSize={setPageSize}
  setCurrentPage={setCurrentPage}
/>

      </div>
        <FilterModal
    isOpen={showFilter}
    onClose={() => setShowFilter(false)}
    filters={filters}
    setFilters={setFilters}
    onApply={applyFilters}
    onReset={resetFilters}
/>

<UserForm
  isOpen={showUserForm}
  onClose={() => {
    setShowUserForm(false);
    setSelectedUser(null);
  }}
  onSave={selectedUser ? handleEditUser : handleAddUser}
  initialData={selectedUser}
/>

<DeleteModal
    isOpen={showDeleteModal}
    onClose={()=>setShowDeleteModal(false)}
    onConfirm={handleDeleteUser}
/>
    </div>
  );
}

export default Dashboard;