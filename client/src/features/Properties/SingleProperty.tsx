
import { CardMedia, TableCell, TableContainer, TableHead, TableRow, Toolbar, Typography ,Table, Paper, TableBody} from "@mui/material";
import { Container } from "@mui/system";
import { useParams } from "react-router-dom";
import building from '../../assets/building.jpg'
import { propertyType } from "../../types";
import { useGetPropertiesQuery, useGetPropertyByIdQuery } from "./propertiesSlice";

const header = ["unit number","size","availability","rooms"]

const SingleProperty = () => {
    const { propertyId } = useParams();
    const { property,error,isLoading } = useGetPropertiesQuery(undefined, {
        selectFromResult: ({ data, isLoading,error, }) => ({
            property: data?.filter(item =>item.id ===Number(propertyId)),
            error,
            isLoading
    })
    })
    if (isLoading) {
     return <div>Loading...</div>
    }
    if (error) {
        return <div>Something went wrong</div>
    }
    const propertyObj = property && property[0] 
  return (
    <Container
      component={"section"}
      sx={{ gap: 2, display: "flex", flexDirection: "column", marginTop: 2 }}
    >
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
          {propertyObj?.name}
        </Typography>
      </div>
      <TableContainer sx={{ width: "100%" }} component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {header.map((item) => (
                <TableCell key={item}>{item}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {propertyObj?.units.map((unit) => (
              <TableRow key={unit.id}>
                <TableCell>{unit.unitNumber}</TableCell>
                    <TableCell>{unit.size} &#13217;</TableCell>
                    <TableCell >{unit.isTaken? "Not Available":"Available"}</TableCell>
                    <TableCell>{unit.rooms}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default SingleProperty;
