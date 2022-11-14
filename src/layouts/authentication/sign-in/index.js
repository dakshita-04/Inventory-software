
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
import curved6 from "assets/images/curved-images/curved-6.jpg";
import "../modal.css"

function SignIn() {
  const [rememberMe, setRememberMe] = useState(true);
  const handleSetRememberMe = () => setRememberMe(!rememberMe);
  const [modal, setModal] = useState(false);
  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }
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
            onClick={toggleModal}
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
      
  <SoftBox style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
  {modal && (
    <div className="modal">
      <div onClick={toggleModal} className="overlay"></div>
      <div className="modal-content">
        <h4 style={{color:"#0B2F8A",marginTop:"20px"}}>Please Fill all the Required Fields</h4>
        <button className="close-modal" onClick={toggleModal} style={{backgroundColor:"#0B2F8A",color:"white",border:"none",borderRadius:"5px",marginTop:"50px",marginBottom:"20px",boxShadow: " 0px 8px 24px -2px rgba(11, 47, 138, 0.6)"}}>
          OK
        </button>
      </div>
    </div>
  )}
</SoftBox>
      </SoftBox>
    
    </CoverLayout>
  );
}

export default SignIn;
