// import { Avatar, makeStyles, Typography } from "@material-ui/core";
// import React from "react";
// import ReactDOM from "react-dom";
// import Carousel from "react-elastic-carousel";
// import Item from "./item";
// //import "./gallery.css";

// // Imported Assets
// import bg from "../../assets/bg2.jpg";

// const useStyles = makeStyles((theme) => ({
//   images: {
//     //style={{ width: "100%", objectFit: "cover ", height: "350px" }}
//     width: "100%",
//     objectFit: "cover",
//     height: "350px",
//   },
// }));

// const breakPoints = [
//   { width: 1, itemsToShow: 1 },
//   { width: 550, itemsToShow: 2 },
//   { width: 768, itemsToShow: 3 },
//   { width: 1200, itemsToShow: 4 },
// ];

// function Gallery() {
//   const classes = useStyles();
//   return (
//     <>
//       <hr />
//       <h1 style={{ textAlign: "center" }}>Happy Moments Gallery</h1>
//       <hr />
//       <div className="gallery">
//         <Carousel breakPoints={breakPoints}>
//           {/* <Item> */}

//           <a href={bg}>
//             {/* <Typography component="h1" variant="h6">
//               Abc
//             </Typography> */}
//             <img  className={classes.images} src={bg} alt="bg" />
//           </a>

//           {/* <a href="https://images.unsplash.com/photo-1588072432836-e10032774350?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60">
//             <img

//               src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
//               alt="Logo"

//             />
//             </a> */}
//           {/* </Item> */}
//           <Item>
//             <img
//               className={classes.images}
//               src="https://images.unsplash.com/photo-1609347993077-4c09aee20f05?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
//               alt="Logo"
//             />
//           </Item>
//           <Item>
//             <img
//               className={classes.images}
//               src="https://images.unsplash.com/photo-1612291494285-de7586f9b852?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
//               alt="Logo"
//             />
//           </Item>
//           <Item>
//             <img
//               className={classes.images}
//               src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=333&q=80"
//               alt="Logo"
//             />
//           </Item>
//           <Item>
//             <img
//               className={classes.images}
//               src="https://images.unsplash.com/flagged/photo-1574110906643-8311b0ce29d3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"
//               alt="Logo"
//             />
//           </Item>
//           <Item>
//             <img
//               className={classes.images}
//               src="https://images.unsplash.com/photo-1513258496099-48168024aec0?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
//               alt="Logo"
//             />
//           </Item>
//           <Item>
//             <img
//               className={classes.images}
//               src="https://images.unsplash.com/photo-1581092916357-5896ebc48073?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
//               alt="Logo"
//             />
//           </Item>
//           <Item>
//             <img
//               className={classes.images}
//               src="https://images.unsplash.com/photo-1530041539828-114de669390e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80"
//               alt="Logo"
//             />
//           </Item>
//           <Item>
//             <img
//               className={classes.images}
//               src="https://images.unsplash.com/photo-1505628346881-b72b27e84530?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80"
//               alt="Logo"
//             />
//           </Item>
//           <Item>
//             <img
//               className={classes.images}
//               src="https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=660&q=80"
//               alt="Logo"
//             />
//           </Item>
//         </Carousel>
//       </div>
//     </>
//   );
// }

// export default Gallery;

import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import MobileStepper from "@material-ui/core/MobileStepper";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { Grid } from "@material-ui/core";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    id: 1,
    label: "Classroom",
    imgPath:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8Nnx8ZWR1Y2F0aW9ufGVufDB8fDB8&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    label: "Classroom",
    imgPath:
      "https://images.unsplash.com/photo-1588072432836-e10032774350?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8c2Nob29sfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  { 
    id: 3,
    label: "Classroom",
    imgPath:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzR8fHNjaG9vbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    label: "Classroom",
    imgPath:
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MzB8fHNjaG9vbCUyMHJlbGF0ZWR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },

  {
    id: 5,
    label: "Library",
    imgPath:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bGlicmFyeXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];

