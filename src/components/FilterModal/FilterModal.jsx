import "./FilterModal.css";

function FilterModal({
  isOpen,
  onClose,
  filters,
  setFilters,
  onApply,
  onReset,
}) {
  if (!isOpen) return null;

  // Update filter values as the user types
  const handleChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="modal-overlay">
      <div className="filter-modal">

        <div className="modal-header">
          <h2>Filter Users</h2>

          <button
            className="close-btn"
            onClick={onClose}
          >
            ✕
          </button>
        </div>

        <div className="modal-body">

          <div className="form-group">
            <label>First Name</label>

            <input
              type="text"
              name="firstName"
              value={filters.firstName}
              onChange={handleChange}
              placeholder="Enter first name"
            />
          </div>

          <div className="form-group">
            <label>Last Name</label>

            <input
              type="text"
              name="lastName"
              value={filters.lastName}
              onChange={handleChange}
              placeholder="Enter last name"
            />
          </div>

          <div className="form-group">
            <label>Email</label>

            <input
              type="text"
              name="email"
              value={filters.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>Department</label>

            <input
              type="text"
              name="department"
              value={filters.department}
              onChange={handleChange}
              placeholder="Enter department"
            />
          </div>

        </div>

        <div className="modal-footer">

          <button
            className="reset-btn"
            onClick={onReset}
          >
            Reset
          </button>

          <button
            className="apply-btn"
            onClick={onApply}
          >
            Apply Filters
          </button>

        </div>

      </div>
    </div>
  );
}

export default FilterModal;