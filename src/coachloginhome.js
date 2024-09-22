import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CoachLoginHome() {
    const [students, setStudents] = useState([]);
    const [newStudent, setNewStudent] = useState('');
    const [attendance, setAttendance] = useState({});

    const handleAddStudent = () => {
        if (newStudent.trim() !== '') {
            setStudents([...students, newStudent.trim()]);
            setNewStudent('');
        }
    };

    const handleAttendanceChange = (student) => {
        setAttendance({
            ...attendance,
            [student]: !attendance[student],
        });
    };

    return (
        <div style={{ padding: '20px', backgroundColor: '#f4f4f4', minHeight: '100vh' }}>
            <header style={{ backgroundColor: '#333', color: '#fff', padding: '10px 0' }}>
                <div style={{ width: '80%', margin: '0 auto', maxWidth: '1200px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '24px', fontWeight: 'bold' }}>Coach Dashboard</div>
                    <nav>
                        <ul style={{ listStyle: 'none', display: 'flex', margin: 0, padding: 0 }}>
                            <li style={{ marginLeft: '20px' }}>
                                <Link to="/coach-login-home" style={{ color: '#fff', textDecoration: 'none' }}>Home</Link>
                            </li>
                            <li style={{ marginLeft: '20px' }}>
                                <Link to="/coach-login-home" style={{ color: '#fff', textDecoration: 'none' }}>View Students</Link>
                            </li>
                            <li style={{ marginLeft: '20px' }}>
                                <Link to="/coach-login-home" style={{ color: '#fff', textDecoration: 'none' }}>Mark Attendance</Link>
                            </li>
                            <li style={{ marginLeft: '20px', marginRight: '0' }}>
                                <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>Logout</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
                <h2>Add New Student</h2>
                <input
                    type="text"
                    value={newStudent}
                    onChange={(e) => setNewStudent(e.target.value)}
                    placeholder="Enter student name"
                    style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                />
                <button onClick={handleAddStudent} style={{ backgroundColor: '#007BFF', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add Student</button>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <h2>Current Students</h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {students.map((student, index) => (
                        <li key={index} style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{student}</li>
                    ))}
                </ul>
            </div>

            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                <h2>Mark Attendance</h2>
                {students.map((student, index) => (
                    <div key={index}>
                        <label>
                            <input
                                type="checkbox"
                                checked={attendance[student] || false}
                                onChange={() => handleAttendanceChange(student)}
                            />
                            {student}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CoachLoginHome;
