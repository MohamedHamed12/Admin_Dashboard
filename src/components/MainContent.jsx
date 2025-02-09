import React from "react";
import { Box } from "@mui/material";
import Users from "../pages/user/UsersPage";


export default function MainContent({ selectedItem }) {
  console.log("selectedItem", selectedItem);
  const getContent = () => {
    switch (selectedItem) {
      case "users":
        console.log("users in switch");
        return <Users />;
    
      default:
        return <div>Default</div>;
    }
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      {getContent()}
    </Box>
  );
}
