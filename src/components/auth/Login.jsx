import React from "react";
import { useNavigate } from "react-router-dom";
import { Avatar, Box, Button, Checkbox, Divider, FormControlLabel, Grid, Link, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    position: "relative",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    opacity: 0.2,
    zIndex: 1,
  },
  leftSection: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "flex-start",
    padding: "3rem",
    color: "#fff",
    zIndex: 2,
  },
  rightSection: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "3rem",
    zIndex: 2,
  },
  formContainer: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    padding: "2rem",
    borderRadius: "16px",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.6)",
  },
  avatar: {
    bgcolor: "#352b66",
    width: 56,
    height: 56,
    margin: "0 auto",
    boxShadow: "0 4px 10px rgba(37, 99, 235, 0.5)",
  },
  formTitle: {
    color: "#fff",
    fontWeight: "bold",
    marginTop: "1rem",
  },
  textField: {
    backgroundColor: "#ffffff20",
    borderRadius: "8px",
    input: { color: "#fff" },
    label: { color: "#ccc" },
  },
  submitButton: {
    mt: 2,
    backgroundColor: "#352b66",
    color: "#fff",
    padding: "0.7rem",
    fontWeight: "bold",
    "&:hover": { backgroundColor: "#392a85" },
  },
  googleButton: {
    color: "#fff",
    borderColor: "#ffffff50",
    mb: 2,
    "&:hover": { borderColor: "#fff" },
  },
  facebookButton: {
    color: "#fff",
    borderColor: "#ffffff50",
    "&:hover": { borderColor: "#fff" },
  },
  divider: {
    my: 2,
    backgroundColor: "#ffffff30",
  },
  link: {
    color: "#ccc",
    fontSize: "0.875rem",
    cursor: "pointer",
  },
  text: {
    fontWeight: "bold",
    mb: 1,
  },
  imageContainer: {
    fontWeight: "bold",
    marginBottom: "1.5rem",
  },
  responsive: {
    // Mobile responsiveness
    "@media (max-width: 600px)": {
      leftSection: {
        padding: "2rem",
        textAlign: "center",
      },
      rightSection: {
        padding: "2rem",
      },
      formContainer: {
        maxWidth: "90%",
        padding: "1.5rem",
      },
    },
  },
};

const Login = () => {
  const navigate = useNavigate();

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
      const { email, password } = values;
      const users = JSON.parse(localStorage.getItem("users")) || [];

      const userExists = users.some(
        (user) => user.email === email && user.password === password
      );

      if (userExists) {
        toast.success("Login successful!", { position: "top-center", autoClose: 2000 });
        setTimeout(() => navigate("/home"), 2000);
      } else {
        toast.error("Invalid email or password!", { position: "top-center", autoClose: 3000 });
      }
    },
  });

  return (
    <Box sx={styles.container}>
      <Box component="img" src="https://plus.unsplash.com/premium_photo-1684338795288-097525d127f0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZnVybml0dXJlfGVufDB8MHwwfHx8MA%3D%3D" alt="Background" sx={styles.backgroundImage} />
      
      <Box sx={styles.leftSection}>
        <Box>
          <Typography variant="h4" sx={styles.text}>Furniture Store</Typography>
          <Typography variant="h6" sx={styles.text}>Adaptable performance</Typography>
          <Typography variant="body1" sx={{ mb: 3 }}>Our product effortlessly adjusts to your needs.</Typography>
        </Box>
      </Box>

      <Box sx={styles.rightSection}>
        <Box sx={styles.formContainer}>
          <Box sx={styles.imageContainer}>
            <Avatar sx={styles.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography variant="h5" sx={styles.formTitle}>Sign in</Typography>
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
              sx={styles.textField}
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
              sx={styles.textField}
            />
            <Grid container justifyContent="space-between" alignItems="center">
              <FormControlLabel control={<Checkbox value="remember" />} label={<Typography sx={{ color: "#ccc" }}>Remember me</Typography>} />
              <Link onClick={() => navigate("/register")} sx={styles.link}>Register here</Link>
            </Grid>
            <Button fullWidth variant="contained" type="submit" sx={styles.submitButton}>Sign in</Button>

            <Divider sx={styles.divider}>or</Divider>
            <Button fullWidth variant="outlined" startIcon={<GoogleIcon />} sx={styles.googleButton}>Sign in with Google</Button>
            <Button fullWidth variant="outlined" startIcon={<FacebookIcon />} sx={styles.facebookButton}>Sign in with Facebook</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Login;
