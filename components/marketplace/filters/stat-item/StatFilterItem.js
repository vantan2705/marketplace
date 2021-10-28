import Box from "@mui/material/Box";
import * as React from "react";
import Image from "next/image";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import Avatar from "@mui/material/Avatar";

export default function StatFilterItem(props) {

  const [value, setValue] = React.useState(props.value);

  const marks = [
    {
      value: props.min,
      label: props.min,
    },
    {
      value: props.max,
      label: props.max,
    }
    ]

  return <Box sx={{py: 1}}>

    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        bgcolor: 'background.paper',
      }}
    >
      <Box sx={{ display: 'inline-flex', pt: 0.8 }}>
        <Avatar alt="item"
                src="/images/hero.jpg"
                variant="square"
                sx={{ width: 24, height: 24 }}
        />
        <Box
          sx={{
            color: 'text.secondary',
            fontSize: '14px',
            fontWeight: 'medium',}}>
          CLASS
        </Box>
      </Box>

      <Button size="small">Reset</Button>

    </Box>

    <Box
      sx={{
        px: 1
    }}>
      <Slider
        aria-label="Bread Count"
        defaultValue={value}
        valueLabelDisplay="auto"
        step={1}
        min={props.min}
        max={props.max}
        marks={marks}
      />
    </Box>

  </Box>
}