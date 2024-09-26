import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CoachLoginHome() {
    const [students, setStudents] = useState([]);
    const [newStudent, setNewStudent] = useState({
        name: '',
        sport: 'Badminton',
        email: '',
        phone: '',
        gender: 'Male',
        experienceLevel: 'Intermediate',
        preferredSlot: 'Morning',
        preferredTime: '6am-7am'
    });
    const [attendance, setAttendance] = useState({});

    const handleAddStudent = () => {
        if (newStudent.name.trim() !== '') {
            setStudents([...students, newStudent]);
            setNewStudent({
                name: '',
                sport: 'Badminton',
                email: '',
                phone: '',
                gender: 'Male',
                experienceLevel: 'Intermediate',
                preferredSlot: 'Morning',
                preferredTime: '6am-7am'
            });
        }
    };

    const handleAttendanceChange = (studentName) => {
        setAttendance({
            ...attendance,
            [studentName]: !attendance[studentName],
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
                    value={newStudent.name}
                    onChange={(e) => setNewStudent({ ...newStudent, name: e.target.value })}
                    placeholder="Full Name"
                    style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                />
                <input
                    type="email"
                    value={newStudent.email}
                    onChange={(e) => setNewStudent({ ...newStudent, email: e.target.value })}
                    placeholder="Email"
                    style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                />
                <input
                    type="text"
                    value={newStudent.phone}
                    onChange={(e) => setNewStudent({ ...newStudent, phone: e.target.value })}
                    placeholder="Phone"
                    style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                />
                <select
                    value={newStudent.sport}
                    onChange={(e) => setNewStudent({ ...newStudent, sport: e.target.value })}
                    style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                >
                    <option value="Badminton">Badminton</option>
                    <option value="Cricket">Cricket</option>
                    <option value="Football">Football</option>
                    <option value="Gym">Gym</option>
                </select>
                <select
                    value={newStudent.gender}
                    onChange={(e) => setNewStudent({ ...newStudent, gender: e.target.value })}
                    style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <select
                    value={newStudent.experienceLevel}
                    onChange={(e) => setNewStudent({ ...newStudent, experienceLevel: e.target.value })}
                    style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                </select>
                <select
                    value={newStudent.preferredSlot}
                    onChange={(e) => setNewStudent({ ...newStudent, preferredSlot: e.target.value })}
                    style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                >
                    <option value="Morning">Morning</option>
                    <option value="Afternoon">Afternoon</option>
                    <option value="Evening">Evening</option>
                </select>
                <select
                    value={newStudent.preferredTime}
                    onChange={(e) => setNewStudent({ ...newStudent, preferredTime: e.target.value })}
                    style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
                >
                    <option value="6am-7am">6am-7am</option>
                    <option value="7am-8am">7am-8am</option>
                    <option value="5pm-6pm">5pm-6pm</option>
                </select>

                <button onClick={handleAddStudent} style={{ backgroundColor: '#007BFF', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>Add Student</button>
            </div>

            <div style={{ marginBottom: '20px' }}>
                <h2>Current Students</h2>
                <ul style={{ listStyle: 'none', padding: 0 }}>
                    {students.map((student, index) => (
                        <li key={index} style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>
                            <strong>{student.name}</strong><br />
                            Sport: {student.sport}, Email: {student.email}, Phone: {student.phone}, <br />
                            Gender: {student.gender}, Experience Level: {student.experienceLevel}, Preferred Slot: {student.preferredSlot}, Preferred Time: {student.preferredTime}
                        </li>
                    ))}
                </ul>
            </div>

            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                <h2>Mark Attendance</h2>
                {students.map((student, index) => (
                    <div key={index} style={{ marginBottom: '10px' }}>
                        <label>
                            <input
                                type="checkbox"
                                checked={attendance[student.name] || false}
                                onChange={() => handleAttendanceChange(student.name)}
                            />
                            {`${student.name} (${student.sport})`}
                        </label>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CoachLoginHome;
