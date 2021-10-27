import Box from "@mui/material/Box";
import * as React from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import ToggleButton from "@mui/material/ToggleButton";
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import HeroCard from "./HeroCard";

export default function MarketPlaceMain(props) {
  const [type, setType] = React.useState('all');
  const [sort, setSort] = React.useState('highestPrice');
  const [view, setView] = React.useState('list');

  const handleChangeType = (event) => {
    setType(event.target.value);
    props.handleChangeType(event.target.value);
  };

  const handleChangeSort = (event) => {
    setSort(event.target.value);
    props.handleChangeSort(event.target.value);
  };

  const handleChangeView = (event, nextView) => {
    setView(nextView);
    props.handleChangeView(event.target.value);
  };
  return <div style={{width: '100%'}}>
    <div style={{width: '50%', float: 'left'}}>
      <Box sx={{display: 'flex', px: '10px', flexWrap: 'wrap'}}>
        <Box
          sx={{
            py: '5px',
            mt: '20px',
            color: 'text.secondary',
            fontSize: '18px',
            fontWeight: 'bolder',}}>
          {props.total + ' heroes'}
        </Box>
        <FormControl variant="standard" sx={{
          minWidth: 120,
          mt: 3,
          ml: 2
        }}>
          <Select
            value={type}
            label="Type"
            onChange={handleChangeType}
          >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="forSale">For sale</MenuItem>
            <MenuItem value="notForSale">Not for sale</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </div>
    <div style={{width: '50%', float: 'right'}}>
      <Box sx={{flexWrap: 'wrap', justifyContent: 'flex-end', flexGrow: 1}}>
        <FormControl variant="standard" sx={{
          minWidth: 120,
          mt: 3,
          ml: 2
        }}>
          <Select
            value={sort}
            label="Sort"
            onChange={handleChangeSort}
            sx={{
              alignSelf: 'flex-end'
            }}
          >
            <MenuItem value="highestId">Highest ID</MenuItem>
            <MenuItem value="notForSale">Lowest ID</MenuItem>
            <MenuItem value="highestPrice">Highest Price</MenuItem>
            <MenuItem value="notForSale">Lowest Price</MenuItem>
            <MenuItem value="notForSale">Latest</MenuItem>
          </Select>
        </FormControl>

        <ToggleButtonGroup
          size="small"
          orientation="horizontal"
          value={view}
          exclusive
          onChange={handleChangeView}
          sx={{
            mt: 2,
            ml: 3
          }}
        >
          <ToggleButton value="list" aria-label="list">
            <ViewListIcon />
          </ToggleButton>
          <ToggleButton value="module" aria-label="module">
            <ViewModuleIcon />
          </ToggleButton>
        </ToggleButtonGroup>

      </Box>
    </div>
    <Box sx={{
      width: '100%',
      p: 3,
      display: 'flex',
      flexWrap: 'wrap',
    }}>
        <HeroCard color="green" id="424354" price="56045965" image={'/images/hero.jpg'} />
      <HeroCard color="green" id="424354" price="56045965" image={'/images/hero.jpg'} />
      <HeroCard color="green" id="424354" price="56045965" image={'/images/hero.jpg'} />
      <HeroCard color="green" id="424354" price="56045965" image={'/images/hero.jpg'} />
      <HeroCard color="green" id="424354" price="56045965" image={'/images/hero.jpg'} />
      <HeroCard color="green" id="424354" price="56045965" image={'/images/hero.jpg'} />
      <HeroCard color="green" id="424354" price="56045965" image={'/images/hero.jpg'} />
      <HeroCard color="green" id="424354" price="56045965" image={'/images/hero.jpg'} />
      <HeroCard color="green" id="424354" price="56045965" image={'/images/hero.jpg'} />
      <HeroCard color="green" id="424354" price="56045965" image={'/images/hero.jpg'} />
      <HeroCard color="green" id="424354" price="56045965" image={'/images/hero.jpg'} />
      <HeroCard color="green" id="424354" price="56045965" image={'/images/hero.jpg'} />
      <HeroCard color="green" id="424354" price="56045965" image={'/images/hero.jpg'} />
      <HeroCard color="green" id="424354" price="56045965" image={'/images/hero.jpg'} />
      <HeroCard color="green" id="424354" price="56045965" image={'/images/hero.jpg'} />
      <HeroCard color="green" id="424354" price="56045965" image={'/images/hero.jpg'} />
      <HeroCard color="green" id="424354" price="56045965" image={'/images/hero.jpg'} />
      <HeroCard color="green" id="424354" price="56045965" image={'/images/hero.jpg'} />
      <HeroCard color="green" id="424354" price="56045965" image={'/images/hero.jpg'} />
      <HeroCard color="green" id="424354" price="56045965" image={'/images/hero.jpg'} />
      <HeroCard color="green" id="424354" price="56045965" image={'/images/hero.jpg'} />
      <HeroCard color="green" id="424354" price="56045965" image={'/images/hero.jpg'} />
      <HeroCard color="green" id="424354" price="56045965" image={'/images/hero.jpg'} />
      <HeroCard color="green" id="424354" price="56045965" image={'/images/hero.jpg'} />
      <HeroCard color="green" id="424354" price="56045965" image={'/images/hero.jpg'} />
    </Box>
  </div>
}