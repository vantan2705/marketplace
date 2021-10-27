import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Image from "next/image";
import Box from "@mui/material/Box";

export default function HeroCard(props) {
  return (
    <Card sx={{ maxWidth: 300, p: 2, m: 3 }}>
      <Box sx={{ flexDirection: 'column' }}>
        <Box
          sx={{
            display: 'inline',
            px: 1,
            borderRadius: 1,
            bgcolor: props.color,
            color: 'secondary.contrastText',
          }}
        >
          #{props.id}
        </Box>
        <Box>
          Hero #{props.id}
        </Box>
      </Box>
      <Image
        alt="hero"
        src={props.image}
        layout="responsive"
        width={700}
        height={475}
      />
      <Typography gutterBottom variant="h5" component="div">
        $ {props.price}
      </Typography>
    </Card>
  );
}