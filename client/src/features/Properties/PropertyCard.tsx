import { Avatar, CardHeader, Card, CardMedia, IconButton } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { propertyType } from "../../types";
import building from "../../assets/building.jpg";
import { ArrowForward } from "@mui/icons-material";
const PropertyCard = ({ name, id ,address}: Partial<propertyType>) => {
  return (
    <Card sx={{ width:365 }} component="div">
      <CardHeader
        avatar={<Avatar>{name?.charAt(0)}</Avatar>}
              title={name}
              subheader={`A high rise property located in ${address?.city}`}
        action={
          <NavLink to={`/properties/${id}`}>
            <IconButton>
              <ArrowForward />
            </IconButton>
          </NavLink>
        }
      />
      <CardMedia
        component={"img"}
        image={building}
        height="194"
        alt={`${name} image`}
      />
    </Card>
  );
};

export default PropertyCard;
