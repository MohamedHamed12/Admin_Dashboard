import React, { useState, useEffect } from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, TextField, Button } from "@mui/material";

export default function UserFormDialog({ open, onClose, onSave, user }) {
  const [formData, setFormData] = useState({ name: "", email: "", role: "" });

  useEffect(() => {
    if (user) {
      setFormData(user);
    } else {
      setFormData({ name: "", email: "", role: "" });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    onSave(formData);
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{user ? "Edit User" : "Add User"}</DialogTitle>
      <DialogContent>
        <TextField fullWidth margin="dense" label="Name" name="name" value={formData.name} onChange={handleChange} />
        <TextField fullWidth margin="dense" label="Email" name="email" value={formData.email} onChange={handleChange} />
        <TextField fullWidth margin="dense" label="Role" name="role" value={formData.role} onChange={handleChange} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        <Button onClick={handleSubmit} color="primary">
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}
