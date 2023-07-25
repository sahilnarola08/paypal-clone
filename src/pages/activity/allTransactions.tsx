// import { Index } from "../components/common/Header/index";

import type { SelectChangeEvent } from "@mui/material";
import { Card, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import TextField from "@mui/material/TextField";
// import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
// import { DatePicker } from "@mui/x-date-pickers/DatePicker";
// import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
// import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import "bootstrap/dist/css/bootstrap.css";
import { Layout } from "components/common/Layout";
import Link from "next/link";
import { useState } from "react";

const Activity = () => {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  const [amount, setAmount] = useState("");

  const handleValueChange = (event: SelectChangeEvent) => {
    setAmount(event.target.value as string);
  };

  return (
    <>
      <Layout>
        <div>
          <div className="activity_section">
            <div className="d-flex mt-5">
              <FormControl style={{ width: "20%" }} className="search_dropdown">
                <Select
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">All</MenuItem>
                  <MenuItem value={1}>Email Address</MenuItem>
                  <MenuItem value={2}>Transaction ID</MenuItem>
                  <MenuItem value={3}>Case ID</MenuItem>
                  <MenuItem value={4}>Last Name</MenuItem>
                  <MenuItem value={5}>First Name</MenuItem>
                  <MenuItem value={6}>Bussiness Name</MenuItem>
                  <MenuItem value={7}>Card number</MenuItem>
                  <MenuItem value={7}>Receipt ID</MenuItem>
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
                  Transaction type
                </InputLabel>
                <Select
                  native
                  defaultValue=""
                  id="grouped-native-select"
                  label="Transaction type"
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

              <FormControl
                sx={{ m: 1, minWidth: 50 }}
                style={{ width: "20%", margin: "8px" }}
              >
                <InputLabel id="demo-simple-select-label">Date</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={age}
                  label="Date"
                  onChange={handleChange}
                  defaultValue=""
                >
                  <MenuItem value={10}>Past 30 days</MenuItem>
                  <MenuItem value={20}>Past 90 days</MenuItem>
                  <MenuItem value={30}>2023</MenuItem>
                  <MenuItem value={40}>2022</MenuItem>
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DateRangePicker"]}>
                      <DateRangePicker
                        localeText={{ start: "Check-in", end: "Check-out" }}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Select>
              </FormControl>

              <FormControl
                style={{ width: "20%", margin: "8px" }}
                className="dropdown"
              >
                <Select
                  value={age}
                  onChange={handleChange}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <Select
                    value={amount}
                    onChange={handleValueChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                    style={{ width: "90%", margin: "8px" }}
                  >
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value={1}>Email Address</MenuItem>
                    <MenuItem value={2}>Transaction ID</MenuItem>
                  </Select>
                  <TextField
                    disabled
                    id="outlined-disabled"
                    label="Minimum"
                    defaultValue="0"
                    variant="outlined"
                    style={{ width: "90%" }}
                    className="d-flex m-auto mb-2"
                  />
                  <TextField
                    id="outlined-basic"
                    label="Maximum"
                    defaultValue="0"
                    variant="outlined"
                    style={{ width: "90%" }}
                    className="d-flex m-auto mb-2"
                    disabled
                  />
                  <button type="button" className="apply_btn">
                    Apply
                  </button>
                </Select>
              </FormControl>
            </div>
          </div>
          <hr />

          <div>
            <Card sx={{ minWidth: 275 }}>
              <div className="transactions_section">
                <div className="d-flex justify-content-end me-4 mt-4">
                  <Link
                    className="text-decoration-none text-black"
                    href="/activity/allReports"
                  >
                    Download
                  </Link>
                </div>
                <div className="transactions">
                  <p>There are no transactions for this date range.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Activity;
