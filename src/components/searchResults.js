import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
} from "@material-ui/core";
import useStyles from "../styles/styles";
import AddBoxIcon from '@mui/icons-material/AddBox';
import PostRequest from '../api'


const Results = ({text, scriptures}) => {
  const classes = useStyles();
  return (
    <Container className={classes.cardGrid} maxWidth="md">
    <Card className={classes.card}>
      <CardContent className={classes.cardContent}>

        <Typography className={classes.colorText} gutterbottom variant="h5">
          {text}
        </Typography>
        <Typography className={classes.colorText} gutterbottom variant='h6'>
          {scriptures}
        </Typography>
      </CardContent> 
  <CardActions>
    <Button size="small" color="primary">
      Share {/* copy to clipboard function jscript */}
    </Button>
    <Button size="small" color="primary">
      <AddBoxIcon onClick={() => PostRequest(text,scriptures)} /> {/* add a plus button onClick function to post request */}
    </Button>
  </CardActions>
    </Card>
  </Container>
  );
};

export default Results;