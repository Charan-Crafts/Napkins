import React, { useState } from 'react';
import './Seventh.css'; 
import { Link } from 'react-router-dom';
// import devImage from '../assets/devs.png';?

const faqData = [
  {
    question: "What is special about Napkin?",
    answer:
      "Napkin helps you transform your existing text content into visuals like diagrams, charts, scenes, and images. Think of it as having a personal visual expert right at your fingertips, ready to bring your ideas to life.",
  },
  {
    question: "Is Napkin free to use?",
    answer:
      "Yes, Napkin offers a free plan with some limitations on quotas and features. While we are in beta, you can enjoy the Pro plan for free!",
  },
  {
    question: "Can I use Napkin on mobile?",
    answer:
      "You can view your existing Napkins on mobile, but creating and editing Napkins is only available on desktop. We believe that the best Napkin generation and editing experience is on desktop for now. We may add generation and editing support on mobile in the future.",
  },
  {
    question: "How do I sign up for Napkin?",
    answer:
      "Click the 'Get Napkin' button on our website and sign up using Google Single Sign-On option or by setting up an email and password combination. Currently, sign-up is only available on desktop. On mobile devices, you can request an invite, then use the link sent in the invitation email on your PC or laptop to complete sign-up.",
  },
  {
    question: "How do I write prompts in Napkin?",
    answer:
      "You do not need to write prompts to use Napkin. Simply write, import or paste your text content into Napkin and click [Spark icon] to generate your visuals.",
  },
  {
    question: "What is the best way to use the visuals I create in Napkin?",
    answer:
      "There are several ways to share your creations Export your selected visual as PPT, PNG, SVG, or PDF files. We skipped supporting JPEG because PNG is higher quality. Export the entire document into a PDF. Share a link to your Napkin so your audience can see your text and graphics integrated together.",
  },
  {
    question: "How many languages does Napkin support?",
    answer:
      "You can create visuals in 60+ languages using Napkin—the visuals will match the language of your text. Currently, our interface is only available in English; however, we plan to add additional interface languages in the future.",
  },
  {
    question: "What about team collaboration?",
    answer:
      "Napkin offers robust features to support seamless team collaboration:Teamspace: Easily invite and manage team members to a shared workspace, making collaboration smooth and easy.Real-time Editing: Inviting multiple people to edit a Napkin in real-time, enabling dynamic teamwork through built-in sharing and co-editing functionalities.Commenting & Feedback: Use our built-in highlighter to leave feedback directly on text and visuals",
  },
  {
    question: "What support can I expect if I get stuck?",
    answer:
      "You can contact us by clicking the chat widget in the bottom-right corner of our website or by emailing contact@napkin.ai with your notes, questions or feedback. Our team will be happy to help you get back on track.We can’t offer any guarantees, unfortunately. You can showcase your skills and knowledge to recruiters on our Hiring Platform by completing challenges and engaging with the community. This may lead to job opportunities, but it also may not. We still recommend applying for jobs using traditional channels like job boards.",
  },
];

const Seventh = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggle = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
 

  return (
    <section className="faq-section" style={{ padding: '60px 20px', background: '#f3e6e6' }}>
         {/* <h2>FAQ's</h2> */}
      <div className="faq-container" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 className="faq-heading">Frequently asked Questions</h2>
        {faqData.map((item, index) => (
          <div
            key={index}
            className="faq-item"
            style={{
              border: '1px solid #ddd',
              borderRadius: '8px',
              marginBottom: '12px',
              background: '#fff',
            }}
          >
            <div
              className="faq-question"
              onClick={() => toggle(index)}
              style={{
                padding: '16px',
                fontWeight: '600',
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              {item.question}
              <span style={{ fontSize: '20px' }}>{activeIndex === index ? '^' : '+'}</span>
            </div>
            {activeIndex === index && (
              <div
                className="faq-answer"
                style={{
                  padding: '16px',
                  paddingTop: '0',
                  color: '#555',
                  lineHeight: '1.6',
                }}
              >
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>


      <div className="eighth-section">
  <div className="eighth-content">
    <h2>
      TRY NAPKIN
    </h2>
    <p>
      Our free beta works on all desktop browsers.

    </p>
    <Link
      to="/signup"
      style={{
        display: 'inline-block',
        backgroundColor: '#333',
        color: '#fff',
        fontWeight: 600,
        fontSize: '1.2rem',
        padding: '14px 28px',
        borderRadius: '2rem',
        boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
        textDecoration: 'none',
        transition: 'background 0.3s',
        border: 'none',
        fontStyle: 'italic',
        marginTop: 10,
      }}
      onMouseOver={e => e.currentTarget.style.backgroundColor = '#111'}
      onMouseOut={e => e.currentTarget.style.backgroundColor = '#333'}
    >
      Get Napkin Free →
    </Link>
  </div>
</div>

    </section>
  );
};

export default Seventh;
