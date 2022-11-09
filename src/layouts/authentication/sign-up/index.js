
import { useState } from "react";
import { storage } from "../firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
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
import { FaPen } from 'react-icons/fa';

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import Socials from "layouts/authentication/components/Socials";
import Separator from "layouts/authentication/components/Separator";

// Images
import curved6 from "assets/images/curved-images/curved-6.jpg";
import user from "assets/images/curved-images/user.png"
import CoverLayout from 'layouts/authentication/components/CoverLayout';

function SignUp() {
  const [agreement, setAgremment] = useState(true);

  const handleSetAgremment = () => setAgremment(!agreement);
  const [image, setImage] = useState(null);
  const [url, setUrl] = useState(null);

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    const imageRef = ref(storage, "image");
    uploadBytes(imageRef, image)
      .then(() => {
        getDownloadURL(imageRef)
          .then((url) => {
            setUrl(url);
          })
          .catch((error) => {
            console.log(error.message, "error getting the image url");
          });
        setImage(null);
      })
      .catch((error) => {
        console.log(error.message);
      });
  };
  return (
    <CoverLayout 
    title="Register"
    image={curved6}
    >
        <SoftBox textAlign="center">
          <img src={url} alt="user" style={{width:"50px",height:"50px"}}/>
          <input type="file" onChange={handleImageChange} />
          <button onClick={handleSubmit}>Submit</button>
          <FaPen size={15}/>
        </SoftBox>
        <Separator />
        <SoftBox pt={2} pb={3} px={3}>
          <SoftBox component="form" role="form">
            <SoftBox mb={2}>
              <SoftInput type="text" placeholder="FullName" />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput type="tel" placeholder="PhoneNumber" />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput type="email" placeholder="Email" />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput type="text" placeholder="Role" />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput type="number" placeholder="Employee Code" />
            </SoftBox>
            <SoftBox mb={2}>
              <SoftInput type="password" placeholder="Password" />
            </SoftBox>
            
            <SoftBox mt={4} mb={1}>
              <SoftButton variant="gradient" color="dark" fullWidth>
                sign up
              </SoftButton>
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
    </CoverLayout>
  );
}

export default SignUp;
