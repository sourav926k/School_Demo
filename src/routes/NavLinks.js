import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";

import { withStyles } from "@material-ui/core/styles";

import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { compose } from "redux";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import * as actions from "../actions";

const styles = (theme) => ({
  header: {
    backgroundColor: "#17A589",
    color: "white",
  },
  sectionDesktop: {},
  // sectionDesktop: {
  //   [theme.breakpoints.up("md", "lg", "xl")]: {
  //     display: "inline",
  //     minHeight: "35px",
  //   },
  // },
});
class NavLinks extends Component {
  constructor() {
    super();
    this.state = {
      mobilemenuanchor: "null",
    };
  }
  setmobileanchor() {
    this.setState({
      //cxcsc
    });
  }

  // state = {
  //   mobileMenuAnchor: null
  // }

  // this.setState({
  //   mobileMenuAnchor: "true"
  // })

  renderLinks() {
    const { classes } = this.props;

    // const mobileMenu = (
    //   <Menu>
    //     <MenuItem component={Link} to="/">
    //       HOME
    //     </MenuItem>
    //     <MenuItem component={Link} to="/notice">
    //       NOTICE
    //     </MenuItem>
    //     <MenuItem component={Link} to="/contactus">
    //       INFORM PARENTS
    //     </MenuItem>
    //     <MenuItem component={Link} to="/notice-post">
    //       POST NOTICE
    //     </MenuItem>
    //     <MenuItem component={Link} to="/listView">
    //       VIEW RECORDS
    //     </MenuItem>
    //     <MenuItem component={Link} to="/logout">
    //       LOG OUT
    //     </MenuItem>
    //   </Menu>
    // );

    if (this.props.auth) {
      return (
        <>
          <AppBar className={classes.header}>
            <Toolbar>
              <img
                src="https://media.istockphoto.com/vectors/black-and-white-illustration-of-a-school-logo-vector-id1136343416?k=6&m=1136343416&s=170667a&w=0&h=sztUR6SSjxwCNjRhfJGmdVoIbGUTADrbDde98A_x4qc="
                alt="Kitty Katty!"
                style={{
                  minHeight: "12px",
                  marginRight: "35px",
                  width: "62px",
                  borderRadius: "15px",
                }}
              />
              <Typography variant="h4" style={{ flexGrow: 1 }}>
                Abc School
              </Typography>
              <div className={classes.sectionDesktop}>
                <Button color="inherit" component={Link} to="/">
                  Home
                </Button>
                <Button color="inherit" component={Link} to="/notice">
                  Notice
                </Button>
                <Button color="inherit" component={Link} to="/contactus">
                  Inform Parents
                </Button>
                <Button color="inherit" component={Link} to="/notice-post">
                  Post Notice
                </Button>
                <Button color="inherit" component={Link} to="/listView">
                  View Student Records
                </Button>
                <Button color="inherit" component={Link} to="/logout">
                  Log Out
                </Button>
              </div>
              {/* //add some icom after responsive  */}
            </Toolbar>
          </AppBar>
          {this.mobileMenu}
        </>
      );
    } else {
      return (
        <AppBar className={classes.header}>
          <Toolbar>
            <img
              src="https://media.istockphoto.com/vectors/black-and-white-illustration-of-a-school-logo-vector-id1136343416?k=6&m=1136343416&s=170667a&w=0&h=sztUR6SSjxwCNjRhfJGmdVoIbGUTADrbDde98A_x4qc="
              alt="Kitty Katty!"
              style={{
                minHeight: "12px",
                marginRight: "35px",
                width: "62px",
                borderRadius: "15px",
              }}
            />
            <Typography variant="h4" style={{ flexGrow: 1 }}>
              Abc School
            </Typography>
            <Button color="inherit" component={Link} to="/">
              Home
            </Button>
            <Button color="inherit" component={Link} to="/notice">
              Notice
            </Button>
            <Button color="inherit" component={Link} to="/admissionForm">
              New Admission
            </Button>
            <Button color="inherit" component={Link} to="/loginpage">
              Login
            </Button>
            <Button color="inherit" component={Link} to="#">
              Sign Up
            </Button>
          </Toolbar>
        </AppBar>
      );
    }
  }

  render() {
    return <div>{this.renderLinks()}</div>;
  }
}

// Getting the value from reducer
function mapStateToProps(state) {
  // return { auth: state.authenticate };
  return { auth: state.auth.authenticated };
}

export default compose(
  connect(mapStateToProps, actions),
  withStyles(styles, { withTheme: true })
)(NavLinks);
