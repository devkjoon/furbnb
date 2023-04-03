import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_PET } from '../utils/mutations';
import "../assets/css/index.css"

const AddPetForm = ({ history }) => {
    const [petFormData, setPetFormData] = useState({
        name: '',
        species: '',
        breed: '',
        age: '',
        gender: '',
        weight: '',
        allergies: '',
        medications: '',
        feedingSchedule: '',
    });

    const [addPet, { error }] = useMutation(ADD_PET);

    const onSubmit = async (event) => {
        event.preventDefault();

        try {
            await addPet({
                variables: {
                    name: petFormData.name,
                    species: petFormData.species,
                    breed: petFormData.breed,
                    age: parseInt(petFormData.age),
                    gender: petFormData.gender,
                    weight: parseInt(petFormData.weight),
                    allergies: petFormData.allergies,
                    medications: petFormData.medications,
                    feedingSchedule: petFormData.feedingSchedule,
                },
            });

            // Reset form values
            setPetFormData({
                name: '',
                species: '',
                breed: '',
                age: '',
                gender: '',
                weight: '',
                allergies: '',
                medications: '',
                feedingSchedule: '',
            });

            // Navigate back to homepage
            history.push('/');
        } catch (err) {
            console.error(err);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setPetFormData({
            ...petFormData,
            [name]: value,
        });
    };

    return (
    <div className="add-pet-cont">
        <h2>Add <span className="blue-span">Pet</span></h2>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <input
                    placeholder='Enter Name'
                    type="text"
                    name="name"
                    value={petFormData.name}
                    onChange={handleChange}
                />
                <input
                    placeholder='Enter Species'
                    type="text"
                    name="species"
                    value={petFormData.species}
                    onChange={handleChange}
                />
                <input
                    placeholder='Enter Breed'
                    type="text"
                    name="breed"
                    value={petFormData.breed}
                    onChange={handleChange}
                />
                <input
                    placeholder='Enter Gender'
                    type="text"
                    name="gender"
                    value={petFormData.gender}
                    onChange={handleChange}
                />
                <input
                    placeholder='Enter Age (Years)'
                    type="number"
                    name="age"
                    value={petFormData.age}
                    onChange={handleChange}
                />
                <input
                    placeholder='Enter Weight (lbs)'
                    type="number"
                    name="weight"
                    value={petFormData.weight}
                    onChange={handleChange}
                />
                <textarea
                    placeholder='Enter Allergies'
                    type="text"
                    name="allergies"
                    value={petFormData.allergies}
                    onChange={handleChange}
                ></textarea>
                <textarea
                    placeholder='Enter Feeding Schedule'
                    type="text"
                    name="feedingSchedule"
                    value={petFormData.feedingSchedule}
                    onChange={handleChange}
                ></textarea>
                <textarea
                    placeholder='Enter Medications'
                    name="medications"
                    value={petFormData.medications}
                    onChange={handleChange}
                />
                <button type="submit">Add Pet</button>
            </div>
        </form>
    </div>
    );
};

export default AddPetForm;
