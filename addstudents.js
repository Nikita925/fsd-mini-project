// AddStudent.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function AddStudent() {
    const [studentInfo, setStudentInfo] = useState({
        studentName: '',
        parentName: '',
        studentPhone: '',
        parentPhone: '',
        address: '',
        email: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudentInfo({
            ...studentInfo,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle the form submission logic here
        console.log('Student Information Submitted:', studentInfo);
    };

    return (
        <div style={{ padding: '20px', backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
            <header style={{ backgroundColor: '#333', color: '#fff', padding: '10px 0' }}>
                <div style={{ width: '80%', margin: '0 auto', maxWidth: '1200px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '24px', fontWeight: 'bold' }}>Coach Dashboard</div>
                    <nav>
                        <ul style={{ listStyle: 'none', display: 'flex', margin: 0, padding: 0 }}>
                            <li style={{ marginLeft: '20px' }}>
                                <Link to="/coach-login-home" style={{ color: '#fff', textDecoration: 'none', backgroundColor: '#007BFF', padding: '10px 20px', borderRadius: '5px' }}>Home</Link>
                            </li>
                            <li style={{ marginLeft: '20px' }}>
                                <Link to="/add-student" style={{ color: '#fff', textDecoration: 'none', backgroundColor: '#007BFF', padding: '10px 20px', borderRadius: '5px' }}>Add Student</Link>
                            </li>
                            <li style={{ marginLeft: '20px' }}>
                                <Link to="/view-students" style={{ color: '#fff', textDecoration: 'none', backgroundColor: '#007BFF', padding: '10px 20px', borderRadius: '5px' }}>View Current Students</Link>
                            </li>
                            <li style={{ marginLeft: '20px' }}>
                                <Link to="/mark-attendance" style={{ color: '#fff', textDecoration: 'none', backgroundColor: '#007BFF', padding: '10px 20px', borderRadius: '5px' }}>Mark Attendance</Link>
                            </li>
                            <li style={{ marginLeft: '20px', marginRight: '0' }}>
                                <Link to="/" style={{ color: '#fff', textDecoration: 'none', backgroundColor: '#007BFF', padding: '10px 20px', borderRadius: '5px' }}>Logout</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>
            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', marginTop: '20px' }}>
                <h2>Add New Student</h2>
                <form onSubmit={handleSubmit}>
                    <div style={{ marginBottom: '10px' }}>
                        <label>Student Name:</label>
                        <input
                            type="text"
                            name="studentName"
                            value={studentInfo.studentName}
                            onChange={handleChange}
                            placeholder="Enter student name"
                            style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '4px', border: '1px solid #ddd' }}
                            required
                        />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <label>Parent's Name:</label>
                        <input
                            type="text"
                            name="parentName"
                            value={studentInfo.parentName}
                            onChange={handleChange}
                            placeholder="Enter parent's name"
                            style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '4px', border: '1px solid #ddd' }}
                            required
                        />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <label>Student Phone No:</label>
                        <input
                            type="tel"
                            name="studentPhone"
                            value={studentInfo.studentPhone}
                            onChange={handleChange}
                            placeholder="Enter student phone number"
                            style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '4px', border: '1px solid #ddd' }}
                            required
                        />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <label>Parent Phone No:</label>
                        <input
                            type="tel"
                            name="parentPhone"
                            value={studentInfo.parentPhone}
                            onChange={handleChange}
                            placeholder="Enter parent's phone number"
                            style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '4px', border: '1px solid #ddd' }}
                            required
                        />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <label>Address:</label>
                        <input
                            type="text"
                            name="address"
                            value={studentInfo.address}
                            onChange={handleChange}
                            placeholder="Enter address"
                            style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '4px', border: '1px solid #ddd' }}
                            required
                        />
                    </div>
                    <div style={{ marginBottom: '10px' }}>
                        <label>Email:</label>
                        <input
                            type="email"
                            name="email"
                            value={studentInfo.email}
                            onChange={handleChange}
                            placeholder="Enter email address"
                            style={{ width: '100%', padding: '10px', marginTop: '5px', borderRadius: '4px', border: '1px solid #ddd' }}
                            required
                        />
                    </div>
                    <button type="submit" style={{ backgroundColor: '#007BFF', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add Student</button>
                </form>
            </div>
        </div>
    );
}

export default AddStudent;
