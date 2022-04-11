import useStyles from "../styles/styles";
import ChooseCard from "../components/chooseCard";
import CardInfo from "../static/homeCards";
import { CssBaseline, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
function Choose() {
  console.log({ CardInfo });
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <div className={classes.cardBack}>
        <Grid container spacing={0} justify="center" alignItems="center">
            <Grid item xs={8} sm={4} md={4}>
          <Link style={{ textDecoration: 'none' }} to="/save-prayer">
            <ChooseCard choices={CardInfo[0]} />
          </Link>
          </Grid>
          <Grid item xs={8} sm={4} md={4}>
          <Link style={{ textDecoration: 'none' }} to="/Search">
            <ChooseCard choices={CardInfo[1]} />
          </Link>
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Choose;
