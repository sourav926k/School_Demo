import React, { useEffect, useState } from "react";
import axios from "axios";
// Material Table
import { withStyles, fade, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { AppBar, InputBase, Typography } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
// Material Table
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.black,
    padding: 20,
    fontSize: 18,
  },
  body: {
    fontSize: 17,
  },
}))(TableCell);
const StyledTableRow = withStyles((theme) => ({
  root: {},
}))(TableRow);
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  table: {
    minWidth: 700,
    marginTop: 20,
    // background:'red',
    padding: 10,
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    // backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 20,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  },
  searchbar: {
    alignItems: "center",
    position: "relative",
    borderRadius: "25px",
    // backgroundColor: "white",
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 20,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "250px",
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  heading: {
    textAlign: "center",
    marginTop: "65px",
  },
}));
function TableData() {
  const classes = useStyles();
  // For pagination
  const [value, setValue] = useState([]);
  const [search, setSearch] = useState("");
  const getData = async () => {
    try {
      const data = await axios.get(
        "https://ak-sms-api.herokuapp.com/api/v1/student"
      );

      setValue(data.data.student);
    } catch (e) {
      //console.log(e);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Typography variant="h5" gutterBottom className={classes.heading}>
        Table List
      </Typography>

      <AppBar className={classes.searchbar} color="inherit">
        <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Search…"
            type="text"
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ "aria-label": "search" }}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
      </AppBar>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Roll No.</StyledTableCell>
              <StyledTableCell align="left"> First Name </StyledTableCell>
              <StyledTableCell align="left">Last Name</StyledTableCell>
              <StyledTableCell align="left">Email</StyledTableCell>
              <StyledTableCell align="left">Admission No.</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {value
              .filter((item) => {
                if (search === "") {
                  return item;
                } else if (
                  item.firstName.toLowerCase().includes(search.toLowerCase())
                ) {
                  return item;
                } else if (
                  item.lastName.toLowerCase().includes(search.toLowerCase())
                ) {
                  return item;
                } else if (
                  item.rollNo.toLowerCase().includes(search.toLowerCase())
                ) {
                  return item;
                } else if (
                  item.email.toLowerCase().includes(search.toLowerCase())
                ) {
                  return item;
                }
                return null;
              })
              // .slice(page  rowsPerPage, page  rowsPerPage + rowsPerPage)
              .map((item) => {
                return (
                  <StyledTableRow key={item._id}>
                    <StyledTableCell component="th" scope="row">
                      {item.rollNo}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {item.firstName}
                    </StyledTableCell>
                    <StyledTableCell align="left">
                      {item.lastName}
                    </StyledTableCell>
                    <StyledTableCell align="left">{item.email}</StyledTableCell>
                    <StyledTableCell align="left">
                      {item.addmitionNo}
                    </StyledTableCell>
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default TableData;
