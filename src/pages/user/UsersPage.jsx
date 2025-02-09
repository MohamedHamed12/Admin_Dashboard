import React, { useState } from "react";
import { Container, Button, Typography } from "@mui/material";
import UserTable from "./UserTable";
import UserFormDialog from "./UserFormDialog";

export default function UsersPage() {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  ]);

  const [open, setOpen] = useState(false);
  const [editUser, setEditUser] = useState(null);

  const handleOpen = (user = null) => {
    setEditUser(user);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleSave = (user) => {
    if (user.id) {
      setUsers(users.map((u) => (u.id === user.id ? user : u)));
    } else {
      setUsers([...users, { ...user, id: users.length + 1 }]);
    }
    handleClose();
  };

  const handleDelete = (id) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        User Management
      </Typography>
      <Button variant="contained" color="primary" onClick={() => handleOpen()}>
        Add User
      </Button>
      <UserTable users={users} onEdit={handleOpen} onDelete={handleDelete} />
      <UserFormDialog open={open} onClose={handleClose} onSave={handleSave} user={editUser} />
    </Container>
  );
}
