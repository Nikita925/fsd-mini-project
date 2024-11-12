import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MarkFees = () => {
    const [selectedTimeSlot, setSelectedTimeSlot] = useState('');
    const [feeStatus, setFeeStatus] = useState({});
    const [paymentMethod, setPaymentMethod] = useState({});
    const [feesAmount, setFeesAmount] = useState({}); // Object to hold individual fees for each student

    // Predefined student data
    const [students] = useState([
        { name: 'Anshuman Joshi', phone: '123-456-7890', timeSlot: '9:00 AM - 10:00 AM' },
        { name: 'Nikita Kumari', phone: '234-567-8901', timeSlot: '5:00 PM - 6:00 PM' },
        { name: 'Ridham Sarodiya', phone: '345-678-9012', timeSlot: '9:00 AM - 10:00 AM' },
        { name: 'Shravan Jhaveri', phone: '456-789-0123', timeSlot: '5:00 PM - 6:00 PM' },
    ]);

    // Initialize feesAmount with default value of 2000 for each student
    React.useEffect(() => {
        const initialFees = {};
        students.forEach(student => {
            initialFees[student.name] = 2000; // Default fee amount
        });
        setFeesAmount(initialFees);
    }, [students]);

    // Filter students based on selected time slot
    const filteredStudents = students.filter(student =>
        selectedTimeSlot === '' || student.timeSlot === selectedTimeSlot
    );

    const handleFeeToggle = (name) => {
        setFeeStatus(prev => ({
            ...prev,
            [name]: prev[name] === 'Paid' ? 'Unpaid' : 'Paid'
        }));
    };

    const handlePaymentMethodChange = (name, method) => {
        setPaymentMethod(prev => ({
            ...prev,
            [name]: method
        }));
    };

    const handleFeesAmountChange = (name, value) => {
        setFeesAmount(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSaveFees = () => {
        console.log('Fees status:', feeStatus);
        console.log('Payment methods:', paymentMethod);
        console.log('Fees amount:', feesAmount);
        alert('Fees have been marked successfully!');
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

            <h2>Mark Fees</h2>

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

            <h3 style={{ marginTop: '20px' }}>Select Students and Mark Fees</h3>
            {filteredStudents.length > 0 && (
                <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '10px' }}>
                    <thead>
                        <tr style={{ backgroundColor: '#f4f4f4' }}>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Phone</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Time Slot</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Payment Method</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fees Amount</th>
                            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Fee Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredStudents.map((student, index) => (
                            <tr key={index}>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.name}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.phone}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{student.timeSlot}</td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                    <select 
                                        value={paymentMethod[student.name] || ''} 
                                        onChange={(e) => handlePaymentMethodChange(student.name, e.target.value)}
                                        style={{ padding: '8px', borderRadius: '4px', border: '1px solid #ddd' }}>
                                        <option value="">Select</option>
                                        <option value="Cash">Cash</option>
                                        <option value="Digital">Digital</option>
                                        <option value="Cheque">Cheque</option>
                                    </select>
                                </td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                    <input
                                        type="number"
                                        value={feesAmount[student.name] || 2000} // Show default value if not set
                                        onChange={(e) => handleFeesAmountChange(student.name, e.target.value)} // Update feesAmount for each student
                                        style={{ width: '80px', padding: '4px', borderRadius: '4px', border: '1px solid #ddd' }}
                                    />
                                </td>
                                <td style={{ border: '1px solid #ddd', padding: '8px' }}>
                                    <label style={{ display: 'flex', alignItems: 'center' }}>
                                        <span style={{ marginRight: '10px' }}>Fees Status:</span>
                                        <div style={{ position: 'relative', display: 'inline-block', width: '30px', height: '16px' }}>
                                            <input 
                                                type="checkbox" 
                                                checked={feeStatus[student.name] === 'Paid'} 
                                                onChange={() => handleFeeToggle(student.name)} 
                                                disabled={!paymentMethod[student.name]}  // Disable until payment method is selected
                                                style={{ opacity: 0, width: 0, height: 0 }}
                                            />
                                            <span style={{
                                                position: 'absolute',
                                                cursor: 'pointer',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                                bottom: 0,
                                                backgroundColor: feeStatus[student.name] === 'Paid' ? '#4CAF50' : '#ccc',
                                                borderRadius: '34px',
                                                transition: '.4s'
                                            }} />
                                            <span style={{
                                                position: 'absolute',
                                                content: '""',
                                                height: '12px',
                                                width: '12px',
                                                left: '2px',
                                                bottom: '2px',
                                                backgroundColor: 'white',
                                                borderRadius: '34px',
                                                transition: '.4s',
                                                transform: feeStatus[student.name] === 'Paid' ? 'translateX(14px)' : 'translateX(0)',
                                            }} />
                                        </div>
                                        <span>{feeStatus[student.name] === 'Paid' ? ' Paid' : ' Unpaid'}</span>
                                    </label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            <button 
                onClick={handleSaveFees} 
                disabled={filteredStudents.every(student => !feeStatus[student.name])} // Disable until at least one fee is marked
                style={{
                    backgroundColor: '#007BFF',
                    color: '#fff',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    marginTop: '10px',
                    opacity: filteredStudents.every(student => !feeStatus[student.name]) ? 0.5 : 1
                }}>
                Save Fees
            </button>
        </div>
    );
};

export default MarkFees;
