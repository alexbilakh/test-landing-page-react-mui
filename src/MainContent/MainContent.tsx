import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { useTheme } from "@mui/material/styles";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import MobileStepper from "@mui/material/MobileStepper";
import Breadcrumb from "./Breadcrumb";
import { getMainContent } from "../mock-api/api";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath: "/images/bg-1.jpg",
  },
  {
    label: "Bird",
    imgPath: "/images/bg-2.jpg",
  },
  {
    label: "Bali, Indonesia",
    imgPath: "/images/bg-3.jpg",
  },
];

type Content = {
  id: string;
  title: string;
  content: string;
};

const MainContent = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [contents, setContents] = useState<Content[]>([]);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  const loadData = async () => {
    setIsLoading(true);
    try {
      const res = await getMainContent();
      setContents(res);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: {
          xs: theme.palette.primary.light,
          md: theme.palette.primary.dark,
        },
        py: 2,
      }}
    >
      <Container maxWidth="lg">
        <Breadcrumb />

        <Grid container spacing={3} sx={{ pb: 2 }}>
          <Grid item md={6} lg={7}>
            <AutoPlaySwipeableViews
              axis={"x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
              style={{ borderRadius: "5px 5px 0px 0px" }}
            >
              {images.map((step, index) => (
                <Box key={step.label} style={{ height: "100%" }}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                      component="img"
                      sx={{
                        height: "100%",
                        display: "block",
                        overflow: "hidden",
                        width: "100%",
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  ) : null}
                </Box>
              ))}
            </AutoPlaySwipeableViews>

            <MobileStepper
              steps={maxSteps}
              position="static"
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
              style={{ borderRadius: "0px 0px 5px 5px" }}
            />
          </Grid>

          <Grid item md={6} lg={5} sx={{ width: "100%" }}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                bgcolor: "background.paper",
                borderRadius: "5px",
                boxSizing: "border-box",
                p: 2,
              }}
            >
              {!isLoading &&
                contents.map((content) => (
                  <Card
                    sx={{
                      textAlign: "center",
                      my: 1,
                      flex: "none",
                      flexGrow: 1,
                    }}
                    key={content.id}
                  >
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {content.title}
                      </Typography>

                      <Typography variant="body2" color="text.secondary">
                        {content.content}
                      </Typography>
                    </CardContent>
                  </Card>
                ))}

              {isLoading &&
                [0, 1].map((index) => (
                  <Stack>
                    <Skeleton variant="text" height={50} />
                    <Skeleton variant="rectangular" height={140} />
                  </Stack>
                ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MainContent;
