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
  TablePagination,
} from "@mui/material";
import React from "react";
import EnhancedTableHead from "./EnhancedTableHead";
import EnhancedTableRow, { tableRowProps } from "./EnhancedTableRow";


const tableNav = ["Complaint", "Residents", "Vendor Partner"];
export const tableItems = [
  {
    firstName: "John",
    lastName: "Doe",
    repairRequest: "Leaky faucet in the bathroom sink",
    complaintId: 12345,
    severity: "Normal",
    image: "../assets/profile.jpg",
    status: "fixed",
  },
  {
    firstName: "Mary",
    lastName: "Smith",
    repairRequest: "Clogged drain in the kitchen sink",
    complaintId: 12346,
    severity: "Normal",
    status:"pending"
  },
  {
    firstName: "David",
    lastName: "Lee",
    repairRequest: "Broken window in the living room",
    complaintId: 12347,
    severity: "Emergency",
    status: "pending",
  },
  {
    firstName: "Rachel",
    lastName: "Johnson",
    repairRequest: "Flickering lights in the bedroom",
    complaintId: 12348,
    severity: "Normal",
    status: "fixed",
  },
] as tableRowProps[] ;

const EnhancedTable = () => {
  const theme = useTheme()
  return (
    <TableContainer>
      <EnhancedTableHead />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell padding="checkbox">
              <Checkbox
                color={theme.palette.mode === "dark" ? "primary" : "secondary"}
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
        <TableBody sx={{ padding: 1 }}>
          {tableItems.map((item) => (
            <EnhancedTableRow
              key={item.complaintId}
              complaintId={item.complaintId}
              firstName={item.firstName}
              lastName={item.lastName}
              repairRequest={item.repairRequest}
              severity={item.severity}
              status="pending"
            />
          ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        sx={{fontFamily:"inherit"}}
        component="div"
        count={5}
        rowsPerPage={5}
        page={1}
        onPageChange={()=>console.log("changed")}
        onRowsPerPageChange={()=>console.log("page change")}
      />
    </TableContainer>
  );
};

export default EnhancedTable;
