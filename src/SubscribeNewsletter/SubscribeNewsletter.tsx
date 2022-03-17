import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useTheme } from "@mui/material/styles";

const DetailedCards = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        borderTop: "1px solid",
        borderTopColor: theme.palette.secondary.light,
      }}
    >
      <Container
        maxWidth="lg"
        sx={{
          pt: 2,
          px: 4,
          display: "flex",
          flexDirection: "column",
          sm: { flexDirection: "row", alignItems: "center", px: 0 },
        }}
      >
        <Typography
          variant="body2"
          color={theme.palette.secondary.light}
          sx={{ mb: 2, sm: { mr: 3 } }}
        >
          Abonnez-vous à notre newsletter
        </Typography>

        <TextField
          id="Name"
          size="small"
          placeholder="Nom"
          sx={{ mb: 2, sm: { mr: 3 }, flexGrow: 1 }}
        />

        <TextField
          id="Name"
          type="email"
          size="small"
          placeholder="Addresse e-mail"
          sx={{ mb: 2, sm: { mr: 3 }, flexGrow: 1 }}
        />

        <Button variant="contained" sx={{ mb: 2, px: 3 }}>
          S'abonner
        </Button>
      </Container>
    </Box>
  );
};

export default DetailedCards;
