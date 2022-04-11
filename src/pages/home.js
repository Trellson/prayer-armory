import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CssBaseline,
  Grid,
  Container
} from "@material-ui/core";
import Choose from "../components/choose";
import useStyles from "../styles/styles";
import AddBoxIcon from '@mui/icons-material/AddBox';
import PostRequest from '../api'


function Home() {
  const [todaysResponse, setResponse] = useState("");
  const [checked, setChecked] = useState(false);

  const todaysPrayer = () => {
    axios
      .get("https://uncovered-treasure-v1.p.rapidapi.com/today", {
        headers: {
          "X-RapidAPI-Host": "uncovered-treasure-v1.p.rapidapi.com",
          "X-RapidAPI-Key": "f7d1b6d8aamsh2d278a09daadf8ep11fac8jsn76bc896410dd"
        }
      })
      .then(response => {
        console.log(response.data.results[0]);
        setResponse(response.data.results[0]).catch(err => {
          console.log(err);
        });
      });
  };

  useEffect(() => {
    todaysPrayer();
  }, []);
  useEffect(() => {
    setChecked(true);
  }, []);

  const classes = useStyles();

  return (
    <>
      <CssBaseline />

      <div className={classes.container}>
        <Container align="center" maxWidth="med" gutterBottom>
          <Typography className={classes.colorTextMain} variant="h2">
            Welcome
          </Typography>
          <Typography className={classes.colorText} variant="h5">
            Welcome to the Prayer Armory! Every prayer Warrior needs to visit
            the Armory to gather supplies!
          </Typography>
          <Typography className={classes.colorText} variant="h5">
            Battling against the principalities of Darkness isn't easy!
          </Typography>
          <Typography className={classes.colorText} variant="h5">
            Come in! Find Rest! Get what you need!
          </Typography>

          <Grid container spacing={0} direction="column" alignItems="center">
            <Grid item>
              <Card className={classes.card}>
                <CardContent className={classes.cardContent}>
                  <Typography
                    className={classes.colorText}
                    gutterbottom
                    variant="h5"
                  >
                    {todaysResponse.text}
                  </Typography>
                  <Typography
                  className={classes.colorText}
                  variant="h6">
                    {todaysResponse.scriptures}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" color="primary">
                    Share {/* copy to clipboard function jscript */}
                  </Button>
                  <Button size="small" color="primary">
                  <AddBoxIcon onClick={PostRequest} />
                    {/* add a plus button onClick function to post request */}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>

          <div>
            <Choose />
          </div>
        </Container>
      </div>
    </>
  );
}

export default Home;
