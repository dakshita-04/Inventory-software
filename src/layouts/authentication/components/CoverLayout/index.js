
// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import PageLayout from "examples/LayoutContainers/PageLayout";
// import sap1 from "assets/images/curved-images/qit.png";
// import sap2 from "assets/images/curved-images/sap1.png"
// // Authentication layout components
// import Footer from "layouts/authentication/components/Footer";

function CoverLayout({ color, header, title, description, image, top, children }) {
  return (
    <PageLayout background="linear-gradient(270deg, #0A2FB9 0%, #FF0080 100%);">
   <Card style={{marginTop:"100px",marginLeft:"200px",marginRight:"200px"}}>
   <Grid
   container
   justifyContent="center"
   sx={{
     minHeight: "75vh",
     margin: 0,
   }}
 >
 {/*
<div className="col-md-6">
 <img src={sap1} alt="Logo" style={{width:"200px",position:"absolute"}}/>
 </div>
 <div className="col-md-6">
 <img src={sap2} style={{width:"100px",position:"absolute",marginLeft:"400px",marginTop:"20px"}}/>
 </div>
*/}
 
   <Grid>
   <SoftBox mt={10}>
       <SoftBox pt={3} px={3}>
       <SoftTypography variant="h4" mb={1} style={{color:"#FF0080"}} >Inventory Distribution</SoftTypography>

         {!header ? (
           <>
             <SoftBox mb={1} textAlign="center">
               <SoftTypography variant="h3"  fontWeight="bold" style={{color:"#0B2F8A"}} >
                 {title}
               </SoftTypography>
             </SoftBox>
             <SoftTypography variant="body2" fontWeight="regular" color="text">
               {description}
             </SoftTypography>
 
           </>
         ) : (
           header
         )}
       </SoftBox>
       <SoftBox p={3}>{children}</SoftBox>
     </SoftBox>
   </Grid>
   <Grid item xs={12} md={5}>
     <SoftBox
       height="100%"
       display={{ xs: "none", md: "block" }}
       position="relative"
       right={{ md: "-5rem"}}
       mr={-20}
       sx={{
         transform: "skewX(-10deg)",
         overflow: "hidden",
         borderBottomLeftRadius: ({ borders: { borderRadius } }) => borderRadius.lg,
       }}
     >
       <SoftBox
         ml={-8}
         height="100%"
         sx={{
           backgroundImage: `url(${image})`,
           backgroundSize: "cover",
           transform: "skewX(10deg)",
         }}
       />
     </SoftBox>
   </Grid>
 </Grid>
 
   </Card>
      
     
    </PageLayout>
  );
}

// Setting default values for the props of CoverLayout
CoverLayout.defaultProps = {
  header: "",
  title: "",
  description: "",
  color: "info",
  top: 20,
};

// Typechecking props for the CoverLayout
CoverLayout.propTypes = {
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "dark",
    "light",
  ]),
  header: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  top: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default CoverLayout;
