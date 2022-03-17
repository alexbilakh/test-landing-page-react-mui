import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import {
  useTheme,
} from "@mui/material/styles";

const DetailedCards = () => {
  const theme = useTheme();
  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          backgroundColor: theme.palette.primary.light,
          borderBottom: "8px solid",
          borderBottomColor: theme.palette.info.main,
          py: 4,
        }}
      >
        <Container maxWidth="lg" sx={{ display: "flex", alignItems: "center" }}>
          <Typography variant="body2" color="white" sx={{ maxWidth: "800px" }}>
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica. Vivamus
            vestibulum lacinia ipsum quis dignissim.
          </Typography>
        </Container>
      </Box>

      <Box
        sx={{
          pt: 2,
          backgroundColor: theme.palette.secondary.dark,
        }}
      >
        <Container maxWidth="lg">
          <Grid container spacing={2} sx={{ py: 1 }}>
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <Grid item xs={4} md={2} key={item}>
                <Link href="#" underline="none" color="white">
                  Link {item}
                </Link>
              </Grid>
            ))}
          </Grid>

          <Typography variant="body2" color="white" sx={{ py: 5 }}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
            blanditiis tenetur unde suscipit, quam beatae rerum inventore
            consectetur, neque doloribus, cupiditate numquam dignissimos laborum
            fugiat deleniti? Eum quasi quidem quibusdam. Lorem ipsum dolor sit
            amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Quos blanditiis tenetur
          </Typography>
        </Container>
      </Box>
    </Box>
  );
};

export default DetailedCards;
