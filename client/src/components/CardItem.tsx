import {
  ArrowForward,
  ReportOutlined,

} from "@mui/icons-material";
import {
 
  Card,
  CardContent,
  CardHeader,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import {  Stack } from "@mui/system";


import React from "react";
import BarChart from "./BarChart";

export interface ICardProps {
  title: string;
  icon: React.ReactElement<typeof ReportOutlined>;
  color: string;
  works: string;
}
const CardItem = ({ title, icon, color, works }: ICardProps) => {
  return (
    <Card sx={{width:"100%"}}>
      <CardHeader
        sx={{ borderBottom: 1 }}
        avatar={icon}
        title={title}
        action={
          <IconButton>
            <ArrowForward />
          </IconButton>
        }
      />
      <CardContent>
              <Stack display={"flex"} flexDirection={"row"}>
          <Box flexGrow={3}>
            <Typography fontWeight="bold">21 Works</Typography>
            <Typography color="InactiveCaptionText">
              <Box component="span" color={color}>
                {works}
              </Box>{" "}
              from last month
            </Typography>
                  </Box>
                  <Box sx={{width:"40%",height:"100px"}}>
                      <BarChart/>
                  </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CardItem;
