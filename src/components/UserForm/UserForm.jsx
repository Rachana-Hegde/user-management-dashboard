import { useState, useEffect } from "react";
import "./UserForm.css";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  department: "",
};

function UserForm({
  isOpen,
  onClose,
  onSave,
  initialData = null,
}) {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData(initialData);
    } else {
      setFormData(initialState);
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Validate user input before submitting the form
  const validate = () => {
  const newErrors = {};

  // First Name
  if (!formData.firstName.trim()) {
    newErrors.firstName = "First name is required";
  } else if (!/^[A-Za-z ]+$/.test(formData.firstName)) {
    newErrors.firstName = "Only alphabets are allowed";
  }

  // Last Name
  if (!formData.lastName.trim()) {
    newErrors.lastName = "Last name is required";
  } else if (!/^[A-Za-z ]+$/.test(formData.lastName)) {
    newErrors.lastName = "Only alphabets are allowed";
  }

  // Email
  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    newErrors.email = "Invalid email address";
  }

  // Department
  if (!formData.department.trim()) {
    newErrors.department = "Department is required";
  }

  setErrors(newErrors);

  return Object.keys(newErrors).length === 0;
};

  // Submit the form only if all validation rules pass
  const handleSubmit = async () => {
  if (!validate()) return;

  setLoading(true);

  try {
    await onSave(formData);
    setFormData(initialState);
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="modal-overlay">

      <div className="user-form">

        <div className="modal-header">
          <h2>
  {initialData ? "Edit User" : "Add User"}
</h2>

          <button onClick={onClose}>✕</button>
        </div>

        <div className="modal-body">

          <input
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
          />

          <span>{errors.firstName}</span>

          <input
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
          />

          <span>{errors.lastName}</span>

          <input
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <span>{errors.email}</span>

          <select
  name="department"
  value={formData.department}
  onChange={handleChange}
>
  <option value="">Select Department</option>
  <option value="Human Resources">Human Resources</option>
  <option value="Finance">Finance</option>
  <option value="Marketing">Marketing</option>
  <option value="Sales">Sales</option>
  <option value="IT">IT</option>
  <option value="Engineering">Engineering</option>
</select>

          <span>{errors.department}</span>

        </div>

        <div className="modal-footer">

          <button
            className="cancel-btn"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
    className="save-btn"
    onClick={handleSubmit}
    disabled={loading}
>
    {loading ? "Saving..." : "Save User"}
</button>

        </div>

      </div>

    </div>
  );
}

export default UserForm;