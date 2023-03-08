import  { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography } from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import TextField from "@mui/material/TextField";

const Home = () => {
      const navigate = useNavigate();
      const [email, setEmail] = useState("");
      const [password, setPassword] = useState("");

      const [emailError, setEmailError] = useState(false);
      const [passwordError, setPasswordError] = useState(false);

     
      const field = {
        marginTop: "20px",
        marginBottom: "20px",
        display: "block",
      };

      const handleSubmit = (event:FormEvent) => {
        event.preventDefault();
        setEmailError(false);
        setPasswordError(false);
navigate("/dash")
      };
  return (
    <Container
      sx={{
        width: "100vw",
        height: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <Container>
        <Typography
          variant="h6"
          component="h2"
          color="textSecondary"
          gutterBottom
        >
          Login
        </Typography>
        <form noValidate autoComplete="off" >
          <TextField
            onChange={(e) => setEmail(e.target.value)}
            sx={field}
            label="email"
            color="secondary"
            fullWidth
            required
            error={emailError}
          />
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            sx={field}
            label="password"
            color="secondary"
            fullWidth
            required
            error={passwordError}
          />

          <Button
            type="submit"
            color="secondary"
            variant="contained"
                      endIcon={<KeyboardArrowRightIcon />}
        onClick={handleSubmit}
          >
            Login
          </Button>
        </form>
      </Container>
    </Container>
  );
};

export default Home;
