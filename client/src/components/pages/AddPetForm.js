import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { ADD_PET } from '../../utils/mutations.js';

const AddPetForm = () => {
    let navigate = useNavigate();

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
        image: '', // Add image to the state
    });

    const [addPet, { error }] = useMutation(ADD_PET);

    const onSubmit = async (event) => {
        event.preventDefault();

        try {
            console.log(petFormData)
            const { data } = await addPet({
                variables: { ...petFormData, age: parseInt(petFormData.age), weight: parseInt(petFormData.weight) },
            });

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
                image: '', // Reset image in the state
            });

            navigate('/PetDashboard');
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

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();

            reader.onloadend = () => {
                setPetFormData({
                    ...petFormData,
                    image: reader.result,
                });
            };

            reader.readAsDataURL(file);
        } else {
            setPetFormData({
                ...petFormData,
                image: '',
            });
        }
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
                <label htmlFor="medications">Medications:</label>
                <textarea
                    name="medications"
                    value={petFormData.medications}
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
            {/* Add the image input */}
            <div className="form-group">
                <label htmlFor="image">Image:</label>
                <input
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                />
            </div>

            {/* Image preview */}
            <div className="form-group">
                {petFormData.image && (
                    <img src={petFormData.image} alt="preview" style={{ maxWidth: '100%', height: 'auto' }} />
                )}
            </div>

            <button type="submit">Submit</button>
            {error && <div>{error.message}</div>}
        </form>
    );
};

export default AddPetForm;