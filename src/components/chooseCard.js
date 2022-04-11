import React from "react";
import useStyles from "../styles/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography
} from "@material-ui/core";

function ChooseCard({ choices }) {
  const classes = useStyles();
  return (
    <Card className={classes.chooseCard}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          component="img"
          image={choices.imageURL}
        />
        <CardContent>
          <Typography
            className={classes.cardTitle}
            gutterBottom
            variant="h5"
            component="h2"
          >
            {choices.title}
          </Typography>
          <Typography className={classes.cardDesc} component="p">
            {choices.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default ChooseCard;
