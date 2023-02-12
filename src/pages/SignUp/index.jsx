import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Switch from "@mui/material/Switch";
import { useLocation } from "react-router-dom";
import Grid from "@mui/material/Grid";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import bgImage from "assets/images/login.jpg";
import { useMaterialUIController, setLayout } from "context";
import { Checkbox } from "@mui/material";

function SignUp() {
  const [controller, dispatch] = useMaterialUIController();
  const { darkMode } = controller;
  const { pathname } = useLocation();

  useEffect(() => {
    setLayout(dispatch, "page");
  }, [pathname]);

  return (
    <MDBox
      width="100vw"
      height="100%"
      minHeight="100vh"
      bgColor="white"
      sx={{ overflow: "hidden" }}
    >
      <Grid
        container
        sx={{
          backgroundColor: ({ palette: { background, white } }) =>
            darkMode ? background.default : white.main,
        }}
      >
        <Grid item xs={12} lg={6}>
          <MDBox
            display={{ xs: "none", lg: "flex" }}
            width="calc(100% - 2rem)"
            height="calc(100vh - 2rem)"
            borderRadius="lg"
            ml={2}
            mt={2}
            sx={{ backgroundImage: `url(${bgImage})` }}
          />
        </Grid>
        <Grid item xs={11} sm={8} md={7} lg={4} xl={4} sx={{ mx: "auto" }}>
          <MDBox
            display="flex"
            flexDirection="column"
            justifyContent="center"
            height="100vh"
          >
            <MDBox py={3} px={3} textAlign="center">
              <>
                <MDBox mb={1} textAlign="center">
                  <MDTypography variant="h4" fontWeight="bold">
                    Join us today
                  </MDTypography>
                </MDBox>
                <MDTypography variant="body2" color="text">
                  Enter your email and password to register
                </MDTypography>
              </>
            </MDBox>
            <MDBox p={3}>
              <MDBox component="form" role="form">
                <MDBox mb={2}>
                  <MDInput type="text" label="First Name" fullWidth />
                </MDBox>
                <MDBox mb={2}>
                  <MDInput type="text" label="Last Name" fullWidth />
                </MDBox>
                <MDBox mb={2}>
                  <MDInput type="text" label="Address" fullWidth />
                </MDBox>

                <MDBox mb={2}>
                  <MDInput type="number" label="Phone Number" fullWidth />
                </MDBox>
                <MDBox mb={2}>
                  <MDInput type="email" label="Email" fullWidth />
                </MDBox>
                <MDBox mb={2}>
                  <MDInput type="password" label="Password" fullWidth />
                </MDBox>
                <MDBox mb={2}>
                  <MDInput type="password" label="Confirm Password" fullWidth />
                </MDBox>
                <MDBox display="flex" alignItems="center" ml={-1}>
                  <Checkbox />
                  <MDTypography
                    variant="button"
                    fontWeight="regular"
                    color="text"
                    sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
                  >
                    &nbsp;&nbsp;I agree the&nbsp;
                  </MDTypography>
                  <MDTypography
                    component="a"
                    href="#"
                    variant="button"
                    fontWeight="bold"
                    color="info"
                    textGradient
                  >
                    Terms and Conditions
                  </MDTypography>
                </MDBox>
                <MDBox mt={4} mb={1}>
                  <MDButton
                    variant="gradient"
                    color="info"
                    size="large"
                    fullWidth
                  >
                    sign up
                  </MDButton>
                </MDBox>
                <MDBox mt={3} textAlign="center">
                  <MDTypography variant="button" color="text">
                    Already have an account?{" "}
                    <MDTypography
                      component={Link}
                      to="/login"
                      variant="button"
                      color="info"
                      fontWeight="medium"
                      textGradient
                    >
                      Sign In
                    </MDTypography>
                  </MDTypography>
                </MDBox>
              </MDBox>
            </MDBox>
          </MDBox>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default SignUp;
