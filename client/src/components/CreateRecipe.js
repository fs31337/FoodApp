import React, { useState } from 'react'

function CreateRecipe() {
    
    const initialState = {
        name: '',
        experience: 0,
        health: '',
        attack: '',
        defense: '',
        speed: '',
        height: '',
        weight: '',
        diet: {
            form_normal: false,
            form_fighting: false,
            form_flying: false,
            form_poison: false,
            form_ground: false,
            form_rock: false,
            form_bug: false,
            form_ghost: false,
            form_steel: false,
            form_fire: false,
            form_water: false,
            form_grass: false,
            form_electric: false,
            form_psychic: false,
            form_ice: false,
            form_dragon: false,
            form_dark: false,
            form_fairy: false,
        },
    };

    const [formData,setFormData] = useState(initialState);

    return (
        <div>
            <Form>

            </Form>
        </div>
    )
}

export default CreateRecipe
