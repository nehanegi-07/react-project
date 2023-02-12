import { Grid } from "@mui/material";
import DataTable from "components/Table";
import React from "react";
import { books } from "./data";

const BooksTable = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Title",
        accessor: "title",
      },
      {
        Header: "Author",
        accessor: "author",
      },
      {
        Header: "Url",
        accessor: "coverImageUrl",
        Cell: ({ row }) => {
          return <img src={row.values.coverImageUrl} height={60} />;
        },
      },

      {
        Header: "Publisher",
        accessor: "publisher",
      },
    ],
    []
  );
  return <DataTable columns={columns} data={books} />;
};

export default BooksTable;
