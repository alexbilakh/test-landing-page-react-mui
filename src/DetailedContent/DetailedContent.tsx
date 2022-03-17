import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
import MainCards from "./MainCards";
import DetailedCards from "./DetailedCards";

const MainContent = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: {
          xs: theme.palette.primary.light,
          md: "white",
        },
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <MainCards />

        <DetailedCards />
      </Container>
    </Box>
  );
};

export default MainContent;
