import { Box, Stack, Typography } from "@mui/material";
import BooksTable from "pages/BooksTables";
import React, { useEffect, useState } from "react";
import Sidebar from "../SideBar";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("Home");

  return (
    <Stack
      sx={{
        flexDirection: {
          sx: "column",
          md: "row",
        },
      }}
    >
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 2 },
        }}
      >
        <Sidebar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright 2022 JSM Media
        </Typography>
      </Box>
      <Box
        p={2}
        sx={{
          overflowY: "auto",
          height: "90vh",
          //border: "2px solid black",
          flex: 2,
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{
            color: "white",
            position: "sticky",
            top: 0,
            backgroundColor: "#fff",
          }}
        >
          {selectedCategory} <span style={{ color: "#0d6efd" }}>Screen</span>
        </Typography>
        <BooksTable />
      </Box>
    </Stack>
  );
};

export default Feed;
