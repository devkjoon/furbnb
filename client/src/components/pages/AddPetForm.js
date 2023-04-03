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

            navigate('/Profile');
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
    <div className="add-pet-cont">
        <h2>Add <span className="blue-span">Pet</span></h2>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <input
                    placeholder='Enter Pet Name'
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
                    placeholder='Enter Medications'
                    name="medications"
                    value={petFormData.medications}
                    onChange={handleChange}
                ></textarea>
                <textarea
                    placeholder='Enter Feeding Schedule'
                    type="text"
                    name="feedingSchedule"
                    value={petFormData.feedingSchedule}
                    onChange={handleChange}
                ></textarea>
            {/* Add the image input */}
                <input
                placeholder='Pet Image'
                    type="file"
                    name="image"
                    accept="image/*"
                    onChange={handleImageChange}
                />

            {/* Image preview */}
                {petFormData.image && (
                    <img src={petFormData.image} alt="preview" style={{ maxWidth: '100%', height: 'auto' }} />
                )}
                <button type="submit">Submit</button>
            </div>

            {error && <div>{error.message}</div>}
        </form>
    </div>
    );
};

export default AddPetForm;