import { Layout } from "components/common/Layout";
// import "./style.scss";
import type { SelectChangeEvent } from "@mui/material";
import {
  Card,
  CardContent,
  FormControl,
  Grid,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import "bootstrap/dist/css/bootstrap.css";
import { useState } from "react";

const Activity = () => {
  const [age, setAge] = useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <Layout>
      <div className="activity-main">
        <div className="d-flex justify-content-between align-items-center mt-4">
          <div>
            <h2 className="fw-light">Resolution Center</h2>
          </div>
          <div>
            <a
              className="blue-color fw-bold text-decoration-none"
              type="button"
            >
              <i className="ri-question-fill"></i>
              Help
            </a>
          </div>
        </div>
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
        <div className="mt-5">
          <Grid container spacing={2}>
            <Grid item xs={8} lg={2}>
              <Card>
                <CardContent>
                  <h2 className="text-center">0</h2>
                  <h5 className="text-center">Open cases</h5>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={4} lg={2}>
              <Card>
                <CardContent>
                  <h2 className="text-center">0</h2>
                  <h5 className="text-center">Open cases</h5>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    </Layout>
  );
};

export default Activity;
