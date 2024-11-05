import React, { useState } from 'react';

function AddStudent({ onAddStudent }) {
    const [newStudent, setNewStudent] = useState({
        name: '',
        phone: '',
        email: '',
        gender: 'Male',
        experience: 'Beginner',
        batch: 'Morning',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewStudent({ ...newStudent, [name]: value });
    };

    const handleAddStudent = () => {
        if (newStudent.name.trim() !== '') {
            onAddStudent({ ...newStudent, timeSlot: '9:00 AM - 10:00 AM' }); // Default time slot
            setNewStudent({
                name: '',
                phone: '',
                email: '',
                gender: 'Male',
                experience: 'Beginner',
                batch: 'Morning',
            });
        }
    };

    return (
        <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
            <h2>Add New Student</h2>
            <input
                type="text"
                name="name"
                value={newStudent.name}
                onChange={handleInputChange}
                placeholder="Enter student name"
                style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
            />
            <input
                type="tel"
                name="phone"
                value={newStudent.phone}
                onChange={handleInputChange}
                placeholder="Enter phone number"
                style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
            />
            <input
                type="email"
                name="email"
                value={newStudent.email}
                onChange={handleInputChange}
                placeholder="Enter email"
                style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
            />
            <div style={{ marginBottom: '10px' }}>
                <label>Gender:</label>
                <select name="gender" value={newStudent.gender} onChange={handleInputChange} style={{ marginLeft: '10px', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                </select>
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label>Experience Level:</label>
                <select name="experience" value={newStudent.experience} onChange={handleInputChange} style={{ marginLeft: '10px', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}>
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                </select>
            </div>
            <div style={{ marginBottom: '10px' }}>
                <label>Batch:</label>
                <select name="batch" value={newStudent.batch} onChange={handleInputChange} style={{ marginLeft: '10px', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}>
                    <option value="Morning">Morning</option>
                    <option value="Evening">Evening</option>
                </select>
            </div>
            <button onClick={handleAddStudent} style={{ backgroundColor: '#007BFF', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Save</button>
        </div>
    );
}

export default AddStudent;
