import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import axios from "axios";



const useStyles = makeStyles({
  root: {
    minWidth: 200
  },
  title: {
    fontSize: 20
  },
  pos: {
    marginBottom: 12
  }
});

const SmurfCard = props => {
  const classes = useStyles();



  const handleSubmit = id => {
    console.log("removing smurf");
    axios.delete(`http://localhost:3333/smurfs/${id}`).then(res => {
      console.log("success", res);
      console.log(res.data)
    });
  };

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
        >
          {props.smurf.name}
        </Typography>
        <Typography variant="h5" component="h2">
          {props.smurf.age}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {props.smurf.height}
        </Typography>
        <Button onClick={handleSubmit} size="small" color="secondary">
          Remove Smurf
        </Button>
      </CardContent>
    </Card>
  );
};

export default SmurfCard;
