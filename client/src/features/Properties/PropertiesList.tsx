import { Box, Stack, Toolbar } from "@mui/material";
import { useGetPropertiesQuery } from "./propertiesSlice";
import { Container } from "@mui/system";
import PropertyCard from "./PropertyCard";

const PropertiesList = () => {
  const { data = [] } = useGetPropertiesQuery();

  return (
    <Container  component={"ul"} sx={{ display: "grid", gap: 2, }}>
      {data.map((item) => (
        <PropertyCard
          name={item.name}
          id={item.id}
          key={item.id}
          address={item.address}
        />
      ))}
    </Container>
  );
};

export default PropertiesList;
