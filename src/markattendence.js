// src/components/MarkAttendance.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MarkAttendance = () => {
    const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
    const [attendanceDate, setAttendanceDate] = useState('');
    const [attendance, setAttendance] = useState({});
    
    // Predefined student data
    const [students] = useState([
        { name: 'Anshuman Joshi', phone: '123-456-7890', email: 'anshuman@example.com', gender: 'Male', experience: 'Beginner', batch: 'Morning', timeSlot: '9:00 AM - 10:00 AM' },
        { name: 'Nikita Kumari', phone: '234-567-8901', email: 'nikita@example.com', gender: 'Female', experience: 'Intermediate', batch: 'Evening', timeSlot: '5:00 PM - 6:00 PM' },
        { name: 'Ridham Sarodiya', phone: '345-678-9012', email: 'ridham@example.com', gender: 'Male', experience: 'Advanced', batch: 'Morning', timeSlot: '9:00 AM - 10:00 AM' },
        { name: 'Shravan Jhaveri', phone: '456-789-0123', email: 'shravan@example.com', gender: 'Male', experience: 'Beginner', batch: 'Evening', timeSlot: '5:00 PM - 6:00 PM' },
    ]);

    // Filter students based on selected time slot
    const filteredStudents = students.filter(student => 
        selectedTimeSlot === '' || student.timeSlot === selectedTimeSlot
    );

    const handleAttendanceToggle = (name) => {
        setAttendance(prev => ({
            ...prev,
            [name]: prev[name] === 'Present' ? 'Absent' : 'Present'
        }));
    };

    const handleSaveAttendance = () => {
        // Here you can handle the save logic
        console.log('Attendance saved:', attendance);
        alert('Attendance saved successfully!');
    };

    return (
        <div style={{ padding: '20px', backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
            {/* Navigation */}
            <header style={{ backgroundColor: '#333', color: '#fff', padding: '10px 0' }}>
                <div style={{ width: '80%', margin: '0 auto', maxWidth: '1200px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '24px', fontWeight: 'bold' }}>Coach Dashboard</div>
                    <nav>
                        <ul style={{ listStyle: 'none', display: 'flex', margin: 0, padding: 0 }}>
                            <li style={{ marginLeft: '20px' }}>
                                <Link to="/coach-login-home" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
                            </li>
                            <li style={{ marginLeft: '20px' }}>
                                <Link to="/addstudents" style={{ color: '#fff', textDecoration: 'none' }}>Add Students</Link>
                            </li>
                            <li style={{ marginLeft: '20px' }}>
                                <Link to="/viewstudents" style={{ color: '#fff', textDecoration: 'none' }}>View Students</Link>
                            </li>
                            <li style={{ marginLeft: '20px' }}>
                                <Link to="/markattendence" style={{ color: '#fff', textDecoration: 'none' }}>Mark Attendance</Link>
                            </li>
                            <li style={{ marginLeft: '20px', marginRight: '0' }}>
                                <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Logout</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <h2>Mark Attendance</h2>
            <div style={{ marginBottom: '10px' }}>
                <label>Select Time Slot:</label>
                <select 
                    value={selectedTimeSlot} 
                    onChange={(e) => setSelectedTimeSlot(e.target.value)} 
                    style={{ marginLeft: '10px', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}>
                    <option value="">All</option>
                    <option value="9:00 AM - 10:00 AM">9:00 AM - 10:00 AM</option>
                    <option value="5:00 PM - 6:00 PM">5:00 PM - 6:00 PM</option>
                </select>
            </div>
            <div>
                <label>Attendance Date:</label>
                <input
                    type="date"
                    value={attendanceDate}
                    onChange={(e) => setAttendanceDate(e.target.value)}
                    style={{ marginLeft: '10px', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                />
            </div>

            <h3 style={{ marginTop: '20px' }}>Select Students for Attendance</h3>
            {filteredStudents.length > 0 && (
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#f4f4f4' }}>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Phone</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Email</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Gender</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Experience</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Batch</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Time Slot</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Attendance</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStudents.map((student, index) => (
                            <tr key={index}>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.name}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.phone}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.email}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.gender}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.experience}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.batch}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.timeSlot}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                    <label>
                                        <input 
                                            type="checkbox" 
                                            checked={attendance[student.name] === 'Present'} 
                                            onChange={() => handleAttendanceToggle(student.name)} 
                                        />
                                        {attendance[student.name] === 'Present' ? ' Present' : ' Absent'}
                                    </label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            <button 
                onClick={handleSaveAttendance} 
                style={{ backgroundColor: '#007BFF', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}>
                Save Attendance
            </button>
        </div>
    );
};

export default MarkAttendance;
