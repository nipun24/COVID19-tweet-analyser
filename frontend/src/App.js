import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import { makeStyles } from "@material-ui/core/styles";

const styles = {
  background: "linear-gradient(rgb(255,255,255,.16), rgb(255,255,255,.16))",
};

const useStyles = makeStyles({
  paper: {
    backgroundColor: "#121212",
    background: "linear-gradient(rgb(255,255,255,.16), rgb(255,255,255,.16))",
  },
});

const App = () => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    isOpen: false,
  });

  const toggleDrawer = (isOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, isOpen: isOpen });
  };

  return (
    <div style={{ backgroundColor: "#212121" }}>
      <AppBar position="static">
        <Toolbar variant="dense" style={styles}>
          <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={state.isOpen}
        onClose={toggleDrawer(false)}
        classes={{ paper: classes.paper }}
      >
        <List style={{ width: "auto" }}>
          <ListItem button>
            <ListItemText primary="Time Graph" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Location Based" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Heat Map" />
          </ListItem>
          <ListItem button>
            <ListItemText primary="Pie Chart" />
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
};

export default App;
