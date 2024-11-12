import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ViewStudentsPage = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudents, setSelectedStudents] = useState([]);

  // Fetch students data from the backend
  useEffect(() => {
    axios.get('http://localhost:5000/api/students')  // Corrected URL
      .then(response => {
        setStudents(response.data);  // Set the students state with fetched data
      })
      .catch(error => {
        console.error('Error fetching students:', error);
      });
  }, []);

  // Handle checkbox selection
  const handleCheckboxChange = (index) => {
    if (selectedStudents.includes(index)) {
      setSelectedStudents(selectedStudents.filter(i => i !== index));
    } else {
      setSelectedStudents([...selectedStudents, index]);
    }
  };

  // Handle removing selected students
  const handleRemoveSelected = () => {
    selectedStudents.forEach(index => {
      const studentId = students[index]._id;  // Get the student ID
      axios.delete(`http://localhost:5000/api/students/${studentId}`)
        .then(() => {
          alert(`${students[index].name} has been removed.`);
          setStudents(students.filter((_, idx) => idx !== index));  // Update the list of students
        })
        .catch(error => {
          console.error('Error removing student:', error);
        });
    });
    setSelectedStudents([]); // Clear the selection
  };

  // Handle dropping selected students for the month
  const handleDropSelectedForMonth = () => {
    selectedStudents.forEach(index => {
      const studentId = students[index]._id;  // Get the student ID
      axios.put(`http://localhost:5000/api/students/drop/${studentId}`)
        .then(() => {
          alert(`${students[index].name} has been dropped for the month.`);
        })
        .catch(error => {
          console.error('Error dropping student for the month:', error);
        });
    });
    setSelectedStudents([]); // Clear the selection
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

      {/* Student List */}
      <div style={{ backgroundColor: '#fff', padding: '20px', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', marginBottom: '20px' }}>
        <h2>Current Students</h2>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '10px' }}>
          <thead>
            <tr style={{ backgroundColor: '#f4f4f4' }}>
              <th style={{ border: '1px solid #ddd', padding: '8px' }}>Select</th>
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
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                  <input
                    type="checkbox"
                    onChange={() => handleCheckboxChange(index)}
                    checked={selectedStudents.includes(index)}
                  />
                </td>
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

      {/* Action Buttons */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
        <button
          style={{
            backgroundColor: '#e74c3c', color: '#fff', padding: '10px 15px', border: 'none',
            borderRadius: '5px', cursor: 'pointer'
          }}
          onClick={handleRemoveSelected}
          disabled={selectedStudents.length === 0}
        >
          REMOVE STUDENT
        </button>
        <button
          style={{
            backgroundColor: '#2980b9', color: '#fff', padding: '10px 15px', border: 'none',
            borderRadius: '5px', cursor: 'pointer'
          }}
          onClick={handleDropSelectedForMonth}
          disabled={selectedStudents.length === 0}
        >
          DROP STUDENT FOR MONTH
        </button>
      </div>
    </div>
  );
};

export default ViewStudentsPage;
