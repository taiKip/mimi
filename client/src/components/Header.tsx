import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Avatar, Badge, Button, CardHeader, IconButton } from '@mui/material';
import { House, Mail, MailOutline, NotificationsOutlined } from '@mui/icons-material';
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import profile from '../assets/profile.jpg'

const navItems = ['Maintanance', 'People', 'Properties',"Invoices"];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
      <AppBar elevation={0} position="sticky">
          <Toolbar  sx={{
              paddingBottom:0}}>
              <House sx={{mr:5} } />
        <Box sx={{ display: { xs: "none", sm: "block" ,flexGrow:1 } }}>
          {navItems.map((item) => (
            <Button key={item} color="inherit">
              {item}
            </Button>
          ))}
        </Box>
        <Box >
                 
            <IconButton
              size="medium"
              aria-label="settings"
              color="inherit"
              sx={{ borderRadius: 1 }}
            >
              <SettingsOutlinedIcon />
            </IconButton>

                  <IconButton
                
              size="medium"
              aria-label="show all 2 new notifications"
              color="inherit"
              sx={{ borderRadius: 1}}
            >
              <Badge badgeContent={2} color="success">
                <MailOutline />
              </Badge>
            </IconButton>
            <IconButton
              size="medium"
              aria-label="notifications"
              color="inherit"
              sx={{
                borderRadius: 1,
              }}
            >
              <Badge badgeContent={3} color={"secondary"}>
                <NotificationsOutlined />
              </Badge>
            </IconButton>
          </Box>
         
            <CardHeader
              avatar={<Avatar alt="john doe" src={profile} />}
              title="Jane Doe"
              subheader="Property Manager"
            />
      
     
      </Toolbar>
    </AppBar>
  );
}
export default ResponsiveAppBar;