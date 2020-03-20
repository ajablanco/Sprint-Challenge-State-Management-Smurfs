import React  from "react";
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


  const deleteSmurf = () => {
    const id = props.smurf.id
      alert("Oh no! Don't delete a Smurf!!!") 
    console.log("removing smurf");
    axios.delete(`http://localhost:3333/smurfs/${id}`)
    .then(res => {
      console.log("success", res);
      console.log(res.data);
    });
  };

  return (
    <Card className={classes.root} variant="outlined" style={{margin: "1%"}}>
      <CardContent style={{textAlign:"center"}}>
        <Typography
          className={classes.title}
          color="textSecondary"
          gutterBottom
          style={{color: "black", fontSize: "2rem"}}
        >
          {props.smurf.name}
        </Typography>
        <Typography variant="h5" component="h2">
          Age: {props.smurf.age}
        </Typography>
        <br/>
        <Typography className={classes.pos} color="textSecondary">
          Height: {props.smurf.height}
        </Typography>
        <Button onClick={deleteSmurf} size="small" color="secondary">
          Remove Smurf
        </Button>
      </CardContent>
    </Card>
  );
};

export default SmurfCard;
