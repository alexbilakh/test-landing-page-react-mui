import { useState, useEffect } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { getMainCards } from "../mock-api/api";
import Skeleton from "@mui/material/Skeleton";

type MainCard = {
  id: string;
  title: string;
  content: string;
};

const MainCards = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [mainCards, setMainCards] = useState<MainCard[]>([]);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const res = await getMainCards();
      setMainCards(res);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Grid container spacing={4} sx={{ pb: 2 }}>
      {[0, 1].map((index) => (
        <Grid item sm={6}>
          <Card sx={{ textAlign: "center", mb: 2 }}>
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ fontWeight: "600", mt: 3 }}
              >
                {isLoading ? <Skeleton height={30} /> : mainCards[index]?.title}
              </Typography>

              <Typography variant="body1" color="text.secondary">
                {isLoading ? <Skeleton height={180} /> : mainCards[index]?.content}
              </Typography>

              {!isLoading &&
                <Button variant="contained" sx={{ mt: 5, ml: 2, px: 8 }}>
                  Lorem Ipsum
                </Button>
              }
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default MainCards;
