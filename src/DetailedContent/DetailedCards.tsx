import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import ChevronRight from "@mui/icons-material/ChevronRight";
import { getDetailedCards } from "../mock-api/api";
import Skeleton from "@mui/material/Skeleton";
import Stack from "@mui/material/Stack";

type DetailedCard = {
  id: string;
  title: string;
  content: string;
  image: string;
};

const DetailedCards = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [detailedCards, setDetailedCards] = useState<DetailedCard[]>([]);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const res = await getDetailedCards();
      setDetailedCards(res);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Box>
      <Typography
        variant="h5"
        sx={{
          fontWeight: 600,
          my: 3,
          display: { xs: "none", md: "inline-block" },
        }}
      >
        Lorem Ipsum Lorem ipsum
      </Typography>

      <Grid container spacing={4} sx={{ pb: 2 }}>
        {!isLoading &&
          detailedCards.map((card) => (
            <Grid item xs={12} sm={6} md={3} key={card.id}>
              <Card sx={{ textAlign: "center", mb: 2 }}>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="subtitle1"
                    sx={{ fontWeight: "600", mb: 0 }}
                  >
                    {card.title}
                  </Typography>

                  <Typography
                    variant="subtitle2"
                    color="text.secondary"
                    sx={{ mb: 1 }}
                  >
                    {card.content}
                  </Typography>

                  <Box
                    component="img"
                    sx={{
                      height: 150,
                      display: "block",
                      overflow: "hidden",
                      width: "100%",
                      borderRadius: 1,
                    }}
                    src={card.image}
                    alt={"Item-1"}
                  />

                  <Button
                    variant="contained"
                    sx={{ mt: 3, width: "100%", position: "relative" }}
                  >
                    Lorem Ipsum
                    <ChevronRight sx={{ position: "absolute", right: 5 }} />
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}

        {isLoading &&
          [0, 1, 2, 3].map((index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Stack>
                <Skeleton variant="text" height={30} />
                <Skeleton variant="text" height={30} />
                <Skeleton variant="rectangular" height={150} />
              </Stack>
            </Grid>
          ))}
      </Grid>

      <Box sx={{ textAlign: "center", mb: 3, sm: { mb: 7 } }}>
        <Button
          variant="contained"
          color="warning"
          sx={{ mt: 3, position: "relative", px: 8 }}
        >
          Lorem Ipsum
          <ChevronRight sx={{ position: "absolute", right: 5 }} />
        </Button>
      </Box>
    </Box>
  );
};

export default DetailedCards;
