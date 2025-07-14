import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import VennImage from '../assets/venn.png';
import HandsImage from '../assets/hands.png';
import Map from '../assets/map.png';
import Arrow from '../assets/arrow.png'

const iconStyle = {
  fontSize: '1.5rem',
  color: '#333',
};

const Aboutus = () => {
  const teamMembers = [
    { name: 'Pramod Sharma', title: 'CEO / Founder', img: 'https://www.napkin.ai/assets/v6/about-us/team/pramod.jpg' },
    { name: 'Jerome Scholler', title: 'CTO / Founder', img: 'https://www.napkin.ai/assets/v6/about-us/team/jerome.jpg' },
    { name: 'Arnaud Brejeon', title: 'Engineering', img: 'https://www.napkin.ai/assets/v6/about-us/team/arnaud.jpg' },
    { name: 'Erwan Martin', title: 'Engineering', img: 'https://www.napkin.ai/assets/v6/about-us/team/erwan.jpg' },
    { name: 'Murtuza Bohra', title: 'Engineering', img: 'https://www.napkin.ai/assets/v6/about-us/team/murtuza.jpg' },
    { name: 'Genevieve Singer', title: 'Product', img: 'https://www.napkin.ai/assets/v6/about-us/team/genevieve.jpg' },
    { name: 'Jonathan Simard', title: 'Design', img: 'https://www.napkin.ai/assets/v6/about-us/team/jonathan.jpg' },
    { name: 'Stanley Iriele', title: 'Engineering', img: 'https://www.napkin.ai/assets/v6/about-us/team/stanley.jpg?v=2' },
    { name: 'Sufyan Adhikari', title: 'Engineering', img: 'https://www.napkin.ai/assets/v6/about-us/team/sufiyan.jpg' },
    { name: 'Mohit Negi', title: 'Engineering', img: 'https://www.napkin.ai/assets/v6/about-us/team/sufiyan.jpg' },
    { name: 'Akshit Garg', title: 'Product', img: 'https://www.napkin.ai/assets/v6/about-us/team/akshit.jpg' },
    { name: 'Erwan Le Batard-Polès', title: 'Engineering', img: 'https://www.napkin.ai/assets/v6/about-us/team/erwan-lbp.jpg' },
    { name: 'Spandan Kar', title: 'Engineering', img: 'https://www.napkin.ai/assets/v6/about-us/team/spandan.jpg' },
  ];

  return (
    <Container className="py-5" style={{ maxWidth: '1000px' }}>
      {/* ABOUT US HEADER */}
      <h2 className="fw-bold text-center mb-3">About us</h2>
      <p className="text-center mb-5">
        Join us in transforming business <br /> communication, one visual at a time.
      </p>

      {/* OUR STORY */}
      <Row className="align-items-center">
        <Col md={5} className="text-center mb-4 mb-md-0">
          <img src={VennImage} alt="Venn Diagram" className="img-fluid" style={{ maxWidth: '90%' }} />
          <blockquote className="mt-5 fst-italic">
            <h3>“An amazing visual truly captures the essence of an idea.”</h3>
            <footer className="blockquote-footer mt-2">Pramod Sharma</footer>
          </blockquote>
        </Col>
        <Col md={7}>
          <h4 className="fw-bold mb-3">Our story</h4>
          {[
            "About a decade ago, we founded an AI gaming company called Osmo, with a mission to make learning fun for kids. While we succeeded in delighting children, our own work wasn't as much fun. Endless 10-page documents and 100-slide decks were the norm, and too many of these bored us to death.",
            "Occasionally, we saw an amazing visual that truly captured the essence of an idea, bringing the aha moment, removing misconceptions, and creating a shared mental model. It was clear that visuals are key to bringing joy and efficiency to business communication.",
            "However, despite seeing the power of visuals, we saw that creating them is no easy task. Few people use them effectively. Most of us don’t know where to start or how to make them compelling, so we’re stuck only writing text.",
            "At Osmo, we developed advanced AI to detect game pieces in real-time, giving us a solid foundation for this problem. We first tried to replicate the experience of two people doodling ideas on paper, but digitally with AI. After many iterations, we realized that even with the best AI, starting with drawing is a huge barrier for most people.",
            "Then, LLMs rose in power to perfectly complement our efforts. A text-first entry point became viable, allowing us to transform text into visuals. This marked the birth of Napkin, making visual communication accessible to everyone.",
          ].map((para, i) => (
            <p key={i} style={{ textAlign: 'justify' }}>{para}</p>
          ))}
        </Col>
      </Row>

      {/* OUR MISSION */}
      <div className="mt-5 py-5 px-4" style={{ backgroundColor: '#f8f8f8', borderRadius: '20px' }}>
        <Row className="align-items-center">
          <Col md={7} className="mb-4 mb-md-0">
            <h3 className="fw-bold mb-4">🎯 Our Mission</h3>
            <p style={{ textAlign: 'justify', fontSize: '1.1rem', lineHeight: '1.8' }}>
              At Napkin, our mission is to give everyone the power of visuals in their communication. We want to bring visuals to conversations
              where there are none today and enable people who never think about visuals to become dynamic visual storytellers.
              With Napkin, everyone will become a more effective storyteller.
            </p>
          </Col>
          <Col md={5} className="text-center">
            <img
              src={HandsImage}
              alt="Mission Hands"
              className="img-fluid rounded"
              style={{ maxHeight: '300px', objectFit: 'contain' }}
            />
          </Col>
        </Row>
      </div>

      {/* MAP */}
      <div className="mt-4">
        <img
          src={Map}
          alt="Map"
          className="img-fluid rounded"
          style={{ width: '100%', maxHeight: '300px', objectFit: 'contain' }}
        />
      </div>

      {/* MEET THE TEAM */}
      <div className="mt-5 pt-5 pb-4" style={{ backgroundColor: '#f5f5f5', borderRadius: '20px' }}>
        <Container>
          <Row className="align-items-start">
            <Col md={3}>
              <h2 className="fw-bold mb-3">👥 Meet the team</h2>
              <p style={{ fontSize: '1rem', lineHeight: '1.7', color: '#444' }}>
                At the heart of Napkin AI is a small, dedicated team — dreamers, designers,
                and developers from the US, France, and India — united to improve how people
                communicate in the business world.
                <br /><br />
                We’re constantly learning and iterating to help our users communicate visually.
              </p>
            </Col>
            <Col md={9}>
              <div className="d-flex flex-wrap justify-content-between ps-md-3">
                {teamMembers.map((member, idx) => (
                  <div
                    key={idx}
                    className="text-center mb-4"
                    style={{
                      width: '18%',
                      minWidth: '100px',
                      backgroundColor: '#fff',
                      padding: '15px 10px',
                      margin: '0 1% 20px 1%',
                      borderRadius: '12px',
                      border: '1px solid #eaeaea',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.03)',
                    }}
                  >
                    <img
                      src={member.img}
                      alt={member.name}
                      className="rounded-circle mb-2"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/64';
                      }}
                      style={{
                        width: '64px',
                        height: '64px',
                        objectFit: 'cover',
                        border: '2px solid #ddd',
                      }}
                    />
                    <h6 className="fw-semibold mb-0" style={{ fontSize: '0.9rem' }}>{member.name}</h6>
                    <small className="text-muted">{member.title}</small>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* CONTACT SECTION */}
      <div className="text-center py-5 mt-5" style={{ backgroundColor: '#fff' }}>
        <h4 className="fst-italic text-dark">
          Excited about our vision? <br /> We’d love to hear from you!
        </h4>
        <div className="my-4">
          <img
            src={Arrow}
            alt="Arrow Loop"
            style={{ width: '100px', height: '100px' }}
          />
        </div>
        <p style={{ fontSize: '1.1rem' }}>
          Write us at <a href="mailto:contact@napkin.ai" style={{ color: '#a259ff', textDecoration: 'underline' }}>contact@napkin.ai</a><br />
          or follow us on:
        </p>
        <div className="d-flex justify-content-center gap-3 mt-3 flex-wrap">
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin" style={iconStyle}></i>
          </a>
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-twitter-x" style={iconStyle}></i>
          </a>
          <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-youtube" style={iconStyle}></i>
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-instagram" style={iconStyle}></i>
          </a>
          <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-tiktok" style={iconStyle}></i>
          </a>
        </div>
      </div>
    </Container>
  );
};

export default Aboutus;
