import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

import {
  Button,
  CardHeader,
  Toolbar,
  Typography,
  useTheme,
  Card,
  CardContent,
} from "@mui/material";
import {
  Add,
  CheckBoxOutlined,
  ConstructionOutlined,
  Help,
  ReportOutlined,
  Upload,
} from "@mui/icons-material";
import { Stack } from "@mui/system";
import CardItem, { ICardProps } from "./CardItem";
import BarChart from "./BarChart";
import EnhancedTable from "./Table/EnhancedTable";

const cardItems = [
  {
    color: "#43a047",
    icon: <ReportOutlined color="warning" />,
    title: "Emergency",
    status: "emergency",
    works: "+21%",
  },
  {
    color: "purple",
    icon: <ConstructionOutlined color="secondary" />,
    title: "Normal",
    status: "normal",
    works: "-49%",
  },
  {
    color: "#43a047",
    icon: <CheckBoxOutlined color="success" />,
    title: "Fixed Job",
    status: "fixed",
    works: "-7%",
  },
] as ICardProps[];
const labels = ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
const data = [15, 13, 23, 15, 22, 16, 7];

const Dashboard = () => {
  const [severity, setSeverity] = useState("");
  const handleChange = (event: SelectChangeEvent) => {
    setSeverity(event.target.value);
  };
 
  const theme = useTheme();
  return (
    <Box>
      <Toolbar />
      <Box sx={{ display: "flex" }}>
        <Stack direction="row" spacing={2} minWidth={300}>
          <FormControl fullWidth>
            <InputLabel id="severity" color="secondary">
              Severity
            </InputLabel>
            <Select
              labelId="severity-select"
              id="severity-select"
              value={severity}
              label="Severity"
              onChange={handleChange}
              color="secondary"
            >
              <MenuItem value={"Normal"}>Normal</MenuItem>
              <MenuItem value={"Emergency"}>Emergency</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth>
            <InputLabel id="member" color="secondary">
              Member
            </InputLabel>
            <Select
              labelId="severity-select"
              id="severity-select"
              value={severity}
              label="Member"
              onChange={handleChange}
              color="secondary"
            >
              <MenuItem value={"Normal"}>Normal</MenuItem>
              <MenuItem value={"Emergency"}>Emergency</MenuItem>
            </Select>
          </FormControl>
        </Stack>
        <Stack direction="row" spacing={2} marginLeft={"auto"} >
          <Button
            variant={theme.palette.mode === "dark" ? "contained" : "outlined"}
            startIcon={<Upload />}
            color="inherit"
          >
            Export
          </Button>
          <Button variant="contained" startIcon={<Add />} color="inherit">
            New Job
          </Button>
        </Stack>
      </Box>
      <Box marginTop={3} display="flex" flexDirection={"column"}>
        <Stack>
          <Typography
            color={theme.palette.mode === "dark" ? "primary" : "inherit"}
            variant="h4"
          >
            Maintenance
          </Typography>
          <Typography variant="subtitle1" color="GrayText">
            View your newest works submited by the residents
          </Typography>
        </Stack>
        <Stack justifyContent={"center"} marginLeft={"auto"}>
          <Button
            variant="outlined"
            startIcon={<Help />}
            color={theme.palette.mode === "dark" ? "primary" : "inherit"}
          >
            Contact help
          </Button>
        </Stack>
      </Box>
      <Box marginTop={2}>
        <Stack direction="row" spacing={3}>
          {cardItems.map((item) => (
            <CardItem
              key={item.title}
              title={item.title}
              icon={item.icon}
              works={item.works}
              color={item.color}
              status={item.status}
            />
          ))}
        </Stack>
      </Box>
      <Stack marginTop={3} direction="row" spacing={3} marginBottom={3} >
        {/**@desc approved repair requests */}
        <Card sx={{ flex: 2 }}>
          <EnhancedTable />
        </Card>
        <Card sx={{ flex: 0.96, padding: 0 }}>
          <CardHeader
            title="Avg. Complaint"
            subheader="Average complaint from residents"
          />
          <CardContent sx={{ height: "70%" }}>
            <BarChart label="Complaint" labels={labels} barData={data} />
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
};

export default Dashboard;
