import {
  TableRow, TableCell, Box, Typography, Checkbox,useTheme} from "@mui/material";
import { ReportOutlined, ConstructionOutlined } from "@mui/icons-material";
import Avatar from "@mui/material/Avatar";
import profile from "../../assets/profile.jpg";
export interface tableRowProps {
  firstName: string;
  lastName: string;
  repairRequest: string;
  complaintId: number;
  severity: string;
  status:"fixed"|"pending"
}
const EnhancedTableRow = ({
  firstName,
  lastName,
  repairRequest,
  complaintId,
  severity,
}: tableRowProps) => {
  const theme = useTheme()
  return (
    <TableRow sx={{ padding: 0, justifyContent: "start" }}>
      <TableCell padding="checkbox">
        <Checkbox
          color={theme.palette.mode === "dark" ? "primary" : "secondary"}
          inputProps={{
            "aria-label": "select all complaints",
          }}
        />
      </TableCell>
      <TableCell sx={{ display: "flex", alignItems: "center", gap: 2 }}>
        {severity === "Emergency" ? (
          <ReportOutlined color="warning" />
        ) : (
          <ConstructionOutlined color="secondary" />
        )}
        <Box>
          <Typography variant="subtitle2" color="GrayText">
            {complaintId}
          </Typography>
          <Typography component={"h4"} fontWeight="bold">
            {repairRequest}
          </Typography>
        </Box>
      </TableCell>
      <TableCell>
        <Box display={"flex"} alignItems="center" gap={2}>
          <Avatar src={profile} />
          {firstName + " " + lastName}
        </Box>
      </TableCell>
      <TableCell>{"RTK palvelut"}</TableCell>
    </TableRow>
  );
};

export default EnhancedTableRow;
