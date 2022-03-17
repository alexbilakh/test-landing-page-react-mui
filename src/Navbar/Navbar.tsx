import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CameraswitchIcon from "@mui/icons-material/Cameraswitch";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { useTheme } from "@mui/material/styles";

type CProps = {
  themeName: string;
  setThemeName: React.Dispatch<React.SetStateAction<string>>;
};

const ResponsiveAppBar: React.FC<CProps> = (props) => {
  const { themeName, setThemeName } = props;
  const theme = useTheme();
  const [navlistOpened, setNavlistOpened] = useState<boolean>(false);

  return (
    <AppBar
      position="static"
      color="inherit"
      sx={{
        bgcolor: {
          xs: theme.palette.primary.dark,
          md: "white",
        },
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          sx={{
            justifyContent: {
              xs: "center",
              md: "end",
            },
            px: 0,
          }}
        >
          <Button
            variant="text"
            startIcon={<DehazeIcon />}
            sx={{
              display: { xs: "flex", md: "none" },
              alignItems: "center",
              position: "absolute",
              left: 0,
              color: "white",
            }}
            onClick={() => setNavlistOpened(!navlistOpened)}
          >
            Menu
          </Button>

          <Box
            sx={{
              bgcolor: {
                xs: "transparent",
                md: "#162840",
              },
              position: {
                xs: "relative",
                md: "absolute",
              },
              py: {
                xs: 0.5,
                md: 1,
              },
              px: {
                xs: 0,
                md: 5,
              },
              top: 0,
              left: 0,
            }}
          >
            <Box
              component="img"
              sx={{
                height: {
                  xs: 52,
                  md: 85,
                },
              }}
              src="/images/logo.png"
              alt="Logo"
            />
          </Box>

          <Box sx={{ display: { xs: "none", md: "flex" }, mr: -3 }}>
            <Button
              variant="text"
              sx={{ my: 1, ml: 2, px: 3 }}
              color="secondary"
            >
              Lorem Ipsum
            </Button>
            <Button variant="contained" sx={{ my: 1, ml: 2, px: 3 }}>
              Lorem Ipsum
            </Button>
            <Button
              variant="contained"
              sx={{ my: 1, ml: 2, px: 3 }}
              onClick={() =>
                setThemeName(themeName === "main" ? "dark" : "main")
              }
              startIcon={<CameraswitchIcon />}
            >
              Change Theme
            </Button>
          </Box>
        </Toolbar>

        {navlistOpened && (
          <List>
            <ListItem disablePadding sx={{ color: "white" }}>
              <ListItemButton>
                <ListItemText primary="Lorem ipsum" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ color: "white" }}>
              <ListItemButton>
                <ListItemText primary="Lorem ipsum" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ color: "white" }}>
              <ListItemButton>
                <ListItemText primary="Lorem ipsum" />
              </ListItemButton>
            </ListItem>

            <Divider sx={{ borderColor: "white", opacity: 0.5, my: 1 }} />

            <ListItem disablePadding sx={{ color: "white" }}>
              <ListItemButton>
                <ListItemText primary="Link 1" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ color: "white" }}>
              <ListItemButton>
                <ListItemText primary="Link 2" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ color: "white" }}>
              <ListItemButton>
                <ListItemText primary="Link 3" />
              </ListItemButton>
            </ListItem>
          </List>
        )}
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
