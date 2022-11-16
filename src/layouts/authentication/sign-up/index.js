
import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";

// Images
import curved6 from "assets/images/curved-images/curved14.jpg";
import usrImage from "assets/images/curved-images/user.png"
import { styled } from '@mui/material/styles';

function SignUp() {
  const [agreement, setAgremment] = useState(true);

  const handleSetAgremment = () => setAgremment(!agreement);

  return (
    <BasicLayout
      title="Inventory Distribution"
      description="Use these awesome forms to login or create new account in your project for free."
      image={curved6}
    >
      <Card>
        <SoftBox p={3} mb={1} textAlign="center">
          <SoftTypography variant="h3" fontWeight="bold" style={{color:"#0B2F8A"}}>
            Register 
          </SoftTypography>
        </SoftBox>
        {/*
      <SoftBox mb={2}>
        
          <Socials />
        </SoftBox>
        <Separator />
      */}
      <SoftBox  textAlign="center">
        <img src={usrImage} alt="image" style={{height:"60px",width:"60px"}}/>

    </SoftBox>
        <SoftBox pt={2} pb={3} px={3}>
          <SoftBox component="form" role="form">
            <SoftBox>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
            Full Name
            </SoftTypography>
              <SoftInput placeholder="Name" />
            </SoftBox>
            <SoftBox >
            <SoftTypography component="label" variant="caption" fontWeight="bold">
            Phone Number
            </SoftTypography>
              <SoftInput type="tel" placeholder="9957349267" />
            </SoftBox>
            <SoftBox >
            <SoftTypography component="label" variant="caption" fontWeight="bold">
            Employee Code
            </SoftTypography>
              <SoftInput type="text" placeholder="AH0007854" />
            </SoftBox>
            <SoftBox >
            <SoftTypography component="label" variant="caption" fontWeight="bold">
            Email
            </SoftTypography>
              <SoftInput type="email" placeholder="krishnamohan@gmail.com" />
            </SoftBox>
            <SoftBox mb={2}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
            Password
            </SoftTypography>
              <SoftInput type="password" placeholder="Password" />
            </SoftBox>
            <SoftBox mt={4} mb={1}>
            <SoftTypography  component={Link}
            to="/dashboard">
            <SoftButton fullWidth style={{backgroundColor:"#0B2F8A",color:"white",boxShadow:"0px 8px 24px -2px rgba(11, 47, 138, 0.6)",borderRadius:"16px"}}>
              Register
              </SoftButton>
            </SoftTypography>
            </SoftBox>
            <SoftBox mt={3} textAlign="center">
              <SoftTypography variant="button" color="text" fontWeight="regular">
                Already have an account?&nbsp;
                <SoftTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="dark"
                  fontWeight="bold"
                  textGradient
                >
                  Sign in
                </SoftTypography>
              </SoftTypography>
            </SoftBox>
          </SoftBox>
        </SoftBox>
      </Card>
    </BasicLayout>
  );
}

export default SignUp;
