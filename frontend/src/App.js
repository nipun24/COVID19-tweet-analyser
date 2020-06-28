import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Grid,
  Paper,
  ListItemIcon,
  Divider,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PieChartIcon from "@material-ui/icons/PieChart";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import HomeIcon from "@material-ui/icons/Home";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  drawerTheme: {
    backgroundColor: "#121212",
    background: "linear-gradient(rgba(255,255,255,.16), rgba(255,255,255,.16))",
  },
  appbarTheme: {
    background: "linear-gradient(rgba(255,255,255,.16), rgba(255,255,255,.16))",
  },
});

const App = () => {
  const classes = useStyles();
  const [isOpen, setDrawer] = React.useState(false);

  const toggleDrawer = (isOpen) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawer(isOpen);
  };

  return (
    <div>
      {/* Navbar */}
      <AppBar position="fixed" classes={{ root: classes.appbarTheme }}>
        <Toolbar variant="dense">
          <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Side navigation drawer */}
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={toggleDrawer(false)}
        classes={{ paper: classes.drawerTheme }}
      >
        <List style={{ width: "auto" }}>
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemIcon>
              <ShowChartIcon />
            </ListItemIcon>
            <ListItemText primary="Time Graph" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <LocationOnIcon />
            </ListItemIcon>
            <ListItemText primary="Location Based" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <WhatshotIcon />
            </ListItemIcon>
            <ListItemText primary="Heat Map" />
          </ListItem>
          <ListItem button>
            <ListItemIcon>
              <PieChartIcon />
            </ListItemIcon>
            <ListItemText primary="Pie Chart" />
          </ListItem>
          <Divider />
        </List>
      </Drawer>

      {/* Graph components - tiles */}
      <Grid
        style={{ height: "100vh" }}
        container
        direction="column"
        justify="space-around"
        alignItems="stretch"
      >
        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="stretch"
        >
          <Paper>Time Graph</Paper>
          <Paper>Location Based</Paper>
        </Grid>

        <Grid
          container
          direction="row"
          justify="space-around"
          alignItems="stretch"
        >
          <Paper>Heat Map</Paper>
          <Paper>Pie Chart</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default App;
