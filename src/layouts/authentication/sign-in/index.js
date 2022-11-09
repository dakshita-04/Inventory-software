
import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import SoftInput from "components/SoftInput";
import SoftButton from "components/SoftButton";

// Authentication layout components
import CoverLayout from "layouts/authentication/components/CoverLayout";

// Images
import curved6 from "assets/images/curved-images/curved-6.jpg";
import { backgroundImage } from 'assets/images/curved-images/white-curved.jpeg';

function SignIn() {
  const [rememberMe, setRememberMe] = useState(true);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  return (
    
    <CoverLayout
      title="Get Started"
      image={curved6}
    >
    <SoftBox component="form" role="form">
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
          
            <SoftTypography component="label" variant="caption" fontWeight="bold">
            Phone Number
            </SoftTypography>
            
          </SoftBox>
          <SoftInput type="tel" placeholder="Enter your Phone Number" />
        </SoftBox>
        
        <SoftBox mt={4} mb={1} textAlign="center">
          <SoftButton  style={{backgroundColor:"#0B2F8A",color:"white"}} size="large">
          <SoftTypography
            component={Link}
            to="/authentication/otp-verification"
            variant="button"
            color ="default"
            fontWeight="medium"
          >
          REQUEST OTP
          </SoftTypography>
          </SoftButton>
        </SoftBox>
        <SoftBox mt={3} textAlign="center">
        <SoftTypography variant="button" color="text" fontWeight="regular">
        Don&apos;t have an account?{" "}
          <SoftTypography
            component={Link}
            to="/authentication/sign-up"
            variant="button"
            color="info"
            fontWeight="medium"
            textGradient
          >
          Register
          </SoftTypography>
        </SoftTypography>
      </SoftBox>
      </SoftBox>
    
    </CoverLayout>
  );
}

export default SignIn;
