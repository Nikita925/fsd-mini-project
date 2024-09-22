import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import CoachLogin from './coachlogin';
import CoachLoginHome from './coachloginhome';
import CricketPage from './cricketpage'
import BadmintonPage from './badmintonpage'
import FootballPage from './footballpage'
import GymPage from './gympage'
import BookForPlay from './bookforplay';
import JoinCoaching from './joincoaching';
import './App.css'; // Import the CSS file for animations

function App() {
    return (
        <Router>
            <div>
                <header style={{ 
                    backgroundColor: '#333', 
                    color: '#fff', 
                    padding: '10px 0',
                    transition: 'background-color 0.3s ease-in-out',
                    width: '100%'
                }}>
                    <div style={{ 
                        width: '80%', 
                        margin: '0 auto', 
                        maxWidth: '1200px', 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center'
                    }}>
                        <div style={{ fontSize: '24px', fontWeight: 'bold' }}>Wow Sports and Fitness</div>
                        <nav style={{ flexGrow: 1, marginLeft: '20px' }}>
                            <ul style={{ 
                                listStyle: 'none', 
                                display: 'flex', 
                                margin: 0, 
                                padding: 0, 
                                alignItems: 'center'
                            }}>
                                <li style={{ marginLeft: '20px' }}>
                                    <Link to="/" style={{ 
                                        color: '#fff', 
                                        textDecoration: 'none', 
                                        transition: 'color 0.3s ease-in-out' 
                                    }}>Home</Link>
                                </li>
                                <li style={{ marginLeft: '20px' }}>
                                    <Link to="/dashboard" style={{ 
                                        color: '#fff', 
                                        textDecoration: 'none', 
                                        transition: 'color 0.3s ease-in-out' 
                                    }}>Dashboard</Link>
                                </li>
                                <li style={{ marginLeft: '20px' }}>
                                    <Link to="/contact" style={{ 
                                        color: '#fff', 
                                        textDecoration: 'none', 
                                        transition: 'color 0.3s ease-in-out' 
                                    }}>Contact</Link>
                                </li>
                                <li style={{ marginLeft: '20px' }}>
                                    <Link to="/about" style={{ 
                                        color: '#fff', 
                                        textDecoration: 'none', 
                                        transition: 'color 0.3s ease-in-out' 
                                    }}>About</Link>
                                </li>
                            </ul>
                        </nav>
                        <div>
                            <Link to="/coach-login" style={{ 
                                display: 'inline-block', 
                                backgroundColor: '#6c757d', 
                                color: '#fff', 
                                padding: '10px 20px', 
                                borderRadius: '5px', 
                                textDecoration: 'none',
                                transition: 'background-color 0.3s ease-in-out, transform 0.3s ease-in-out',
                                fontSize: '14px'
                            }}>
                                Coach Login
                            </Link>
                        </div>
                    </div>
                </header>

                <main style={{ padding: '20px' }}>
                    <Routes>
                        <Route path="/coach-login" element={<CoachLogin />} />
                        <Route path="/coach-login-home" element={<CoachLoginHome />} />
                        <Route path="/cricket" element={<CricketPage />} />
                        <Route path="/badminton" element={<BadmintonPage />} />
                        <Route path="/football" element={<FootballPage />} />
                        <Route path="/gym" element={<GymPage />} />
                        <Route path="/book-for-play" element={<BookForPlay />} />
                        <Route path="/join-coaching" element={<JoinCoaching />} />
                        <Route
                            path="/"
                            element={
                                <>
                                    {/* Hero Section */}
                                    <section id="home" style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        height: '100vh',
                                        backgroundColor: '#6c757d',
                                        color: 'white',
                                        textAlign: 'center',
                                        padding: '20px',
                                        margin: 0,
                                        transition: 'background-color 0.3s ease-in-out'
                                    }}>
                                        <div style={{
                                            maxWidth: '80%',
                                            margin: '0 auto'
                                        }}>
                                            <h1 style={{ 
                                                fontSize: '3rem', 
                                                marginBottom: '20px',
                                                transition: 'transform 0.3s ease-in-out'
                                            }}>Achieve Your Best with WOW Sports and Fitness</h1>
                                            <p style={{ 
                                                fontSize: '1.5rem', 
                                                marginBottom: '40px',
                                                transition: 'opacity 0.3s ease-in-out'
                                            }}>Join us in pushing your limits across multiple sports disciplines!</p>
                                            <Link to="#membership" style={{
                                                display: 'inline-block',
                                                padding: '15px 30px',
                                                backgroundColor: '#fff',
                                                color: '#6c757d',
                                                border: 'none',
                                                borderRadius: '30px',
                                                fontSize: '1rem',
                                                cursor: 'pointer',
                                                textDecoration: 'none',
                                                transition: 'background-color 0.3s ease-in-out, transform 0.3s ease-in-out',
                                                marginRight: '10px'
                                            }}
                                            onMouseEnter={(e) => e.target.style.backgroundColor = '#e0e0e0'}
                                            onMouseLeave={(e) => e.target.style.backgroundColor = '#fff'}>
                                                Join Now
                                            </Link>
                                            <Link to="#about" style={{
                                                display: 'inline-block',
                                                padding: '15px 30px',
                                                backgroundColor: 'transparent',
                                                border: '2px solid #fff',
                                                color: '#fff',
                                                borderRadius: '30px',
                                                fontSize: '1rem',
                                                cursor: 'pointer',
                                                transition: 'background-color 0.3s ease-in-out, transform 0.3s ease-in-out',
                                                marginLeft: '10px',
                                                textDecoration: 'none'
                                            }}
                                            onMouseEnter={(e) => e.target.style.backgroundColor = '#fff'}
                                            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}>
                                                Learn More
                                            </Link>
                                        </div>
                                    </section>

                                    {/* About Us Section */}
                                    <section id="about" style={{
                                        padding: '60px 20px',
                                        textAlign: 'center',
                                        backgroundColor: '#007BFF',
                                        color: 'white',
                                        transition: 'background-color 0.3s ease-in-out'
                                    }}>
                                        <h2 style={{ 
                                            fontSize: '2.5rem', 
                                            marginBottom: '20px',
                                            transition: 'transform 0.3s ease-in-out'
                                        }}>About WOW Sports and Fitness</h2>
                                        <p style={{ 
                                            fontSize: '1.2rem', 
                                            marginBottom: '15px', 
                                            lineHeight: '1.6',
                                            transition: 'opacity 0.3s ease-in-out'
                                        }}>At WOW Sports and Fitness, we believe in helping you achieve your personal best, whether you’re aiming to be a professional athlete or just looking to stay fit.</p>
                                        <p style={{ 
                                            fontSize: '1.2rem', 
                                            marginBottom: '15px', 
                                            lineHeight: '1.6',
                                            transition: 'opacity 0.3s ease-in-out'
                                        }}>With state-of-the-art facilities and experienced coaches, we offer specialized training in Cricket, Badminton, Football, and Gym.</p>
                                    </section>

                                    {/* Sports Section */}

                                    <section id="sports" style={{
                                        padding: '60px 20px',
                                        textAlign: 'center',
                                        transition: 'background-color 0.3s ease-in-out'
                                    }}>
                                        <h2 style={{ 
                                            fontSize: '2.5rem', 
                                            marginBottom: '40px',
                                            transition: 'transform 0.3s ease-in-out'
                                        }}>Our Sports</h2>
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            flexWrap: 'wrap',
                                            gap: '1%',
                                            animation: 'fadeIn 1s ease-in-out'
                                        }}>
                                            <div className="sports-card">
                                                <Link to="/cricket" style={{ textDecoration: 'none' }}>
                                                <h3 style={{ fontSize: '1.5rem', color: '#007BFF', marginBottom: '15px' }}>Cricket</h3>
                                                <p style={{ fontSize: '1rem', color: '#555' }}>Professional cricket training and practice nets.</p>
                                            </Link>
                                            </div>
                                            <div className="sports-card">
                                                <Link to="/badminton" style={{ textDecoration: 'none' }}>
                                                <h3 style={{ fontSize: '1.5rem', color: '#007BFF', marginBottom: '15px' }}>Badminton</h3>
                                                <p style={{ fontSize: '1rem', color: '#555' }}>Indoor badminton courts with expert coaches.</p>
                                            </Link>
                                            </div>
                                            <div className="sports-card">
                                                <Link to="/football" style={{ textDecoration: 'none' }}>
                                                <h3 style={{ fontSize: '1.5rem', color: '#007BFF', marginBottom: '15px' }}>Football</h3>
                                                <p style={{ fontSize: '1rem', color: '#555' }}>Football coaching and matches for all levels.</p>
                                            </Link>
                                            </div>
                                            <div className="sports-card">
                                                <Link to="/gym" style={{ textDecoration: 'none' }}>
                                                <h3 style={{ fontSize: '1.5rem', color: '#007BFF', marginBottom: '15px' }}>Gym</h3>
                                                <p style={{ fontSize: '1rem', color: '#555' }}>Fully equipped gym with personal trainers.</p>
                                            </Link>
                                            </div>
                                        </div>
                                    </section>

                                    {/* Coaches Section */}
                                    <section id="coaches" style={{
                                        padding: '60px 20px',
                                        textAlign: 'center',
                                        backgroundColor: '#444',
                                        color: 'white',
                                        transition: 'background-color 0.3s ease-in-out'
                                    }}>
                                        <h2 style={{ 
                                            fontSize: '2.5rem', 
                                            marginBottom: '40px',
                                            transition: 'transform 0.3s ease-in-out'
                                        }}>Meet Our Coaches</h2>
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            flexWrap: 'wrap',
                                        }}>
                                            <div style={{
                                                width: '23%',
                                                margin: '1%',
                                                padding: '20px',
                                                backgroundColor: '#555',
                                                borderRadius: '15px',
                                                transition: 'transform 0.3s ease-in-out',
                                                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                                                textAlign: 'center'
                                            }}>
                                                <img src="coach1.jpg" alt="Cricket Coach" style={{ 
                                                    width: '100%', 
                                                    borderRadius: '50%', 
                                                    marginBottom: '15px', 
                                                    transition: 'transform 0.3s ease-in-out' 
                                                }} />
                                                <h3 style={{ 
                                                    fontSize: '1.5rem', 
                                                    color: '#007BFF', 
                                                    marginBottom: '10px',
                                                    transition: 'color 0.3s ease-in-out'
                                                }}>John Doe</h3>
                                                <p style={{ fontSize: '1rem', color: '#ccc' }}>Cricket Coach</p>
                                            </div>
                                            <div style={{
                                                width: '23%',
                                                margin: '1%',
                                                padding: '20px',
                                                backgroundColor: '#555',
                                                borderRadius: '15px',
                                                transition: 'transform 0.3s ease-in-out',
                                                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                                                textAlign: 'center'
                                            }}>
                                                <img src="coach2.jpg" alt="Badminton Coach" style={{ 
                                                    width: '100%', 
                                                    borderRadius: '50%', 
                                                    marginBottom: '15px', 
                                                    transition: 'transform 0.3s ease-in-out' 
                                                }} />
                                                <h3 style={{ 
                                                    fontSize: '1.5rem', 
                                                    color: '#007BFF', 
                                                    marginBottom: '10px',
                                                    transition: 'color 0.3s ease-in-out'
                                                }}>Jane Smith</h3>
                                                <p style={{ fontSize: '1rem', color: '#ccc' }}>Badminton Coach</p>
                                            </div>
                                            <div style={{
                                                width: '23%',
                                                margin: '1%',
                                                padding: '20px',
                                                backgroundColor: '#555',
                                                borderRadius: '15px',
                                                transition: 'transform 0.3s ease-in-out',
                                                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                                                textAlign: 'center'
                                            }}>
                                                <img src="coach3.jpg" alt="Football Coach" style={{ 
                                                    width: '100%', 
                                                    borderRadius: '50%', 
                                                    marginBottom: '15px', 
                                                    transition: 'transform 0.3s ease-in-out' 
                                                }} />
                                                <h3 style={{ 
                                                    fontSize: '1.5rem', 
                                                    color: '#007BFF', 
                                                    marginBottom: '10px',
                                                    transition: 'color 0.3s ease-in-out'
                                                }}>Michael Lee</h3>
                                                <p style={{ fontSize: '1rem', color: '#ccc' }}>Football Coach</p>
                                            </div>
                                            <div style={{
                                                width: '23%',
                                                margin: '1%',
                                                padding: '20px',
                                                backgroundColor: '#555',
                                                borderRadius: '15px',
                                                transition: 'transform 0.3s ease-in-out',
                                                boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
                                                textAlign: 'center'
                                            }}>
                                                <img src="coach4.jpg" alt="Gym Trainer" style={{ 
                                                    width: '100%', 
                                                    borderRadius: '50%', 
                                                    marginBottom: '15px', 
                                                    transition: 'transform 0.3s ease-in-out' 
                                                }} />
                                                <h3 style={{ 
                                                    fontSize: '1.5rem', 
                                                    color: '#007BFF', 
                                                    marginBottom: '10px',
                                                    transition: 'color 0.3s ease-in-out'
                                                }}>Emily Clark</h3>
                                                <p style={{ fontSize: '1rem', color: '#ccc' }}>Gym Trainer</p>
                                            </div>
                                        </div>
                                    </section>

                                    {/* Membership Section */}
                                    <section id="membership" style={{
                                        padding: '60px 20px',
                                        textAlign: 'center',
                                        backgroundColor: '#007BFF',
                                        color: 'white',
                                        transition: 'background-color 0.3s ease-in-out'
                                    }}>
                                        <h2 style={{ 
                                            fontSize: '2.5rem', 
                                            marginBottom: '40px',
                                            transition: 'transform 0.3s ease-in-out'
                                        }}>Become a Member</h2>
                                        <p style={{ 
                                            fontSize: '1.2rem', 
                                            marginBottom: '20px',
                                            lineHeight: '1.6',
                                            transition: 'opacity 0.3s ease-in-out'
                                        }}>Join us to unlock unlimited access to all sports and fitness facilities. Choose from a variety of membership plans to suit your needs.</p>
                                        <Link to="/contact" style={{
                                            display: 'inline-block',
                                            padding: '15px 30px',
                                            backgroundColor: '#fff',
                                            color: '#007BFF',
                                            borderRadius: '30px',
                                            fontSize: '1rem',
                                            textDecoration: 'none',
                                            transition: 'background-color 0.3s ease-in-out, transform 0.3s ease-in-out',
                                            marginRight: '10px'
                                        }}
                                        onMouseEnter={(e) => e.target.style.backgroundColor = '#e0e0e0'}
                                        onMouseLeave={(e) => e.target.style.backgroundColor = '#fff'}>
                                            Contact Us
                                        </Link>
                                    </section>
                                </>
                            }
                        />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
