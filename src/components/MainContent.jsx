import React from "react";
import { Typography, Box } from "@mui/material";

export default function MainContent({ selectedItem }) {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <Typography variant="h4" sx={{ mb: 2 }}>
        {selectedItem}
      </Typography>
      <Typography>
        This is the content for <strong>{selectedItem}</strong>.
      </Typography>
    </Box>
  );
}
