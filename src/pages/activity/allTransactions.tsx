// import { Index } from "../components/common/Header/index";

import type { SelectChangeEvent } from "@mui/material";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import TextField from "@mui/material/TextField";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import "bootstrap/dist/css/bootstrap.css";
import { Layout } from "components/common/Layout";
import Link from "next/link";
import { useState } from "react";

// import 'first'
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
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">All</MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
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
              <FormControl sx={{ m: 1, minWidth: 50 }}>
                <InputLabel htmlFor="grouped-native-select">Archive</InputLabel>
                <Select
                  native
                  defaultValue=""
                  id="grouped-native-select"
                  label="Archive"
                  className="select_lable"
                >
                  <optgroup label="">
                    <option value={2}>Active</option>
                    <option value={3}>Archive</option>
                    <option value={4}>All</option>
                  </optgroup>
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 50 }}>
                <InputLabel htmlFor="grouped-native-select">
                  Grouping
                </InputLabel>
                <Select
                  native
                  defaultValue=""
                  id="grouped-native-select"
                  label="Grouping"
                  className="select_lable"
                >
                  <optgroup label="All activity"></optgroup>
                  <optgroup label="Transactions">
                    <option value={2}>Payments received</option>
                    <option value={3}>Payments sent</option>
                    <option value={4}>Payments transferred</option>
                    <option value={5}>Money added</option>
                    <option value={6}>Refunds</option>
                    <option value={7}> Billing agreements and profiles</option>
                    <option value={8}>Reversals</option>
                    <option value={9}>Money added </option>
                    <option value={11}>Currency conversions</option>
                  </optgroup>
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 50 }}>
                <InputLabel htmlFor="grouped-native-select">Archive</InputLabel>
                <Select
                  native
                  defaultValue=""
                  id="grouped-native-select"
                  label="Archive"
                  className="select_lable"
                >
                  <optgroup label="">
                    <option value={2}>Past 30 days</option>
                    <option value={3}>Past 90 days</option>
                    <option value={4}>2023</option>
                    <option value={4}>2022</option>
                    <option value={4}>
                      {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={["DatePicker"]}>
                          <DatePicker label="Basic date picker" />
                        </DemoContainer>
                      </LocalizationProvider> */}
                    </option>
                  </optgroup>
                </Select>
              </FormControl>

              <FormControl sx={{ m: 1, minWidth: 50 }}>
                <InputLabel htmlFor="grouped-native-select">Archive</InputLabel>
                <Select
                  native
                  defaultValue=""
                  id="grouped-native-select"
                  label="Archive"
                  className="select_lable"
                >
                  <optgroup label="">
                    <option value={2}>Active</option>
                    <option value={3}>Archive</option>
                    <option value={4}>All</option>
                  </optgroup>
                </Select>
              </FormControl>
            </div>
          </div>
          <hr />

          <div className="transactions_section">
            <div className="transactions">
              There are no transactions for this date range.
            </div>

            <Link
              className="text-decoration-none text-black"
              href="/activity/allReports"
            >
              Download
            </Link>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Activity;
