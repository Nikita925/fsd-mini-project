import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CoachLoginHome() {
    // Sample data for students
    const [students, setStudents] = useState([
        { name: 'Anshuman Joshi', phone: '123-456-7890', email: 'anshuman@example.com', gender: 'Male', experience: 'Beginner', batch: 'Morning', timeSlot: '9:00 AM - 10:00 AM' },
        { name: 'Nikita Kumari', phone: '234-567-8901', email: 'nikita@example.com', gender: 'Female', experience: 'Intermediate', batch: 'Evening', timeSlot: '5:00 PM - 6:00 PM' },
        { name: 'Ridham Sarodiya', phone: '345-678-9012', email: 'ridham@example.com', gender: 'Male', experience: 'Advanced', batch: 'Morning', timeSlot: '9:00 AM - 10:00 AM' },
        { name: 'Shravan Jhaveri', phone: '456-789-0123', email: 'shravan@example.com', gender: 'Male', experience: 'Beginner', batch: 'Evening', timeSlot: '5:00 PM - 6:00 PM' },
    ]);

    const [newStudent, setNewStudent] = useState({
        name: '',
        phone: '',
        email: '',
        gender: 'Male',
        experience: 'Beginner',
        batch: 'Morning',
    });

    const [attendance, setAttendance] = useState({});
    const [attendanceDate, setAttendanceDate] = useState('');
    const [selectedTimeSlot, setSelectedTimeSlot] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewStudent({ ...newStudent, [name]: value });
    };

    const handleAddStudent = () => {
        if (newStudent.name.trim() !== '') {
            setStudents([...students, { ...newStudent, timeSlot: '9:00 AM - 10:00 AM' }]); // Default time slot
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

    const handleAttendanceToggle = (studentName) => {
        setAttendance((prevAttendance) => ({
            ...prevAttendance,
            [studentName]: prevAttendance[studentName] === 'Present' ? 'Absent' : 'Present',
        }));
    };

    const handleSaveAttendance = () => {
        console.log("Attendance saved for date:", attendanceDate, "for students:", attendance);
    };

    // Filter students based on selected time slot
    const filteredStudents = selectedTimeSlot 
        ? students.filter(student => student.timeSlot === selectedTimeSlot) 
        : students;

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
                                <Link to="/coach-login-home" style={{ color: '#fff', textDecoration: 'none' }}>Add Students</Link>
                            </li>
                            <li style={{ marginLeft: '20px' }}>
                                <Link to="/view-students" style={{ color: '#fff', textDecoration: 'none' }}>View Students</Link>
                            </li>
                            <li style={{ marginLeft: '20px' }}>
                                <Link to="/mark-attendance" style={{ color: '#fff', textDecoration: 'none' }}>Mark Attendance</Link>
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

            <div style={{ marginBottom: '20px' }}>
                <h2>Current Students</h2>
                <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '10px' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#f4f4f4' }}>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Phone</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Email</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Gender</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Experience</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Batch</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Time Slot</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student, index) => (
                            <tr key={index}>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.name}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.phone}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.email}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.gender}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.experience}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.batch}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.timeSlot}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                <h2>Mark Attendance</h2>
                <div style={{ marginBottom: '10px' }}>
                    <label>Select Time Slot:</label>
                    <select value={selectedTimeSlot} onChange={(e) => setSelectedTimeSlot(e.target.value)} style={{ marginLeft: '10px', padding: '10px', borderRadius: '4px', border: '1px solid #ddd' }}>
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

                <button onClick={handleSaveAttendance} style={{ backgroundColor: '#007BFF', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '10px' }}>Save Attendance</button>
            </div>
        </div>
    );
}

export default CoachLoginHome;
