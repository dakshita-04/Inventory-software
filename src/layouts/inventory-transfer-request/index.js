import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
// Soft UI Dashboard React examples
import Table from "examples/Tables/Table";
// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";
import { Link } from "react-router-dom";

import SoftButton from "components/SoftButton";
// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";
import Breadcrumbs from "examples/Breadcrumbs";
// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import SoftInput from "components/SoftInput";
import "../modal.css"
import { useState } from "react";


function InventoryTransferRequest() {
  const { size } = typography;
  const { chart, items } = reportsBarChartData;
  const text = {
    color: "#0B2F8A",
    fontSize: "15px",
    fontWeight: "500",
    marginRight: "10px",
  };
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
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3} mb={15} textAlign="center">
        <SoftTypography
          mb={6}
          style={{ color: "#0B2F8A", fontWeight: "700", fontSize: "30px", lineHeight: "30px",FontFamily:"Inter" }}
        >
        Inventory Transfer Request 
        </SoftTypography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} xl={4}>
            <SoftBox display="flex">
              <SoftTypography style={text} mt={1}>
                From Document Date
              </SoftTypography>
              <SoftInput
                placeholder="Enter From Order Date..."
                icon={{
                  component: "search",
                  direction: "left",
                }}
              />
            </SoftBox>
          </Grid>
          <Grid item xs={12} sm={6} xl={4}>
            <SoftBox display="flex">
              <SoftTypography style={text} mt={1}>
              Order Status
              </SoftTypography>
              <SoftInput
                placeholder="Enter Order Status..."
                icon={{
                  component: "search",
                  direction: "left",
                }}
              />
            </SoftBox>
          </Grid>
          <Grid item xs={12} sm={6} xl={4}>
            <SoftBox display="flex">
              <SoftTypography style={text} mt={1}>
                Series
              </SoftTypography>
              <SoftInput
                placeholder="Enter Series..."
                icon={{
                  component: "search",
                  direction: "left",
                }}
              />
            </SoftBox>
          </Grid>
        </Grid>
        <Grid container spacing={2} mt={5}>
          <Grid item xs={12} sm={6} xl={4}>
            <SoftBox display="flex">
              <SoftTypography style={text} mt={1}>
                To Document Date
              </SoftTypography>
              <SoftInput
                placeholder="Enter To Order Date..."
                icon={{
                  component: "search",
                  direction: "left",
                }}
              />
            </SoftBox>
          </Grid>
          <Grid item xs={12} sm={6} xl={4}>
            
          <SoftBox display="flex">
          <SoftTypography style={text} mt={1}>
          Warehouse
          </SoftTypography>
          <SoftInput
            placeholder="Enter Warehouse..."
            icon={{
              component: "search",
              direction: "left",
            }}
          />
        </SoftBox>
          </Grid>
          <Grid item xs={12} sm={6} xl={4}>
            <SoftBox display="flex">
              <SoftTypography style={text} mt={1}>
                Document Number
              </SoftTypography>
              <SoftInput
                placeholder="Document Number..."
                icon={{
                  component: "search",
                  direction: "left",
                }}
              />
            </SoftBox>
          </Grid>
        </Grid>
        <SoftBox mt={6} >
        <SoftTypography component={Link}
        to="/goods-filter-note">
        <SoftButton
        variant="contained"
        color="info"
        style={{
          backgroundColor: "#0B2F8A",
          boxShadow: " 0px 8px 24px -2px rgba(11, 47, 138, 0.6)",
        }}
      >
        Apply Filter
      </SoftButton>
        </SoftTypography>
        
        </SoftBox>
        <SoftBox style={{ display: "flex", justifyContent: "center" }} mt={6}>
          <SoftTypography
            style={{ color: "#0B2F8A", fontWeight: "700", fontSize: "20px",spacing:"5%"}}
          >
          Your Inventory Transfer Request
          </SoftTypography>
          <SoftButton
            variant="contained"
            color="info"
            style={{
              backgroundColor: "#0B2F8A",
              boxShadow: " 0px 8px 24px -2px rgba(11, 47, 138, 0.6)",
              marginLeft: "100px",
            }}
          >
            Filter Category
          </SoftButton>
        </SoftBox>
        <SoftBox ml={13} mt={5} style={{marginRight:"80px"}}>
        <Table
        columns={[
          { name: "PRODUCTIONORDERNO", align: "left" },
          { name: "ORDERDATE", align: "left" },
          { name: "PRODUCTIONITEM", align: "center" },
          { name: "QUANTITYPLANNED", align: "center" },
          { name: "PRODUCTIONITEMCODE", align: "center" },
        ]}
        rows={[
          {
            PRODUCTIONORDERNO: "John Micheal",
            ORDERDATE: "23/04/18",
            PRODUCTIONITEM : "john@user.com",
            QUANTITYPLANNED: "Manager",
            PRODUCTIONITEMCODE: "Spotify Version"
          },
          {
            PRODUCTIONORDERNO: "John Micheal",
            ORDERDATE: "23/04/18",
            PRODUCTIONITEM : "john@user.com",
            QUANTITYPLANNED: "Manager",
            PRODUCTIONITEMCODE: "Spotify Version"
          },
          {
            PRODUCTIONORDERNO: "John Micheal",
            ORDERDATE: "23/04/18",
            PRODUCTIONITEM : "john@user.com",
            QUANTITYPLANNED: "Manager",
            PRODUCTIONITEMCODE: "Spotify Version"
          },
          {
            PRODUCTIONORDERNO: "John Micheal",
            ORDERDATE: "23/04/18",
            PRODUCTIONITEM : "john@user.com",
            QUANTITYPLANNED: "Manager",
            PRODUCTIONITEMCODE: "Spotify Version"
          },
          {
            PRODUCTIONORDERNO: "John Micheal",
            ORDERDATE: "23/04/18",
            PRODUCTIONITEM : "john@user.com",
            QUANTITYPLANNED: "Manager",
            PRODUCTIONITEMCODE: "Spotify Version"
          },
          {
            PRODUCTIONORDERNO: "John Micheal",
            ORDERDATE: "23/04/18",
            PRODUCTIONITEM : "john@user.com",
            QUANTITYPLANNED: "Manager",
            PRODUCTIONITEMCODE: "Spotify Version"
          },
        ]}
      />
        </SoftBox>
        <SoftBox style={{ display: "flex"}} mt={4}>
        <SoftBox >
        <SoftButton
            variant="contained"
            color="info"
            style={{
              backgroundColor: "#0B2F8A",
              boxShadow: " 0px 8px 24px -2px rgba(11, 47, 138, 0.6)",
              marginLeft: "100px",
            }}
          >
          Select All
          </SoftButton>
          <SoftButton
            variant="contained"
            color="info"
            style={{
              backgroundColor: "#0B2F8A",
              boxShadow: " 0px 8px 24px -2px rgba(11, 47, 138, 0.6)",
              marginLeft: "30px",
            }}
          >
          DeSelect All
          </SoftButton>
        </SoftBox>
        <SoftBox ml={70}>
        <SoftButton
            variant="contained"
            color="info"
            style={{
              backgroundColor: "#0B2F8A",
              boxShadow: " 0px 8px 24px -2px rgba(11, 47, 138, 0.6)",
              marginLeft: "100px",
            }}
            onClick={toggleModal}
          >
          Add ITR
          </SoftButton>
          <SoftButton
            variant="contained"
            color="info"
            style={{
              backgroundColor: "#0B2F8A",
              boxShadow: " 0px 8px 24px -2px rgba(11, 47, 138, 0.6)",
              marginLeft: "30px",
            }}
          >
          Cancel ITR
          </SoftButton>
        </SoftBox>
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
    <Footer />
    </DashboardLayout>
  );
}

export default InventoryTransferRequest;
