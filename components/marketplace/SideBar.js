import Box from "@mui/material/Box";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import * as React from "react";
import GeneralFilter from "./filters/GeneralFilter";
import TabPanel from "../TabPanel";
import PartsFilter from "./filters/PartsFilter";
import StatsFilter from "./filters/StatsFilter";

export default function SideBar() {
  const [filterGroupState, setFilterGroupState] = React.useState(0);
  const handleChangeFilterGroup = (event, newValue) => {
    setFilterGroupState(newValue);
  }
  const handleGeneralFilterChange = filter => {
    console.log(filter);
  }
  return <Box sx={{flexDirection: 'row', overflow: 'auto', p: '20px'}}>
    <Box display="flex"
         justifyContent="center"
         alignItems="center">
      <ToggleButtonGroup
        color="primary"
        value={filterGroupState}
        exclusive
        onChange={handleChangeFilterGroup}
      >
        <ToggleButton value={0}>
          General
        </ToggleButton>
        <ToggleButton value={1}>Parts</ToggleButton>
        <ToggleButton value={2}>Stats</ToggleButton>
      </ToggleButtonGroup>
    </Box>

    <TabPanel value={filterGroupState} index={0}>
      <GeneralFilter handleChange={handleGeneralFilterChange} />
    </TabPanel>
    <TabPanel value={filterGroupState} index={1}>
      <PartsFilter />
    </TabPanel>
    <TabPanel value={filterGroupState} index={2}>
      <StatsFilter />
    </TabPanel>
  </Box>
}