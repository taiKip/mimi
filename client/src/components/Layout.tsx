import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
  return (
    <Container>
      <Header />
          <Container >
        <Outlet />
      </Container>
    </Container>
  );
};
export default Layout;
