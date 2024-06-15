import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import { Typography } from "@mui/material";

const Navigation = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#303030" }}>
      <Container>
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mx: "auto",
          }}
        >
          <Box sx={{ flexGrow: 0 }}>
            <Avatar
              alt="Starbucks Logo"
              src="https://upload.wikimedia.org/wikipedia/sco/d/d3/Starbucks_Corporation_Logo_2011.svg"
            />
          </Box>
          <Box
            sx={{ display: "flex", gap: 2, flexGrow: 0, alignItems: "center" }}
          >
            <Typography>Teerasan Rattanaruengkul</Typography>
            <Avatar alt="User Icon" src="./src/assets/user-icon.svg" />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
