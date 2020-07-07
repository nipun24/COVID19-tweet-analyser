import React from "react";
import {
  Grid,
  Paper,
  AppBar,
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import ShowChartIcon from "@material-ui/icons/ShowChart";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PieChartIcon from "@material-ui/icons/PieChart";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import HomeIcon from "@material-ui/icons/Home";
import DashboardIcon from "@material-ui/icons/Dashboard";
import { makeStyles } from "@material-ui/core/styles";
import PieChart from "./PieChart.js";
import LineChart from "./LineChart.js";
import { PieData, LineData } from "./TempData.js";
import Location from "./containers/Location.js";

import Map from "./components/Map.js";

const useStyles = makeStyles({
  drawerTheme: {
    backgroundColor: "#121212",
    background: "linear-gradient(rgba(255,255,255,.16), rgba(255,255,255,.16))",
  },
  appbarTheme: {
    background: "linear-gradient(rgba(255,255,255,.16), rgba(255,255,255,.16))",
  },
  dividerColor: {
    backgroundColor: "rgba(255,255,255,.16)",
  },
  paperTheme: {
    backgroundColor: "#121212",
    background: "linear-gradient(rgba(255,255,255,.16), rgba(255,255,255,.16))",
  },
});

const Dashboard = (props) => {
  const classes = useStyles();

  //drawer states and functions
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

  //Location Dialog states and functions
  const [isLocationOpen, setLocationOpen] = React.useState(false);

  const handleLocationOpen = () => {
    setLocationOpen(true);
  };

  const handleLocationClose = () => {
    setLocationOpen(false);
  };

  return (
    <div style={{ height: "100vh", overflowX: "hidden" }}>
      {/* Navbar */}
      <AppBar position="static" classes={{ root: classes.appbarTheme }}>
        <Toolbar variant="dense">
          <IconButton onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">Dashboard</Typography>
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
          <ListItem button onClick={() => props.history.push("/")}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <Divider classes={{ root: classes.dividerColor }} />
          <ListItem button onClick={() => props.history.push("/dashboard")}>
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItem>
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
          <Divider classes={{ root: classes.dividerColor }} />
        </List>
      </Drawer>
      {/* Graph components - tiles */}
      <Grid
        style={{ height: "90vh" }}
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
        spacing={5}
      >
        <Grid item xs={12} sm={12} lg={6}>
          <Paper
            classes={{ root: classes.paperTheme }}
            style={{
              height: "30vh",
              minHeight: "200px",
              minWidth: "500px",
              // margin: "40px 0 0 20px",
            }}
          >
            <LineChart data={LineData} />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={12} lg={6}>
          <Paper
            classes={{ root: classes.paperTheme }}
            style={{
              height: "30vh",
              minHeight: "200px",
              minWidth: "500px",
              "&:hover": {
                cursor: "pointer",
              },
              // margin: "40px 20px 0 0",
            }}
            onClick={() => handleLocationOpen()}
          >
            <Map interactive={false} />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={12} lg={6}>
          <Paper
            classes={{ root: classes.paperTheme }}
            style={{
              height: "30vh",
              minHeight: "200px",
              minWidth: "500px",
              // margin: "0px 0 0 20px",
            }}
          >
            Time Graph
          </Paper>
        </Grid>

        <Grid item xs={12} sm={12} lg={6}>
          <Paper
            classes={{ root: classes.paperTheme }}
            style={{
              height: "30vh",
              minHeight: "200px",
              minWidth: "500px",
              // margin: "0px 20px 0 0",
            }}
          >
            <PieChart data={PieData} />
          </Paper>
        </Grid>
      </Grid>
      <Location open={isLocationOpen} handleClose={handleLocationClose} />
    </div>
  );
};

export default Dashboard;
