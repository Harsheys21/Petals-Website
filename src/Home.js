import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { Grid } from '@mui/material';


const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const photos = [];
const context = require.context('./photos/home_page_photos/', false, /\.(png|webp|jpeg|gif)$/);

context.keys().forEach(key => {
  const photo = context(key);
  photos.push(photo.default);
});

function ImageSlider() {

  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = photos.length;

  const handleNext = () => {
    setActiveStep(prevActiveStep => (prevActiveStep + 1) % maxSteps);
  };

  const handleBack = () => {
    setActiveStep(prevActiveStep => (prevActiveStep - 1 + maxSteps) % maxSteps);
  };

  const handleStepChange = step => {
    setActiveStep(step);
  };

  return (
    <Grid container
      position={"relative"}
      alignItems="center"     // Vertically center the content
      justifyContent="center" // Horizontally center the content
      backgroundColor="secondary.main"
      minWidth="100%"    >
      <AutoPlaySwipeableViews index={activeStep} onChangeIndex={handleStepChange}>
        {photos.map((step, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 && (
              <img
                style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                src={step}
                alt={`Step ${index}`}
                loading="lazy"
              />
            )}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        sx={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'absolute', bottom: 0, left: 0, right: 0 }}
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button onClick={handleNext}>
            Next
            <KeyboardArrowRight/>
          </Button>
        }
        backButton={
          <Button onClick={handleBack}>
            <KeyboardArrowLeft/>
            Back
          </Button>
        }
      />
    </Grid>
  );
}

export default ImageSlider;
