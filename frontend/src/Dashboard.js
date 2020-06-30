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

const Dashboard = () => {
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
          <ListItem button>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <Divider classes={{ root: classes.dividerColor }} />
          <ListItem button>
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
        style={{ height: "100vh" }}
        container
        direction="row"
        justify="space-evenly"
        alignItems="center"
      >
        <Grid item xs={12} sm={6}>
          <Paper
            onClick={() => console.log("click")}
            classes={{ root: classes.paperTheme }}
            style={{ height: "200px", width: "500px" }}
          >
            <LineChart data={LineData} />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper>Time Graph</Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper>Time Graph</Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper
            onClick={() => console.log("click")}
            classes={{ root: classes.paperTheme }}
            style={{ height: "200px", width: "200px" }}
          >
            <PieChart data={PieData} />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
