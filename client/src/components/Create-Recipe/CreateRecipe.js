import axios from "axios";
import React, { useState } from "react";
import './CreateRecipe.scss';
import Swal from 'sweetalert2';

function CreateRecipe() {
  const [state, setState] = useState({
    name: "",
    resume: "",
    puntuation: "",
    healthyLevel: "",
    stepbystep: "",
    diet: [],
  });
  const initialState = {
    "Veg": false,
    "Vegan": false,
    "Keto": false,
    "Lacto-Veg":false,
    "Ovo-Veg":false,
    "Pescet":false,
    "Paleo":false,
    "Primal":false,
    "Whole":false,
    "Gluten Free":false,
  }
  let [diets, setDiets] = useState(initialState);

  let checkboxClick = (e) => {
    let { name, checked } = e.target;
    setDiets({
      ...diets,
      [name]: checked,
    });
  };
  let mostrarDietas = Object.keys(diets).filter((x) => diets[x]);

  const handleInputChange = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  function clearState() {
    setState({
      name: "",
      resume: "",
      puntuation: "",
      healthyLevel: "",
      stepbystep: "",
      diet: [],
    });
  }

  function handleSubmit(e) {
    if(mostrarDietas.length<1){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Debes seleccionar al menos una Dieta!',
      })
    }
    if(mostrarDietas.length>=1){
      e.preventDefault();
      setState((state.diet = mostrarDietas));
      axios.post("https://foodappar.herokuapp.com/recipe",state)
        .then(response =>{
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: response.data,
              showConfirmButton: false,
              timer: 1500
            })
        })
      clearState();
      setDiets(initialState);
      }
    }

    return (
      <div className="form-container-continer">
        <div className="form-container">
        <h1>Create a Recipe!</h1>
          <form className="form" onSubmit={(e) => handleSubmit(e)}>
            <p>Enter a name for your recipe</p>
            <input
              name="name"
              key="name"
              className="input-nombre"
              placeholder="Nombre..."
              type="text"
              autoComplete="off"
              onChange={(e) => handleInputChange(e)}
              value={state.name}
              required
            ></input>
            <p>Enter a resume of your recipe</p>
            <input
              name="resume"
              key="resume"
              className="input-resume"
              placeholder="Resumen..."
              type="text"
              autoComplete="off"
              value={state.resume}
              onChange={(e) => handleInputChange(e)}
              required
            ></input>
            <p>Enter a score of your recipe</p>
            <input
              type="number"
              min="1"
              max="100"
              step="1"
              name="puntuation"
              placeholder="Puntuation..."
              key="puntuation"
              className="input-puntuation"
              autoComplete="off"
              value={state.puntuation}
              onChange={(e) => handleInputChange(e)}
              required
            ></input>
            <p>Enter a healthy-level of your recipe</p>
            <input
              name="healthyLevel"
              key="healthyLevel"
              className="input-healthy"
              placeholder="Healthy..."
              type="number"
              min="1"
              max="100"
              step="1"
              id="healthy"
              autoComplete="off"
              value={state.healthyLevel}
              onChange={(e) => handleInputChange(e)}
              required
            ></input>
            <p>Enter the step by step of your recipe</p>
            <input
              name="stepbystep"
              key="stepbystep"
              className="input-stepbystep"
              placeholder="Paso a paso..."
              type="text"
              id="stepbystep"
              autoComplete="off"
              value={state.stepbystep}
              onChange={(e) => handleInputChange(e)}
              required
            ></input>
            <p>
              Select at least one diet type, you can choice more than one!
            </p>
            <div className="checkBox">
              {Object.keys(diets).map((key, index) => (
                  <label key={index} htmlFor={key}>
                    <input
                      type="checkbox"
                      key={key}
                      name={key}
                      id={key}
                      checked={diets[key]}
                      onChange={checkboxClick}
                    />
                  <span>{key}</span>
                  </label>
                ))}
            </div>
            <button className="submitButton" type="submit">Submit</button>
          </form>
        </div>
      </div>
  );
}

export default CreateRecipe;
