import { Grid, Toolbar, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const theme = useTheme();

  return (
    <Grid sx={{ backgroundColor: "#303030" }}>
      <Toolbar
        disableGutters
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: [theme.spacing(2), theme.spacing(3), theme.spacing(4)],
          marginRight: [theme.spacing(2), theme.spacing(3), theme.spacing(4)],
          color: "white",
        }}
      >
        <Typography>
          ©2024 Coffee Concepts Retail Co.,Ltd. All rights
        </Typography>
        <Typography>Starbucks Thailand</Typography>
      </Toolbar>
    </Grid>
  );
};

export default Footer;
