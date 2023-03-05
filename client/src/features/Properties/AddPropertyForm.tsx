import React, { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Select,
  MenuItem,
  InputLabel,
  Typography,
  SelectChangeEvent,
} from "@mui/material";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { useGetAddressesQuery } from "../Addresses/addressSlice";

const AddPropertyForm = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");

  const [nameError, setNameError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);

  const { data: addresses } = useGetAddressesQuery();
 
  const handleChange = (event: SelectChangeEvent) => {
    setCity(event.target.value as string);
  };

  const field = {
    marginTop: "20px",
    marginBottom: "20px",
    display: "block",
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setNameError(false);
    setDescriptionError(false);
    if (name === "") {
      setNameError(true);
    }
    if (description === "") {
      setDescriptionError(true);
    }
    if (name && description) {
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ name, description }),
      }).then(() => navigate("/"));
    }
  };
  return (
    <Container sx={{ marginTop: 2 }}>
      <Typography
        variant="h6"
        component="h2"
        color="textSecondary"
        gutterBottom
      >
        Add New Property
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setName(e.target.value)}
          sx={field}
          label="Property Name"
          color="secondary"
          fullWidth
          required
          error={nameError}
        />
        <TextField
          onChange={(e) => setDescription(e.target.value)}
          sx={field}
          label="Description"
          color="secondary"
          fullWidth
          required
          multiline
          rows={3}
          error={descriptionError}
        />
        <FormControl fullWidth sx={{ paddingBottom: 2 }}>
          <InputLabel id="city-select" color="secondary">
            City
          </InputLabel>
          <Select
            labelId="city-select-label"
            id="city-select"
            value={city}
            label="City"
            onChange={handleChange}
            color="secondary"
          >
            {addresses?.map((item) => (
              <MenuItem value={item.city} key={item.id}>{item.city}</MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default AddPropertyForm;
