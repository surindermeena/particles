import React, { useState, useMemo } from "react";
import DataTable from "react-data-table-component";
import dataTableStyles from "./datatableStyles";

const initialUsers = [
  { id: 1, name: "Alice Johnson", email: "alice@example.com" },
  { id: 2, name: "Bob Smith", email: "bob@example.com" },
  { id: 3, name: "Charlie Brown", email: "charlie@example.com" },
  { id: 4, name: "David Lee", email: "david@example.com" },
  { id: 5, name: "Eva Green", email: "eva@example.com" },
  { id: 6, name: "Frank White", email: "frank@example.com" },
  { id: 7, name: "Grace Hall", email: "grace@example.com" },
  { id: 8, name: "Henry King", email: "henry@example.com" },
  { id: 9, name: "Ivy Scott", email: "ivy@example.com" },
  { id: 10, name: "Jack Black", email: "jack@example.com" },
];

function LocalUserTable() {
  const [search, setSearch] = useState("");

  // Filter users based on search
  const filteredUsers = useMemo(() => {
    return initialUsers.filter(user =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const columns = [
    { name: "ID", selector: row => row.id, sortable: true },
    { name: "Name", selector: row => row.name, sortable: true },
    { name: "Email", selector: row => row.email, sortable: true },
  ];

  const customStyles = {
    tableWrapper: {
      style: {
        border: "2px solid #000",
        boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
      },
    },
    headCells: {
      style: {
        fontWeight: "bold",
        borderRight: "1px solid #ccc",
      },
    },
    cells: {
      style: {
        borderRight: "1px solid #eee",
      },
    },
  };

  const conditionalRowStyles = [
    {
      when: () => true,
      style: {
        backgroundColor: "#ffffff",
        transition: "border 0.3s ease",
        "&:hover": {
            border: "1px solid red",
        },
      },
    },
  ];
  
  return (
    <div style={{ padding: "20px",marginBottom:"100px"}}>
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "8px",
          marginBottom: "10px",
          width: "100%",
          maxWidth: "400px",
        }}
      />

      <DataTable
        title="Users Table"
        columns={columns}
        data={filteredUsers}
        pagination
        selectableRows
        highlightOnHover
        pointerOnHover
        noDataComponent="No users found"
        customStyles={dataTableStyles}
        conditionalRowStyles={conditionalRowStyles}
      />
    </div>
  );
}

export default LocalUserTable;
