import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import * as React from "react";
import Slider from "@mui/material/Slider";
import CssBaseline from "@mui/material/CssBaseline";

export default function GeneralFilter(props) {
  let filter;
  if (props.filter) {
    filter = props.filter;
  } else {
    filter = {
      class: {
        Beast: false,
        Bug: false,
        Down: false,
        Plant: false,
        Dusk: false,
        Mech: false
      },
      breedCount: 0,
      mystic: 0,
      pureness: 0,
      other: {
        MEO: false,
        MEOII: false,
        Origin: false
      }
    }
  }
  const [classState, setClassState] = React.useState({
    ...filter.class
  });

  const [otherState, setOtherState] = React.useState({
    ...filter.other
  });

  const [breedCountState, setBreedCountState] = React.useState(filter.mystic);
  const [mysticState, setMysticState] = React.useState(filter.mystic);
  const [purenessState, setPurenessState] = React.useState(filter.pureness);

  const {Beast, Bug, Down, Plant, Dusk, Mech} = classState;
  const {MEO, MEOII, Origin} = otherState;

  const handleChangeClass = (event) => {
    setClassState({
      ...classState,
      [event.target.name]: event.target.checked,
    });
    props.handleChange({class:
        {
          ...classState,
        [event.target.name]: event.target.checked,
        }
    });
  };

  const handleChangeOther = (event) => {
    setOtherState({
      ...otherState,
      [event.target.name]: event.target.checked,
    });
    props.handleChange({other: {
        ...otherState,
        [event.target.name]: event.target.checked,
      }});
  }

  const sliderNumber = [
    {
      value: 0,
      label: 'Any',
    },
    {
      value: 1,
      label: '1',
    },
    {
      value: 2,
      label: '2',
    },
    {
      value: 3,
      label: '3',
    },
    {
      value: 4,
      label: '4',
    },
    {
      value: 5,
      label: '5',
    },
    {
      value: 6,
      label: '6',
    },
  ];

  const handleChangeBreedCount = (event, newValue) => {
    setBreedCountState(newValue);
    props.handleChange({breedCount: breedCountState})
  }

  const handleChangeMystic = (event, newValue) => {
    setMysticState(newValue);
    props.handleChange({mystic: mysticState});
  };

  const handleChangePureness = (event, newValue) => {
    setPurenessState(newValue);
    props.handleChange({mystic: purenessState});
  }

  return <Box>
    <CssBaseline />

    {/*Class*/}
    <Box sx={{px: '10px'}}>
      <Box
        sx={{
          py: '5px',
          mt: '20px',
          color: 'text.secondary',
          fontSize: '14px',
          fontWeight: 'medium',}}>
        CLASS
      </Box>
      <FormGroup>
        <Box sx={{ flexWrap: 'wrap' }}>
          <FormControlLabel
            control={
              <Checkbox checked={Beast} onChange={handleChangeClass} name="Beast" />
            }
            label="Beast" />
          <FormControlLabel
            control={
              <Checkbox checked={Bug} onChange={handleChangeClass} name="Bug" />
            }
            label="Bug" />
          <FormControlLabel
            control={
              <Checkbox checked={Down} onChange={handleChangeClass} name="Down" />
            }
            label="Down" />
          <FormControlLabel
            control={
              <Checkbox checked={Plant} onChange={handleChangeClass} name="Plant" />
            }
            label="Plant" />
          <FormControlLabel
            control={
              <Checkbox checked={Dusk} onChange={handleChangeClass} name="Dusk" />
            }
            label="Dusk" />
          <FormControlLabel
            control={
              <Checkbox checked={Mech} onChange={handleChangeClass} name="Mech" />
            }
            label="Mech" />
        </Box>
      </FormGroup>
    </Box>

    {/*Breed Count*/}
    <Box sx={{px: '10px'}}>
      <Box
        sx={{
          py: '5px',
          mt: '20px',
          color: 'text.secondary',
          fontSize: '14px',
          fontWeight: 'medium',}}>
        BREED COUNT
      </Box>
      <Slider
        aria-label="Bread Count"
        defaultValue={breedCountState}
        valueLabelDisplay="auto"
        step={1}
        min={0}
        max={7}
        onChange={handleChangeBreedCount}
      />
    </Box>

    {/*Mystic*/}
    <Box sx={{px: '10px'}}>
      <Box
        sx={{
          py: '5px',
          mt: '20px',
          color: 'text.secondary',
          fontSize: '14px',
          fontWeight: 'medium',}}>
        MYSTIC
      </Box>
      <Slider
        aria-label="Mystic"
        defaultValue={mysticState}
        step={1}
        min={0}
        max={6}
        valueLabelDisplay="auto"
        marks={sliderNumber}
        onChange={handleChangeMystic}
      />
    </Box>

    {/*Pureness*/}
    <Box sx={{px: '10px'}}>
      <Box
        sx={{
          py: '5px',
          mt: '20px',
          color: 'text.secondary',
          fontSize: '14px',
          fontWeight: 'medium',}}>
        PURENESS
      </Box>
      <Slider
        aria-label="Pureness"
        defaultValue={purenessState}
        step={1}
        min={0}
        max={6}
        valueLabelDisplay="auto"
        marks={sliderNumber}
        onChange={handleChangePureness}
      />
    </Box>

    {/*Other*/}
    <Box sx={{px: '10px'}}>
      <Box
        sx={{
          py: '5px',
          mt: '20px',
          color: 'text.secondary',
          fontSize: '14px',
          fontWeight: 'medium',}}>
        OTHER
      </Box>
      <FormGroup>
        <Box sx={{ flexWrap: 'wrap' }}>
          <FormControlLabel
            control={
              <Checkbox checked={MEO} onChange={handleChangeOther} name="MEO" />
            }
            label="MEO" />
          <FormControlLabel
            control={
              <Checkbox checked={MEOII} onChange={handleChangeOther} name="MEOII" />
            }
            label="MEO II" />
          <FormControlLabel
            control={
              <Checkbox checked={Origin} onChange={handleChangeOther} name="Origin" />
            }
            label="Origin" />
        </Box>
      </FormGroup>
    </Box>

  </Box>
}