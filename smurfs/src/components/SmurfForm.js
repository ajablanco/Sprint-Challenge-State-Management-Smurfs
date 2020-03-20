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
      <form>
        <TextField
          defaultValue=""
          name="name"
          type="text"
          placeholder="Enter name..."
          onChange={handleChanges}
        />
        <br/>
        <br/>
        <TextField
          defaultValue=""
          name="age"
          type="text"
          placeholder="Enter age..."
          onChange={handleChanges}
        />
        <br/>
        <br/>
        <TextField
          defaultValue=""
          name="height"
          type="text"
          placeholder="Enter height..."
          onChange={handleChanges}
        />
        <br/>
        <br/>
        <Button
          variant="contained"
          color="secondary"
          type="submit"
          onClick={handleSubmit}
        >
          Add Smurf
        </Button>
      </form>
    </div>
  );
};

export default SmurfForm;
