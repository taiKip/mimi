import {
  ArrowForward,
  Dangerous,
  Report,
  ReportOutlined,
  Warning,
} from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Box,
  IconButton,
} from "@mui/material";
import { createTheme, Stack } from "@mui/system";
import { green } from "@mui/material/colors";

import React from "react";

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
        <Stack>
          <Box>
            <Typography fontWeight="bold">21 Works</Typography>
            <Typography color="InactiveCaptionText">
              <Box component="span" color={color}>
                {works}
              </Box>{" "}
              from last month
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CardItem;
