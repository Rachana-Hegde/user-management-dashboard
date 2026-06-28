import "./DeleteModal.css";

function DeleteModal({
  isOpen,
  onClose,
  onConfirm,
}) {
  if (!isOpen) return null;

  return (
    <div className="delete-overlay">

      <div className="delete-modal">

        <h2>Delete User</h2>

        <p>
          Are you sure you want to delete this user?
        </p>

        <div className="delete-buttons">

          <button
            className="cancel-delete"
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="confirm-delete"
            onClick={onConfirm}
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default DeleteModal;