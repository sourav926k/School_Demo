import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import * as actions from "../../actions";
import { connect } from "react-redux"
import Notice from "../Table/Notice";

const useStyle = makeStyles((theme) => ({
  root: {
    // minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  header: {
    minHeight: "95vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  paper: {
    background: "none",
    height: 600,
  },
}));

const Places = (props) => {
  const classes = useStyle();

  return (
    <>
      {/* <h2 className={classes.header}>Important Notice</h2> */}

      <div className={classes.root} id="place-to-visit">
        <br />
        {/* <Paper className={classes.paper}> */}
        <Notice />
        {/* </Paper> */}
      </div>
    </>
  );
};

function mapDispatchToProps(dispatch) {
  console.log("actions:", actions);
  console.log("working mapDispatchToProps ");
  return { fetchNotice: dispatch(actions.fetchNotice(actions)) };
}

function mapStateToProps(state) {
  console.log("working");
  console.log("mapStateToProps", state);
  return {
    notice: state.notice,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Places);
