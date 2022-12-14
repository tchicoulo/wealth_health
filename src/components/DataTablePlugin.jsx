import React from "react";
import { useState } from "react";
import DataTable from "react-data-table-component";

const DataTablePlugin = () => {
  const employees = JSON.parse(localStorage.getItem("employees"));

  const [filterText, setFilterText] = useState("");
  const filteredItems = employees.filter(
    (item) =>
      filterText === "" ||
      (item.firstName &&
        item.firstName.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.lastName &&
        item.lastName.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.startDate &&
        item.startDate.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.department &&
        item.department.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.dateOfBirth &&
        item.dateOfBirth.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.street &&
        item.street.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.city &&
        item.city.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.state &&
        item.state.toLowerCase().includes(filterText.toLowerCase())) ||
      (item.zip && item.zip.toLowerCase().includes(filterText.toLowerCase()))
  );

  const handleClear = () => {
    if (filterText) {
      setFilterText("");
    }
  };

  const columns = [
    {
      name: "First Name",
      sortable: true,
      selector: (row) => row.firstName,
    },
    {
      name: "Last Name",
      sortable: true,
      selector: (row) => row.lastName,
    },
    {
      name: "Start Date",
      sortable: true,
      selector: (row) => row.startDate,
    },
    {
      name: "Department",
      sortable: true,
      selector: (row) => row.department,
    },
    {
      name: "Date of Birth",
      sortable: true,
      selector: (row) => row.dateOfBirth,
    },
    {
      name: "Street",
      sortable: true,
      selector: (row) => row.street,
    },
    {
      name: "City",
      sortable: true,
      selector: (row) => row.city,
    },
    {
      name: "State",
      sortable: true,
      selector: (row) => row.state,
    },
    {
      name: "Zip Code",
      sortable: true,
      selector: (row) => row.zip,
    },
  ];

  return (
    <div className="data-table-plugin">
      <input
        type={"text"}
        value={filterText}
        onChange={(e) => setFilterText(e.target.value)}
        filterText={filterText}
      />
      {filterText ? (
        <span className="cancel" onClick={handleClear}>
          X
        </span>
      ) : (
        ""
      )}

      <DataTable columns={columns} data={filteredItems} pagination />
    </div>
  );
};

export default DataTablePlugin;
