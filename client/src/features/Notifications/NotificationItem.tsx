import { Avatar, Button, CardMedia, MenuItem, Typography, useTheme } from "@mui/material";
import { Box } from "@mui/system";
import profile from "../../assets/profile2.jpg";
import interior from '../../assets/interior.jpg'
import { tableRowProps } from "../../components/Table/EnhancedTableRow";

const NotificationItem = ({
  firstName,
  lastName,
  repairRequest,
  complaintId,
  severity,
  status,
}: tableRowProps) => {
  const theme = useTheme()

  let content;

  if (status === 'fixed') {
    content = (
      <Box component={"span"}>
        {`Marked an issue  on ${firstName}'s Apartment.Comfy Aparment.Room-317 as `}
        <Box component={"span"} color={"#81c784"}>
          fixed
        </Box>
      </Box>
    );
  } else if (status === "pending" && severity==="emergency") {
    content =<Box component={"span"}>
        {`Reported `} 
        <Box component={"span"} color="red">Emergency</Box>
         { ` for ${firstName}'s Apartment.Comfy Aparment.Room-317  `}
      </Box>
  } else {
    content =<Typography>{`${firstName} reported an issue.`}</Typography>
  }

  
  return (
    <MenuItem sx={{ gap: 2 ,width:"100%"}} >
      <Avatar alt="" src={profile} sx={{ width: 80, height: 80 }} />
      <Box>
        <Typography variant="h6">Celine Walsh</Typography>
       
        {content}
       
        <Box display={"flex"} gap={2} marginTop={2}>
          <Button variant="outlined" color={theme.palette.mode ==="light"?"inherit":"primary"}>Review</Button>
          <Button color="secondary" variant="contained">
            Approve
          </Button>
        </Box>
      </Box>
      <CardMedia
        
        component="img"
        sx={{ width: 100, height: 100, borderRadius: 1 ,marginLeft:"auto"}}
        image={interior}
      />
    </MenuItem>
  );
};

export default NotificationItem;
