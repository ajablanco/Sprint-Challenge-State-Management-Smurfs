import React, { useContext, useState } from "react";
import { SmurfContext } from "./SmurfContext";
import TextField from "@material-ui/core/TextField";
import Button from '@material-ui/core/Button';
import axios from 'axios';

const SmurfForm = () => {
  const { addSmurf } = useContext(SmurfContext);

  const [newSmurf, setNewSmurf] = useState({
    name: "",
    age: "",
    height: "",
    id: ""
});

const handleChanges = e => {
    const smurf = e.target.name;
    setNewSmurf({
      ...newSmurf,
      [smurf]: e.target.value,
      id: Date.now()
    });
};

//   const handleSubmit = e => {
//     e.preventDefault();
//     addSmurf(newSmurf);
//   };

  const handleSubmit = e => {
      e.preventDefault();
      console.log("adding smurf");
      axios
      .post('http://localhost:3333/smurfs', newSmurf)
      .then(res => {
          console.log("success", res);
          addSmurf(newSmurf);
      })
  }

  return (
    <div>
      <form style={{textAlign:"center", marginBottom: "10%"}}>
          <h1>Add a Smurf</h1>
        <TextField
          defaultValue=""
          name="name"
          type="text"
          placeholder="Enter name..."
          onChange={handleChanges}
          style={{width: "300px"}}
        />
        <br/>
        <br/>
        <TextField
          defaultValue=""
          name="age"
          type="text"
          placeholder="Enter age..."
          onChange={handleChanges}
          style={{width: "300px"}}
        />
        <br/>
        <br/>
        <TextField
          defaultValue=""
          name="height"
          type="text"
          placeholder="Enter height..."
          onChange={handleChanges}
          style={{width: "300px"}}
        />
        <br/>
        <br/>
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          onClick={handleSubmit}
          style={{width: "300px"}}
        >
          Submit
        </Button>
      </form>
    </div>
  );
};

export default SmurfForm;
