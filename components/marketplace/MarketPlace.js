import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import React from "react";
import Tab from "@mui/material/Tab";
import SideBar from "./SideBar";
import Divider from "@mui/material/Divider";
import MarketPlaceMain from "./MarketPlaceMain";

export default function MarketPlace() {
  const sideBarWidth = 300;
  const total = 555;
  const [tabValue, setTabValue] = React.useState(0);
  const handleChangeTab = (event, newValue) => {
    setTabValue(newValue);
  }
  const handleChangeType = (type) => {
    console.log(type);
  }
  const handleChangeSort = (sort) => {
    console.log(sort);
  }
  const handleChangeView = (view) => {
    console.log(view);
  }
  return <Box>
    <Box>
      <Tabs value={tabValue} onChange={handleChangeTab} aria-label="market tab">
        <Tab label="Heroes" />
        <Tab label="Lands" />
        <Tab label="Items" />
      </Tabs>
    </Box>
    <Divider />

    <Box sx={{display: 'flex'}}>
      <Box sx={{width: sideBarWidth + 'px'}}>
        <SideBar/>
      </Box>
      <Divider orientation="vertical" flexItem />
      <Box sx={{flexGrow: 1}}>
        <MarketPlaceMain
          total={total}
          handleChangeType={handleChangeType}
          handleChangeSort={handleChangeSort}
          handleChangeView={handleChangeView}
        />
      </Box>
    </Box>

  </Box>;
}