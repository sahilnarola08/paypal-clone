// import { Index } from "../components/common/Header/index";

import type { SelectChangeEvent } from "@mui/material";
import {
  Autocomplete,
  FormControl,
  MenuItem,
  Select,
  Stack,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import "bootstrap/dist/css/bootstrap.css";
import { Layout } from "components/common/Layout";
import { useState } from "react";

const Archive = [{ title: "Active" }, { title: "Archived" }, { title: "All" }];

const Transaction = [
  { title: "All activity" },
  { title: "Transactions" },
  { title: "Payments received" },
  { title: "Payments sent" },
  { title: "Payments transferred" },
  { title: "Payments transferred" },
  { title: "Money added" },
  { title: "Refunds" },
  { title: "Billing agreements and profiles" },
];

const Date = [
  { title: "Past 30 days" },
  { title: "Past 90 days" },
  { title: "2023" },
  { title: "2022" },
];
const Activity = () => {
  // const top100Films = [
  //   { label: "All", year: 1994 },
  //   { label: "Email Address", year: 1972 },
  //   { label: "Transaction ID", year: 1974 },
  //   { label: "Case ID" },
  //   { label: "Last Name" },
  //   { label: "First Name" },
  //   { label: "Business Name" },
  //   { label: "Card Number" },
  //   { label: "Receipt ID" },
  //   { label: "Invoice ID" },
  //   { label: "Auction Item Number" },
  //   { label: "Order ID" },
  //   { label: "Billing Agreement" },
  //   { label: "Profile ID" },
  //   { label: "Store ID " },
  //   { label: "Payout ID" },
  // ];

  interface FilmOptionType {
    title: string;
    year: number;
  }
  const defaultProps = {
    options: Archive,
    getOptionLabel: (option: FilmOptionType) => option.title,
  };
  const defaultPropstype = {
    options: Transaction,
    getOptionLabel: (option: FilmOptionType) => option.title,
  };

  const defaultPropsDate = {
    options: Date,
    getOptionLabel: (option: FilmOptionType) => option.title,
  };
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <>
      <Layout>
        <div>
          <div className="activity_section">
            <div className="d-flex mt-5">
              <FormControl style={{ width: "20%" }}>
                <Select
                  className="rounded-0"
                  // labelId="demo-simple-select-label"
                  // id="demo-simple-select"
                  value={age}
                  // label="Age"
                  onChange={handleChange}
                  defaultValue="Case"
                >
                  <MenuItem value="Case">Case ID</MenuItem>
                  <MenuItem value={10}>Transaction ID</MenuItem>
                  <MenuItem value={20}>Invoice ID</MenuItem>
                  <MenuItem value={30}>Name</MenuItem>
                  <MenuItem value={40}>Email</MenuItem>
                </Select>
              </FormControl>
              <TextField
                className="search"
                placeholder="Search cases"
                fullWidth
                variant="outlined"
              />
            </div>

            <div className="dropdown_div">
              <Stack spacing={1} sx={{ width: 300 }}>
                <Autocomplete
                  {...defaultProps}
                  id="disable-close-on-select"
                  disableCloseOnSelect
                  renderInput={(params) => (
                    <TextField {...params} label="Archive" variant="standard" />
                  )}
                />
              </Stack>

              <Stack spacing={1} sx={{ width: 300 }}>
                <Autocomplete
                  {...defaultPropstype}
                  id="disable-close-on-select"
                  disableCloseOnSelect
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Transaction Type"
                      variant="standard"
                    />
                  )}
                />
              </Stack>

              <Stack spacing={1} sx={{ width: 300 }}>
                <Autocomplete
                  {...defaultPropsDate}
                  id="disable-close-on-select"
                  disableCloseOnSelect
                  renderInput={(params) => (
                    <TextField {...params} label="Date" variant="standard" />
                  )}
                />
              </Stack>

              <Stack spacing={1} sx={{ width: 300 }}>
                <Autocomplete
                  {...defaultProps}
                  id="disable-close-on-select"
                  disableCloseOnSelect
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="Amount & Currency"
                      variant="standard"
                    />
                  )}
                />
              </Stack>
            </div>
          </div>
          <hr />

          <div className="transactions_section">
            <div className="transactions">
              There are no transactions for this date range.
            </div>

            <button
              className="download"
              type="button"
              onClick={() => "AllReports"}
            >
              Download
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Activity;
