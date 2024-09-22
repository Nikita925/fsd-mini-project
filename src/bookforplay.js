import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function BookForPlay() {
    const location = useLocation();
    const [formData, setFormData] = useState({
        sport: 'Cricket',  
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        additionalInfo: ''
    });

    useEffect(() => {
        if (location.state && location.state.sport) {
            setFormData(prevData => ({
                ...prevData,
                sport: location.state.sport
            }));
        }
    }, [location.state]);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Booking Submitted for ${formData.sport}`);
    };

    const sectionStyle = {
        padding: '50px 20px',
        backgroundColor: '#f0f8ff',
        textAlign: 'center'
    };

    const formStyle = {
        maxWidth: '600px',
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column'
    };

    const labelStyle = {
        marginBottom: '15px',
        textAlign: 'left'
    };

    const inputStyle = {
        padding: '10px',
        marginTop: '5px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        width: '100%'
    };

    const selectStyle = {
        padding: '10px',
        borderRadius: '5px',
        border: '1px solid #ccc',
        width: '100%',
        marginBottom: '20px'
    };

    const buttonStyle = {
        padding: '10px 20px',
        backgroundColor: '#333',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginTop: '20px',
        transition: 'background-color 0.3s ease-in-out'
    };

    const buttonHoverStyle = {
        backgroundColor: '#555'
    };

    return (
        <section style={sectionStyle}>
            <h2>Book Ground for Play</h2>
            <form style={formStyle} onSubmit={handleSubmit}>
                <label style={labelStyle}>
                    Select Sport:
                    <select
                        name="sport"
                        value={formData.sport}
                        onChange={handleChange}
                        style={selectStyle}
                    >
                        <option value="Cricket">Cricket</option>
                        <option value="Badminton">Badminton</option>
                        <option value="Football">Football</option>
                    </select>
                </label>
                <label style={labelStyle}>
                    Full Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} style={inputStyle} required />
                </label>
                <label style={labelStyle}>
                    Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} style={inputStyle} required />
                </label>
                <label style={labelStyle}>
                    Phone:
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} style={inputStyle} required />
                </label>
                <label style={labelStyle}>
                    Preferred Date:
                    <input type="date" name="date" value={formData.date} onChange={handleChange} style={inputStyle} required />
                </label>
                <label style={labelStyle}>
                    Preferred Time Slot (2 hours):
                    <input type="time" name="time" value={formData.time} onChange={handleChange} style={inputStyle} required />
                </label>
                <label style={labelStyle}>
                    Additional Info (optional):
                    <textarea name="additionalInfo" value={formData.additionalInfo} onChange={handleChange} style={inputStyle}></textarea>
                </label>
                <button
                    type="submit"
                    style={buttonStyle}
                    onMouseOver={(e) => e.target.style.backgroundColor = buttonHoverStyle.backgroundColor}
                    onMouseOut={(e) => e.target.style.backgroundColor = buttonStyle.backgroundColor}
                >
                    Submit Booking
                </button>
            </form>
        </section>
    );
}

export default BookForPlay;
