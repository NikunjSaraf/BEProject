import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
//import AccountBoxOutlinedIcon from '@material-ui/icons/AccountBoxOutlined';
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import firebase from "../config/fire";
import { Link } from "react-router-dom";
//import { Button } from "@material-ui/core";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function Dashboard(props) {
  const classes = useStyles();
  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  if (!firebase.getCurrentUsername()) {
    // not logged in
    alert("Please login first");
    props.history.replace("/auth/login");
    return null;
  }

  return (
    <div className={classes.root}>
      <FormGroup>
        {/* <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
              onClick={logout}
            />
          }
          label={auth ? "Logout" : "Login"}
        /> */}
      </FormGroup>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Technical Skills Assessment
          </Typography>
          {auth && (
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={handleClose}
              >
                 <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <PersonOutlineOutlinedIcon />
                <MenuItem>Welcome {firebase.getCurrentUsername()}</MenuItem>
              </IconButton><br></br>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <DashboardOutlinedIcon />
                <Link to="/dashboard">
                  <MenuItem onClick={handleClose}>Dashboard</MenuItem>
                </Link>
              </IconButton><br></br>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <EditOutlinedIcon />
                <Link to="/manage-profile" style={{textDecoration:"none"}}>
                  <MenuItem onClick={handleClose}>My Profile</MenuItem>
                </Link>
              </IconButton><br></br>
              
               
                <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <ExitToAppIcon />
                <MenuItem onClick={logout}>Logout</MenuItem>
              </IconButton>
             
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
  async function logout() {
    await firebase.logout();
    props.history.push("/");
  }
}
