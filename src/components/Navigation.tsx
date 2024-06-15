import { AppBar, Toolbar, Box, Avatar, Typography, Grid } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Navigation = () => {
  const theme = useTheme();

  return (
    <AppBar position="static" sx={{ backgroundColor: "#303030" }}>
      <Grid>
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginLeft: [theme.spacing(2), theme.spacing(3), theme.spacing(4)],
            marginRight: [theme.spacing(2), theme.spacing(3), theme.spacing(4)],
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
      </Grid>
    </AppBar>
  );
};

export default Navigation;