const ask = [
  { 
    id: 6,
    label: "Library",
    imgPath:
      "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8bGlicmFyeXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  { 
    id: 7,
    label: "Student",
    imgPath:
      "https://images.unsplash.com/photo-1610500795224-fb86b02926d7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8ODB8fHNjaG9vbCUyMHJlbGF0ZWR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 8,
    label: "Student",
    imgPath:
      "https://images.unsplash.com/photo-1517256673644-36ad11246d21?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjJ8fHN0dWRlbnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  { 
    id: 9,
    label: "Student",
    imgPath:
      "https://images.unsplash.com/photo-1594608661623-aa0bd3a69d98?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fGNoaWxkcmVufGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
];

const img = [
  {
    id: 10,
    label: 'PlayGround',
    imgPath: "https://images.unsplash.com/photo-1552537595-b30edb7afd9d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8cGxheWdyb3VuZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 11,
    label: 'PlayGround',
    imgPath: "https://images.unsplash.com/photo-1569466126773-842a038eae3e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8cGxheWdyb3VuZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 12,
    label: 'PlayGround',
    imgPath: "https://images.unsplash.com/photo-1589755617743-c3093859f70d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NTh8fHBsYXlncm91bmR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 13,
    label: 'PlayGround',
    imgPath: "https://images.unsplash.com/photo-1544734038-e99a0d4a7fd5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OTB8fHBsYXlncm91bmR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
]

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    display: "block",
    maxWidth: 400,
    overflow: "hidden",
    width: "100%",
  },
}));

function Gallery() {
  const classes = useStyles();
  const theme = useTheme();

  const [activeStep, setActiveStep] = React.useState(0);
  const [activeSteps, setActiveSteps] = React.useState(0);
  const [imgActiveSteps, setImgActiveSteps] = React.useState(0);

  const maxSteps = tutorialSteps.length;
  const maxStep = ask.length;
  const maximumStep = img.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleNext2 = () => {
    setActiveSteps((prevActiveStep) => prevActiveStep + 1);
  };
  const handleNext3 = () => {
    setImgActiveSteps((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleBack2 = () => {
    setActiveSteps((prevActiveStep) => prevActiveStep - 1);
  };
  const handleBack3 = () => {
    setImgActiveSteps((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const handleStepChange2 = (step) => {
    setActiveSteps(step);
  };
  const handleStepChange3 = (step) => {
    setImgActiveSteps(step);
  };

  return (
    <div>
      <Typography variant="h3" style={{ textAlign: "center" }}>
        School Gallery
      </Typography>
      <Grid container>
        <Grid item xs={12} sm={12} md={4}>
          <div className={classes.root}>
            <Paper elevation={4} className={classes.header}>
              <Typography>{tutorialSteps[activeStep].label}</Typography>
            </Paper>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {tutorialSteps.map((step, index) => (
                <div key={step.id}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <img
                      className={classes.img}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
              steps={maxSteps}
              position="static"
              variant="text"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </div>
        </Grid>

        <Grid item xs={12} sm={12} md={4}>
          <div className={classes.root}>
            <Paper elevation={3} className={classes.header}>
              <Typography>{ask[activeSteps].label}</Typography>
            </Paper>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeSteps}
              onChangeIndex={handleStepChange2}
              enableMouseEvents
            >
              {ask.map((step, index) => (
                <div key={step.id}>
                  {Math.abs(activeSteps - index) <= 2 ? (
                    <img
                      className={classes.img}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
              steps={maxStep}
              position="static"
              variant="text"
              activeStep={activeSteps}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext2}
                  disabled={activeSteps === maxStep - 1}
                >
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack2}
                  disabled={activeSteps === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </div>
        </Grid>
       
        <Grid item xs={12} sm={12} md={4}>
          <div className={classes.root}>
            <Paper elevation={3} className={classes.header}>
              <Typography>{img[imgActiveSteps].label}</Typography>
            </Paper>
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={imgActiveSteps}
              onChangeIndex={handleStepChange3}
              enableMouseEvents
            >
              {img.map((step, index) => (
                <div key={step.id}>
                  {Math.abs(imgActiveSteps - index) <= 2 ? (
                    <img
                      className={classes.img}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <MobileStepper
              steps={maximumStep}
              position="static"
              variant="text"
              activeStep={imgActiveSteps}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext3}
                  disabled={imgActiveSteps === maximumStep - 1}
                >
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack3}
                  disabled={imgActiveSteps === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Gallery;
