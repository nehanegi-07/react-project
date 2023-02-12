import React from "react";
import { IconButton, Paper, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { logo } from "../../utils/constants";
import { Search } from "@mui/icons-material";
import MDBox from "components/MDBox";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        top: 0,
        backgroundColor: "#fff",
        justifyContent: "space-between",
        borderBottom: "1px solid black",
      }}
    >
      <MDBox sx={{ display: "flex", gap: 2 }}>
        <Link path="/">
          <img src={logo} alt="logo" height={45} />
        </Link>
        <Typography
          variant="h4"
          fontWeight="bold"
          mb={2}
          sx={{ color: "#0d6efd" }}
        >
          BookShelf
        </Typography>
      </MDBox>

      <Paper
        component="form"
        onSubmit={() => {}}
        sx={{
          borderRadius: 20,
          border: "1px solid #e3e3e3",
          pl: 2,
          boxShadow: "none",
          mr: { sm: 5 },
        }}
      >
        <input
          placeholder="search..."
          style={{
            border: "none",
            outline: "none",
          }}
          value=""
          onChange={() => {}}
        />
        <IconButton type="submit" sx={{ p: "10px", color: "#0d6efd" }}>
          <Search />
        </IconButton>
      </Paper>
    </Stack>
  );
};

export default Navbar;
