import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import ListItemText from "@mui/material/ListItemText";
import * as React from "react";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import SearchIcon from '@mui/icons-material/Search';

export default function PartsFilter(props) {
  return <Box>

    <Box sx={{ display: 'flex', alignItems: 'flex-end', m: 1, mt: 2 }}>
      <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
      <TextField id="input-with-sx" variant="outlined" size="small" />
    </Box>

    <Box>
      <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="item" src="/images/hero.jpg" />
          </ListItemAvatar>
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="item" src="/images/hero.jpg" />
          </ListItemAvatar>
          <ListItemText primary="Work" secondary="Jan 7, 2014" />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar alt="item" src="/images/hero.jpg" />
          </ListItemAvatar>
          <ListItemText primary="Vacation" secondary="July 20, 2014" />
        </ListItem>
      </List>
    </Box>

    <Divider />

    <Box>
      <Box
        sx={{
          py: '5px',
          mt: '20px',
          color: 'text.secondary',
          fontSize: '14px',
          fontWeight: 'medium',}}>
        SUGGESTIONS
      </Box>

      <Box>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="item" src="/images/hero.jpg" />
            </ListItemAvatar>
            <ListItemText primary="Photos" secondary="Jan 9, 2014" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="item" src="/images/hero.jpg" />
            </ListItemAvatar>
            <ListItemText primary="Work" secondary="Jan 7, 2014" />
          </ListItem>
          <ListItem>
            <ListItemAvatar>
              <Avatar alt="item" src="/images/hero.jpg" />
            </ListItemAvatar>
            <ListItemText primary="Vacation" secondary="July 20, 2014" />
          </ListItem>
        </List>
      </Box>
    </Box>

  </Box>
}