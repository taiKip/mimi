import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Avatar, Badge, Button, CardHeader, IconButton } from '@mui/material';
import { Brightness1Outlined, Brightness7, Brightness7Outlined, DarkModeOutlined, House, Mail, MailOutline, NotificationsOutlined } from '@mui/icons-material';
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import profile from '../assets/profile.jpg'
import { useTheme } from '@mui/material/styles';
import { ThemeContext } from '../App';



const navItems = ['Maintanance', 'People', 'Properties',"Invoices"];


const Header =()=> {
const colorMode = React.useContext(ThemeContext)
    const theme = useTheme()

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
                  <IconButton color='inherit' onClick={colorMode.toggleColorMode}>
                      {theme.palette.mode === 'light'?<DarkModeOutlined />:<Brightness7Outlined/>}
                  </IconButton>
          </Box>
         
              <CardHeader
                  sx={{cursor:"pointer"}}
                 onClick={()=>console.log("john doe")}
              avatar={<Avatar alt="john doe" src={profile} />}
              title="Jane Doe"
              subheader="Property Manager"
            />
      
     
      </Toolbar>
    </AppBar>
  );
}
export default Header;