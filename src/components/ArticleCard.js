import React from "react";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { withRouter, Link } from "react-router-dom";
import { useArticleDispatch } from "../context";
import DeleteIcon from "@material-ui/icons/Delete";
export const cardConfig = {
  feed: {
    actionType: "add",
    iconType: () => <FavoriteIcon />
  },
  favorite: {
    actionType: "delete",
    iconType: () => <DeleteIcon />
  }
};
const ArticleCard = props => {
  const dispatch = useArticleDispatch();

  const handleFavorites = data => {
    dispatch({ type: cardConfig[props.type].actionType, payload: data });
  };
  const { fields } = props.item;

  return (
    <Card>
      <CardHeader title={fields.headline} subheader={fields.byline} />
      <CardMedia
        image={
          fields.thumbnail ||
          "http://kobestarr.io/wp-content/uploads/2018/01/the-guardian-logo.png"
        }
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {fields.trailText}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton
          onClick={() => handleFavorites(props.item)}
          aria-label="add to favorites"
        >
          {cardConfig[props.type].iconType()}
        </IconButton>
        <Link to={`/article/${props.item.id}`}>Read further</Link>
      </CardActions>
    </Card>
  );
};

export default withRouter(ArticleCard);
