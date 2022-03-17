import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

const MainContent = () => {
  return (
    <Box
      sx={{
        display: {
          xs: "none",
          md: "flex",
        },
        justifyContent: "end",
        alignItems: "center",
        color: "white",
        fontSize: 16,
        pb: 5,
      }}
    >
      <Link
        href="#"
        underline="none"
        color="white"
        sx={{
          p: "8px 12px",
        }}
      >
        Link 1
      </Link>
      ●
      <Link
        href="#"
        underline="none"
        color="white"
        sx={{
          p: "8px 12px",
        }}
      >
        Link 3
      </Link>
      ●
      <Link
        href="#"
        underline="none"
        color="white"
        sx={{
          p: "8px 12px",
        }}
      >
        Link 3
      </Link>
    </Box>
  );
};

export default MainContent;
