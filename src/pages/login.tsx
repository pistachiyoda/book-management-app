import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  Container,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import React, { FormEvent } from "react";
import { useRouter } from "next/router";

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const router = useRouter();
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    router.push("/");
  };

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          marginTop: 10,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography component="h1" variant="h5">
          Log in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            name="email"
            label="Email Address"
            variant="outlined"
            margin="normal"
            fullWidth
            autoComplete="email"
            type="email"
            autoFocus
            required
          />
          <TextField
            name="password"
            label="Password"
            variant="outlined"
            margin="normal"
            fullWidth
            autoComplete="current-password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            required
          />
          <Button type="submit" variant="contained" sx={{ mt: 3 }} fullWidth>
            Sign In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
