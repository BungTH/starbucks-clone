import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";

const StyledGrid = styled(Grid)({
  position: "relative",
  height: "75vh",
  width: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    height: "100%",
    width: "100%",
    backgroundImage:
      "url(https://www.starbucks.co.th/stb-media/2020/09/reserve-coffee-2-1200x800.jpg)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    filter: "brightness(0.5)",
    zIndex: -1,
  },
});

const HeroBanner = () => {
  const theme = useTheme();

  return (
    <StyledGrid>
      <Box
        sx={{
          color: "white",
          position: "relative",
          marginLeft: [theme.spacing(2), theme.spacing(3), theme.spacing(4)],
          marginRight: [
            theme.spacing(10),
            theme.spacing(15),
            theme.spacing(80),
          ],
        }}
      >
        <Typography variant="h3" gutterBottom>
          STARBUCKS RESERVE
        </Typography>
        <Typography variant="h6" gutterBottom component="p">
          Since 1971, it always has been and will always be about quality. We’re
          passionate about ethically sourcing only the finest Arabica coffee
          beans and roasting them with great care. Our passion for coffee is
          rivaled only by our love of sharing it.
        </Typography>
      </Box>
    </StyledGrid>
  );
};

export default HeroBanner;
