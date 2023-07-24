// import { Index } from "../components/common/Header/index";

import type { SelectChangeEvent } from "@mui/material";
import { Autocomplete, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
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
  const top100Films = [
    { label: "All", year: 1994 },
    { label: "Email Address", year: 1972 },
    { label: "Transaction ID", year: 1974 },
    { label: "Case ID" },
    { label: "Last Name" },
    { label: "First Name" },
    { label: "Business Name" },
    { label: "Card Number" },
    { label: "Receipt ID" },
    { label: "Invoice ID" },
    { label: "Auction Item Number" },
    { label: "Order ID" },
    { label: "Billing Agreement" },
    { label: "Profile ID" },
    { label: "Store ID " },
    { label: "Payout ID" },
  ];

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
    setAge(event.target.value);
  };

  return (
    <>
      <Layout>
        <div>
          <div className="activity_section">
            <div className="search_bar">
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={top100Films}
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="All" />}
              />

              <Box
                component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <div>
                  <TextField
                    required
                    id="outlined-required"
                    placeholder="Search for transaction"
                  />
                </div>
              </Box>
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

            <div className="download">Download</div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Activity;
