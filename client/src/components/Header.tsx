import { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import {
  Avatar,
  Badge,
  Button,
  CardHeader,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import {
  Brightness7Outlined,
  DarkModeOutlined,
  House,
  MailOutline,
  NotificationsOutlined,
} from "@mui/icons-material";
import profile from "../assets/profile.jpg";
import { useTheme } from "@mui/material/styles";
import { NotificationContext, ThemeContext } from "../App";
import { useState, MouseEvent } from "react";
import NotificationsList from "../features/Notifications/NotificationsList";
import { Link } from "react-router-dom";
const navItems = ["maintenance", "people", "properties", "invoices"];

const Header = () => {
  const colorMode = useContext(ThemeContext);
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const { handleNotifications } = useContext(NotificationContext);
  const handleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar elevation={0} position="sticky">
      <Toolbar
        sx={{
          paddingBottom: 0,
        }}
      >
        <Link to="/dash">
          <House sx={{ mr: 5 }} />
        </Link>

        <Box sx={{ display: { xs: "none", sm: "block", flexGrow: 1 } }}>
          {navItems.map((item) => (
            <Link to={item} key={item}>
              <Button color="inherit">{item}</Button>
            </Link>
          ))}
        </Box>
        <Box>
          <IconButton
            size="medium"
            aria-label="show all 2 new notifications"
            color="inherit"
            sx={{ borderRadius: 1 }}
          >
            <Badge badgeContent={2} color="success">
              <MailOutline />
            </Badge>
          </IconButton>
          <IconButton
            size="medium"
            aria-label="notifications"
            color="inherit"
            onClick={handleNotifications}
            sx={{
              borderRadius: 1,
            }}
          >
            <Badge badgeContent={3} color={"secondary"}>
              <NotificationsOutlined />
            </Badge>
          </IconButton>
          <NotificationsList />
          <IconButton color="inherit" onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "light" ? (
              <DarkModeOutlined />
            ) : (
              <Brightness7Outlined />
            )}
          </IconButton>
        </Box>

        <CardHeader
          sx={{ cursor: "pointer" }}
          onClick={handleMenu}
          avatar={<Avatar alt="john doe" src={profile} />}
          title="Jane Doe"
          subheader="Property Manager"
        />
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};
export default Header;
