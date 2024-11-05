import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function CoachLoginHome() {
    // Expanded student data
    const [students, setStudents] = useState([
        { name: 'Anshuman Joshi', phone: '123-456-7890', email: 'anshuman@example.com', gender: 'Male', experience: 'Beginner', batch: 'Morning', timeSlot: '9:00 AM - 10:00 AM', coach: 'John Doe', enrollmentDate: '2023-10-01' },
        { name: 'Nikita Kumari', phone: '234-567-8901', email: 'nikita@example.com', gender: 'Female', experience: 'Intermediate', batch: 'Evening', timeSlot: '5:00 PM - 6:00 PM', coach: 'Jane Smith', enrollmentDate: '2023-09-20' },
        { name: 'Riya Patel', phone: '567-890-1234', email: 'riya@example.com', gender: 'Female', experience: 'Advanced', batch: 'Morning', timeSlot: '8:00 AM - 9:00 AM', coach: 'John Doe', enrollmentDate: '2023-10-02' },
        { name: 'Sunny Suman', phone: '901-234-5678', email: 'sunny@example.com', gender: 'Male', experience: 'Intermediate', batch: 'Morning', timeSlot: '8:00 AM - 9:00 AM', coach: 'Jane Smith', enrollmentDate: '2023-10-03' },
        { name: 'Akshay Kumar', phone: '789-012-3456', email: 'akshay@example.com', gender: 'Male', experience: 'Beginner', batch: 'Morning', timeSlot: '9:00 AM - 10:00 AM', coach: 'Michael Lee', enrollmentDate: '2023-08-30' },
        { name: 'Karan Kundra', phone: '890-123-4567', email: 'karan@example.com', gender: 'Male', experience: 'Beginner', batch: 'Evening', timeSlot: '7:00 PM - 8:00 PM', coach: 'Emily Clark', enrollmentDate: '2023-07-20' },
        { name: 'Gracy Punjabi', phone: '112-233-4455', email: 'gracy@example.com', gender: 'Female', experience: 'Beginner', batch: 'Evening', timeSlot: '6:00 PM - 7:00 PM', coach: 'John Doe', enrollmentDate: '2023-09-29' },
        { name: 'Ridham Sarodiya', phone: '345-678-9012', email: 'ridham@example.com', gender: 'Male', experience: 'Advanced', batch: 'Morning', timeSlot: '9:00 AM - 10:00 AM', coach: 'Michael Lee', enrollmentDate: '2023-08-15' },
        { name: 'Shravan Jhaveri', phone: '456-789-0123', email: 'shravan@example.com', gender: 'Male', experience: 'Beginner', batch: 'Evening', timeSlot: '5:00 PM - 6:00 PM', coach: 'Emily Clark', enrollmentDate: '2023-07-25' },
        { name: 'Priya Sharma', phone: '999-222-1111', email: 'priya@example.com', gender: 'Female', experience: 'Beginner', batch: 'Evening', timeSlot: '5:00 PM - 6:00 PM', coach: 'Jane Smith', enrollmentDate: '2023-10-05' },
        { name: 'Aarav Mehta', phone: '888-333-2222', email: 'aarav@example.com', gender: 'Male', experience: 'Advanced', batch: 'Morning', timeSlot: '7:00 AM - 8:00 AM', coach: 'Michael Lee', enrollmentDate: '2023-09-25' },
        { name: 'Simran Kapoor', phone: '777-444-3333', email: 'simran@example.com', gender: 'Female', experience: 'Intermediate', batch: 'Evening', timeSlot: '6:00 PM - 7:00 PM', coach: 'Emily Clark', enrollmentDate: '2023-10-01' },
    ]);

    const coachData = {
        'John Doe': { sport: 'Cricket' },
        'Jane Smith': { sport: 'Badminton' },
        'Michael Lee': { sport: 'Football' },
        'Emily Clark': { sport: 'Gym' }
    };

    const coaches = Object.keys(coachData);

    // Filter students based on coach
    const getStudentsByCoach = (coach) => {
        return students.filter(student => student.coach === coach);
    };

    return (
        <div style={{ padding: '20px', backgroundColor: '#f0f0f0', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>
            <header style={{ backgroundColor: '#2c3e50', color: '#fff', padding: '15px 0' }}>
                <div style={{ width: '90%', margin: '0 auto', maxWidth: '1200px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ fontSize: '26px', fontWeight: 'bold' }}>Coach Dashboard</div>
                    <nav>
                        <ul style={{ listStyle: 'none', display: 'flex', margin: 0, padding: 0 }}>
                            <li style={{ marginLeft: '20px' }}>
                                <Link to="/coach-login-home" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Home</Link>
                            </li>
                            <li style={{ marginLeft: '20px' }}>
                                <Link to="/addstudents" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Add Students</Link>
                            </li>
                            <li style={{ marginLeft: '20px' }}>
                                <Link to="/viewstudents" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>View Students</Link>
                            </li>
                            <li style={{ marginLeft: '20px' }}>
                                <Link to="/markattendance" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Mark Attendance</Link>
                            </li>
                            <li style={{ marginLeft: '20px' }}>
                                <Link to="/markfees" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Mark Fees</Link>
                            </li>
                            <li style={{ marginLeft: '20px' }}>
                                <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Logout</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </header>

            <div style={{ marginTop: '30px', padding: '20px', backgroundColor: '#fff', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#34495e' }}>Coach-wise Student Enrollment</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
                    {coaches.map((coach) => (
                        <div key={coach} style={{ border: '1px solid #ddd', borderRadius: '10px', padding: '20px', backgroundColor: '#fafafa', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)' }}>
                            <h3 style={{ color: '#2c3e50', marginBottom: '15px' }}>{coach} ({coachData[coach].sport})</h3>
                            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                                <thead>
                                    <tr style={{ backgroundColor: '#ecf0f1' }}>
                                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>S/N</th>
                                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Name</th>
                                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Email</th>
                                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Phone</th>
                                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Experience</th>
                                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Batch</th>
                                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Time Slot</th>
                                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Enrollment Date</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {getStudentsByCoach(coach).map((student, index) => (
                                        <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff' }}>
                                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{index + 1}</td>
                                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.name}</td>
                                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.email}</td>
                                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.phone}</td>
                                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.experience}</td>
                                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.batch}</td>
                                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.timeSlot}</td>
                                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.enrollmentDate}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default CoachLoginHome;
