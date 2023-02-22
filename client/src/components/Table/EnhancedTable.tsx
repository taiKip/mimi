import {
  Table,
  TableHead,
  Box,
  TableCell,
  Checkbox,
  TableBody,
  TableRow,
  TableContainer,
  useTheme,
} from "@mui/material";
import React from "react";
import EnhancedTableHead from "./EnhancedTableHead";
import EnhancedTableRow from "./EnhancedTableRow";
import {
  ReportOutlined,
  ConstructionOutlined,
  CheckBoxOutlined,
} from "@mui/icons-material";

const tableNav = ["Complaint", "Residents", "Vendor Partner"];
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

const EnhancedTable = () => {
  const theme = useTheme()
  return (
    <>
      <EnhancedTableHead />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                color={theme.palette.mode ==="dark"? "primary":"secondary"}
                inputProps={{
                  "aria-label": "select all desserts",
                }}
              />
            </TableCell>
            {tableNav.map((nav) => (
              <TableCell key={nav}>{nav}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody sx={{padding:1}}>
          {tableItems.map((item) => (
            <EnhancedTableRow
              key={item.complaintId}
              complaintId={item.complaintId}
              firstName={item.firstName}
              lastName={item.lastName}
              repairRequest={item.repairRequest}
              severity={item.severity}
            />
          ))}
        </TableBody>
      </Table>
    </>
  );
};

export default EnhancedTable;
