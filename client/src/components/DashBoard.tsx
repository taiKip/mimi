import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";
import profile from "../assets/profile.jpg";
import {
  Button,
  CardHeader,
  TableCell,
  TableContainer,
  TableHead,
  Toolbar,
  TableRow,
  TableBody,
  Typography,
  Avatar,
  useTheme,
} from "@mui/material";
import {
  Add,
  BarChart,
  CheckBox,
  CheckBoxOutlined,
  ConstructionOutlined,
  Help,
  Info,
  ReportOutlined,
  Upload,
} from "@mui/icons-material";
import { Stack } from "@mui/system";
import CardItem, { ICardProps } from "./CardItem";
const tableItems = [
  {
    firstName: "John",
    lastName: "Doe",
    repairRequest: "Leaky faucet in the bathroom sink",
    complaintId: 12345,
    severity: "Normal",
    image: "../assets/profile.jpg",
  },
  {
    firstName: "Mary",
    lastName: "Smith",
    repairRequest: "Clogged drain in the kitchen sink",
    complaintId: 12346,
    severity: "Normal",
  },
  {
    firstName: "David",
    lastName: "Lee",
    repairRequest: "Broken window in the living room",
    complaintId: 12347,
    severity: "Emergency",
  },
  {
    firstName: "Rachel",
    lastName: "Johnson",
    repairRequest: "Flickering lights in the bedroom",
    complaintId: 12348,
    severity: "Normal",
  },
];
const cardItems = [
  {
    color: "#43a047",
    icon: <ReportOutlined color="warning" />,
    title: "Emergency",
    works: "+21%",
  },
  {
    color: "purple",
    icon: <ConstructionOutlined color="info" />,
    title: "Normal",
    works: "-49%",
  },
  {
    color: "#43a047",
    icon: <CheckBoxOutlined color="success" />,
    title: "Fixed Job",
    works: "-7%",
  },
] as ICardProps[];
const tableRows = ["Complaint", "Residents", "Vendor partner"];
const Dashboard = () => {
  const [severity, setSeverity] = useState("");
  const [member, setMember] = useState("");

  const [city, setCity] = useState("");
  const [period, setPeriod] = useState("");

  const [selected, setSelected] = useState<readonly string[]>([]);
  const handleChange = (event: SelectChangeEvent) => {
    setSeverity(event.target.value);
  };
  const handleClick = (event: React.MouseEvent<unknown>, name: string) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected: readonly string[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };
  const isSelected = (name: string) => selected.indexOf(name) !== -1;
const theme = useTheme()
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
        <Stack direction="row" spacing={2} marginLeft={"auto"}>
          <Button variant={theme.palette.mode==="dark"?"contained":"outlined"} startIcon={<Upload />} color="inherit">
            Export
          </Button>
          <Button variant="contained" startIcon={<Add />} color="inherit">
            New Job
          </Button>
        </Stack>
      </Box>
          <Box marginTop={3} display="flex">
              
              <CardHeader
                  color="primary"
          sx={{
            padding: 0,
          }}
          title="Maintenance"
          subheader="View your newest works submited by the residents"
        />
        <Stack justifyContent={"center"} marginLeft={"auto"}>
          <Button variant="outlined" startIcon={<Help />} color="inherit">
            Contact help
          </Button>
        </Stack>
      </Box>
      <Box marginTop={3}>
        <Stack direction="row" spacing={3}>
          {cardItems.map((item) => (
            <CardItem
              title={item.title}
              icon={item.icon}
              works={item.works}
              color={item.color}
            />
          ))}
        </Stack>
      </Box>
          <Box display={"block "}>
        <TableContainer aria-label="table header" >
          <TableHead>
            <TableRow>
              <TableCell>
                              <CardHeader
                                  
                  title="Works Required"
                  subheader={
                    <Box
                      component={"span"}
                      display="flex"
                      alignItems={"center"}
                    >
                      Several works that needs to be done{" "}
                      <Info fontSize="small" />
                    </Box>
                  }
                />
              </TableCell>
              <TableCell />
              <TableCell>
                <Stack direction="row" spacing={2} minWidth={300}>
                  <FormControl fullWidth>
                    <InputLabel id="city" color="secondary">
                      City
                    </InputLabel>
                    <Select
                      labelId="city-select"
                      id="city-select"
                      value={city}
                      label="City"
                      onChange={handleChange}
                      color="secondary"
                    >
                      <MenuItem value={"Turku"}>Turku</MenuItem>
                      <MenuItem value={"Raisio"}>Raisio</MenuItem>
                    </Select>
                  </FormControl>
                  <FormControl fullWidth>
                    <InputLabel id="period" color="secondary">
                      Period
                    </InputLabel>
                    <Select
                      labelId="period-select"
                      id="period-select"
                      value={period}
                      label="Period"
                      onChange={handleChange}
                      color="secondary"
                    >
                      <MenuItem value={"Normal"}>Monthly</MenuItem>
                      <MenuItem value={"Emergency"}>Weekly</MenuItem>
                      <MenuItem value={"Emergency"}>Daily</MenuItem>
                    </Select>
                  </FormControl>
                </Stack>
              </TableCell>
            </TableRow>
            <TableRow>
              {tableRows.map((item) => (
                <TableCell align="left">{item}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {tableItems.map((complaint) => (
              <TableRow sx={{ padding: 0 }}>
                <TableCell
                  sx={{ display: "flex", alignItems: "center", gap: 2 }}
                >
                  {complaint.severity === "Emergency" ? (
                    <ReportOutlined color="warning" />
                  ) : (
                    <ConstructionOutlined color="secondary" />
                  )}
                  <Box>
                    <Typography component={"h4"} fontWeight="bold">
                      {complaint.repairRequest}
                    </Typography>
                    <Typography>{complaint.complaintId}</Typography>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography display={"flex"} alignItems="center" gap={2}>
                    <Avatar src={profile} />
                    {complaint.firstName + " " + complaint.lastName}
                  </Typography>
                </TableCell>
                <TableCell>{"RTK palvelut"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableContainer>
        <BarChart />
      </Box>
    </Box>
  );
};

export default Dashboard;
