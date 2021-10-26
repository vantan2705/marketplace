import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import React from "react";
import Tab from "@mui/material/Tab";
import SideBar from "./SideBar";
import Divider from "@mui/material/Divider";

export default function MarketPlace() {
  const sideBarWidth = 300;
  const [tabValue, setTabValue] = React.useState(0);
  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  }
  return <Box>
    <Box bgcolor="primary.light">
      <Tabs value={tabValue} onChange={handleChangeTab} aria-label="market tab">
        <Tab label="Heroes" />
        <Tab label="Lands" />
        <Tab label="Items" />
      </Tabs>
    </Box>

    <Box sx={{display: 'flex'}}>
      <Box sx={{width: sideBarWidth + 'px'}}>
        <SideBar/>
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box>
        Nooi dung
      </Box>
    </Box>

  </Box>;
}