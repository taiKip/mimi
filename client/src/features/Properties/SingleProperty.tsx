
import { CardMedia, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography ,Table, Paper} from "@mui/material";
import { Container } from "@mui/system";
import { useParams } from "react-router-dom";
import building from '../../assets/building.jpg'
import { useGetPropertiesQuery, useGetPropertyByIdQuery } from "./propertiesSlice";

const header = ["unit number","size","availability","rooms"]

const SingleProperty = () => {
    const { propertyId } = useParams();
 const {} = useGetPropertyByIdQuery()
  return (
    <Container component={"section"}  sx={{gap:2,display:"flex",flexDirection:"column",marginTop:2}}>
      <div
        style={{
          position: "relative",
          display: "grid",
          placeItems: "center",
        }}
      >
        <CardMedia
          component="img"
          image={building}
          height={"250px"}
          sx={{ borderRadius: 1 }}
        />
        <Typography
          fontWeight="bold"
          color="secondary"
          variant="h3"
          sx={{
            position: "absolute",
          }}
        >
          Single Property
        </Typography>
      </div>
      <TableContainer sx={{ width: "100%" }} component={Paper} >
        <Table>
          <TableHead>
            <TableRow>
              {header.map((item) => (
                <TableCell key={item}>{item}</TableCell>
              ))}
            </TableRow>
                  </TableHead>
                  
        </Table>
      </TableContainer>
    </Container>
  );
};

export default SingleProperty;
