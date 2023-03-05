import { Box, Button,Paper, Toolbar } from "@mui/material";
import { useGetPropertiesQuery } from "./propertiesSlice";
import { Container } from "@mui/system";
import PropertyCard from "./PropertyCard";
import { Link } from "react-router-dom";


const PropertiesList = () => {
  const { data = [] } = useGetPropertiesQuery();
  
  return (
    <>
      <Box sx={{ width: "100%", display: "flex",marginTop: 2 ,justifyContent:"flex-end"}}>
        <Link to="/properties/create">
          <Button variant="contained" >
            Add New property
          </Button>
        </Link>
      </Box>
      <Container
        component={"ul"}
        sx={{
          display: "grid",
          gap: 2,
          gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
        }}
      >
        {data.map((item) => (
          <PropertyCard
            name={item.name}
            id={item.id}
            key={item.id}
            address={item.address}
          />
        ))}
      </Container>
    </>
  );
};

export default PropertiesList;
