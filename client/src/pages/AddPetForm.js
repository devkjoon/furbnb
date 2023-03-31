import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_PET } from '../utils/mutations';

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
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name:</label>
                <input
                    type="text"
                    name="name"
                    value={petFormData.name}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="species">Species:</label>
                <input
                    type="text"
                    name="species"
                    value={petFormData.species}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="breed">Breed:</label>
                <input
                    type="text"
                    name="breed"
                    value={petFormData.breed}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="gender">Gender:</label>
                <input
                    type="text"
                    name="gender"
                    value={petFormData.gender}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="age">Age:</label>
                <input
                    type="number"
                    name="age"
                    value={petFormData.age}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="weight">Weight:</label>
                <input
                    type="number"
                    name="weight"
                    value={petFormData.weight}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="allergies">Allergies:</label>
                <input
                    type="text"
                    name="allergies"
                    value={petFormData.allergies}
                    onChange={handleChange}
                />
            </div>
            <div className="form-group">
                <label htmlFor="feedingSchedule">Feeding Schedule:</label>
                <input
                    type="text"
                    name="feedingSchedule"
                    value={petFormData.feedingSchedule}
                    onChange={handleChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="medications">Medications:</label>
                <textarea
                    name="medications"
                    value={petFormData.medications}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Add Pet</button>
        </form>
    );
};

export default AddPetForm;
