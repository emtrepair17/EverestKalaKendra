import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';

export default function InstructorCard({ name, img, position }) {
  const theme = useTheme();

  return (
    <Card
      sx={{
        display: "flex",
        backgroundColor: "#94959cff",
        color: "#ffffff",
        width: 350,           // set card width
        height: 180,          // set card height
        borderRadius: 2,
        overflow: "hidden",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: 150,
          height: "100%",
          objectFit: "cover",
        }}
        image={img}
        alt={name}
      />

      <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
        <CardContent sx={{ flex: "1 0 auto", pb: 1 }}>
          <Typography component="div" variant="h6" fontWeight="bold">
            {name}
          </Typography>
          <Typography variant="subtitle2" component="div">
             {position}
          </Typography>
        </CardContent>

        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            pl: 1,
            pb: 1,
          }}
        >
          <IconButton aria-label="previous">
            {theme.direction === "rtl" ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>

          <IconButton aria-label="play/pause">
            <PlayArrowIcon sx={{ height: 32, width: 32 }} />
          </IconButton>

          <IconButton aria-label="next">
            {theme.direction === "rtl" ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </Box>
      </Box>
    </Card>
  );
}

