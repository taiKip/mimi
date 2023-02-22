import {
  CardHeader,
  Box,
  FormControl,
  InputLabel,

    Stack,
    Select,
  MenuItem,

} from "@mui/material";
import { useState } from "react";
const EnhancedTableHead = () => {
    const [city, setCity] = useState("");
    const [period, setPeriod] = useState("")


  return (
    <Box
      display={"flex"}
      flexDirection="row"
      alignItems={"center"}
      padding={2}
      gap={2}
    >
      <Stack>
        <CardHeader
          title="Works Required"
          subheader=" Several works that need to be done"
        />
      </Stack>

      <Stack direction="row" spacing={2} minWidth={250}>
        <FormControl fullWidth>
          <InputLabel id="city" color="secondary">
            City
          </InputLabel>
          <Select
            labelId="city-select"
            id="city-select"
            value={city}
            label="City"
            onChange={(e) => setCity(e.target.value)}
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
            onChange={(e) => setPeriod(e.target.value)}
            color="secondary"
          >
            <MenuItem value={"Normal"}>Monthly</MenuItem>
            <MenuItem value={"Emergency"}>Weekly</MenuItem>
            <MenuItem value={"Emergency"}>Daily</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </Box>
  );
};

export default EnhancedTableHead;
