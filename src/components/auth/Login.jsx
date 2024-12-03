import React from "react";
import { Avatar, Box, Button, Checkbox, Divider, FormControlLabel, Grid, Link, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useFormik } from "formik";
import * as Yup from "yup";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Email is required"),
      password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <Box sx={{ height: "100vh", width: "100vw", display: "flex", position: "relative" }}>
      {/* Fullscreen Background Image */}
      <Box
        component="img"
        src="https://plus.unsplash.com/premium_photo-1684338795288-097525d127f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnVybml0dXJlfGVufDB8MHwwfHx8MA%3D%3D"
        alt="Background"
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          opacity: 0.2,
          zIndex: 1,
        }}
      />

      {/* Left Section */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "3rem",
          color: "#fff",
          zIndex: 2, // Ensure it's above the background
        }}
      >
        <Box>
          <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>Sitemark</Typography>
          <Typography variant="h6" sx={{ fontWeight: "bold", mb: 1 }}>Adaptable performance</Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>Our product effortlessly adjusts to your needs.</Typography>
        </Box>
      </Box>

      {/* Right Section */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: "3rem",
          // backgroundColor: "#1e293f",
          zIndex: 2, // Ensure it's above the background
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 400,
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            padding: "2rem",
            borderRadius: "16px",
            backdropFilter: "blur(10px)",
            boxShadow: "0 8px 30px rgba(0, 0, 0, 0.6)",
          }}
        >
          <Box sx={{ textAlign: "center", marginBottom: "1.5rem" }}>
            <Avatar
              sx={{
                bgcolor: "#2563eb",
                width: 56,
                height: 56,
                margin: "0 auto",
                boxShadow: "0 4px 10px rgba(37, 99, 235, 0.5)",
              }}
            >
              <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h5" sx={{ color: "#fff", fontWeight: "bold", mt: 1 }}>Sign in</Typography>
          </Box>

          <Box component="form" onSubmit={formik.handleSubmit} noValidate>
            <TextField
              fullWidth
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
              margin="normal"
              sx={{
                backgroundColor: "#ffffff20",
                borderRadius: "8px",
                input: { color: "#fff" },
                label: { color: "#ccc" },
              }}
            />
            <TextField
              fullWidth
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
              margin="normal"
              sx={{
                backgroundColor: "#ffffff20",
                borderRadius: "8px",
                input: { color: "#fff" },
                label: { color: "#ccc" },
              }}
            />
            <Grid container justifyContent="space-between" alignItems="center">
              <FormControlLabel control={<Checkbox value="remember" />} label={<Typography sx={{ color: "#ccc" }}>Remember me</Typography>} />
              <Link href="#" sx={{ color: "#ccc", fontSize: "0.875rem" }}>Forgot your password?</Link>
            </Grid>
            <Button
              fullWidth
              variant="contained"
              type="submit"
              sx={{
                mt: 2,
                backgroundColor: "#2563eb",
                color: "#fff",
                padding: "0.7rem",
                fontWeight: "bold",
                "&:hover": { backgroundColor: "#1d4ed8" },
              }}
            >
              Sign in
            </Button>

            <Divider sx={{ my: 2, backgroundColor: "#ffffff30" }}>or</Divider>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<GoogleIcon />}
              sx={{
                color: "#fff",
                borderColor: "#ffffff50",
                mb: 2,
                "&:hover": { borderColor: "#fff" },
              }}
            >
              Sign in with Google
            </Button>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<FacebookIcon />}
              sx={{
                color: "#fff",
                borderColor: "#ffffff50",
                "&:hover": { borderColor: "#fff" },
              }}
            >
              Sign in with Facebook
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
