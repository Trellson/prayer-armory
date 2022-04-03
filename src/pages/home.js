import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container
} from "@material-ui/core";
import useStyles from "../styles/styles";

function Home() {
  const [response, setResponse] = useState(null);
//   const [todaysPost, todaysPrayer] = useState(null);

  const todaysPrayer = () => {
    axios
      .get("https://uncovered-treasure-v1.p.rapidapi.com/today", {
        headers: {
          "X-RapidAPI-Host": "uncovered-treasure-v1.p.rapidapi.com",
          "X-RapidAPI-Key": "f7d1b6d8aamsh2d278a09daadf8ep11fac8jsn76bc896410dd"
        }
      })
      .then(response => {
        console.log(response.data.results[0].text);
        setResponse({
          todaysPost: response.data.results[0].text
        }).catch(err => {
          console.log(err);
        });
      });
  };

  useEffect(() => {
    todaysPrayer();
  }, []);

  const classes = useStyles();

  return (
    <>
      <CssBaseline />
      <div className={classes.container}>
        <Container align="center" maxWidth="med" gutterBottom>
          <Typography variant="h2">Welcome</Typography>
          <Typography variant="h5">
            Welcome to the Prayer Armory! Every prayer Warrior needs to visit
            the Armory to gather supplies!
          </Typography>
          <Typography variant="h5">
            Battling against the principalities of Darkness isn't easy!
          </Typography>
          <Typography variant="h5">
            Come in! Find Rest! Get what you need!
          </Typography>
        </Container>
      </div>

      <Container className={classes.cardGrid} maxWidth="md">
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image="https://sources.unsplash.com/random"
            title="Uncovered Tresure"
          />
          <CardContent className={classes.cardContent}>
            <Typography gutterbottom variant="h5">
              {todaysPost}
            </Typography>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

export default Home;
