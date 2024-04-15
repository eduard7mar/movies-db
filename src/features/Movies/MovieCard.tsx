import { Button, Card, CardActions, CardContent, CardMedia, IconButton, Tooltip, Typography } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Link as RouterLink } from "react-router-dom";

interface Props {
  id: number;
  title: string;
  popularity: number;
  overview: string;
  image?: string;
  enableUserActions?: boolean;
}

function MovieCard({ id, title, overview, popularity, image = "/movie-thumb.png", enableUserActions = false }: Props) {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia component="div" sx={{ pt: "56.25%" }} image={image} />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {overview}
        </Typography>
        <Typography variant="button" display="block" mt={2}>
          {popularity}
        </Typography>
      </CardContent>
      <CardActions>
        <Button component={RouterLink} to={`/movies/${id}`} color="secondary">
          Details
        </Button>
        {enableUserActions && (
          <Tooltip title="Add to favorites">
            <IconButton>
              <FavoriteIcon />
            </IconButton>
          </Tooltip>
        )}
      </CardActions>
    </Card>
  );
}

export default MovieCard;
