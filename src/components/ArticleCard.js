import React from "react";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
const useStyles = makeStyles({
  card: {
    maxWidth: 500
  },
  media: {
    height: 220
  }
});

const ArticleCard = props => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader
        title={props.item.fields.headline}
        subheader={props.item.fields.byline}
      />
      <CardMedia
        image={props.item.fields.thumbnail}
        className={classes.media}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.item.fields.trailText}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ArticleCard;
