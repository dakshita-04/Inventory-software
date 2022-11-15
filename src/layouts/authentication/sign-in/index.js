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
import curved9 from "assets/images/curved-images/curved-6.jpg";
import { boxShadow } from 'assets/theme/functions/boxShadow';

function SignIn() {
  const [rememberMe, setRememberMe] = useState(true);
  return (
    <CoverLayout
      image={curved9}
    >

      <SoftBox component="form" role="form">
        <SoftBox mb={2}>
          <SoftBox mb={1} ml={0.5}>
            <SoftTypography component="label" variant="caption" fontWeight="bold">
            Phone Number
            </SoftTypography>
          </SoftBox>
          <SoftInput type="tel" placeholder="9975357855" />
        </SoftBox>
        <SoftBox mt={4} mb={1}>
        <SoftTypography  component={Link}
        to="/authentication/otp-verification">
        <SoftButton fullWidth style={{backgroundColor:"#0B2F8A",color:"white",boxShadow:"0px 8px 24px -2px rgba(11, 47, 138, 0.6)",borderRadius:"16px"}}>
          Request OTP
          </SoftButton>
        </SoftTypography>
          
        </SoftBox>
        <SoftBox mt={3} textAlign="center">
          <SoftTypography variant="button" color="text" fontWeight="regular">
            Don&apos;t have an account?{" "}
            <SoftTypography
              component={Link}
              to="/authentication/sign-up"
              variant="button"
              style={{color:'#0B2F8A'}}
              fontWeight="medium"
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
