import { Button, Menu, MenuItem, Typography, useTheme } from '@mui/material'
import { Box, Container } from '@mui/system'
import React, { useContext } from 'react'
import { NotificationContext } from '../../App'
import { tableItems } from '../../components/Table/EnhancedTable'
import NotificationItem from './NotificationItem'

const NotificationsList = () => {
    const { anchorEl, handleClose } = useContext(NotificationContext)
    const theme = useTheme();
  return (
    <Menu
      id="menu-appbar"
  
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "center",
      }}
      open={Boolean(anchorEl)}
      onClose={handleClose}
    >
      <Container
        component="div"
        
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "baseline",
          padding: 2,
        marginBottom:2
        }}
      >
        <Typography fontWeight="bold" variant="h5">
          Notifications
        </Typography>
        <Button color="inherit">Mark all as read</Button>
      </Container>
     
        {tableItems.map((item) => (
          <NotificationItem
            key={item.complaintId}
            complaintId={item.complaintId}
            firstName={item.firstName}
            lastName={item.lastName}
            repairRequest={item.repairRequest}
            severity={item.severity}
            status={item.status}
          />
        ))}
      
      
      <Container sx={{marginBottom:2,marginTop:2}}>
        <Button fullWidth variant="contained" color="secondary">
          See all notifications
        </Button>
      </Container>
    </Menu>
  );
}

export default NotificationsList