import React from 'react';
// import Navbar from '../components/Navbar';
import Footer from '../components/Eigth'; // or Footer.jsx if named differently

const privacy = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div
        style={{
          maxWidth: '900px',
          margin: '80px auto',
          padding: '0 20px',
          fontFamily: 'Arial, sans-serif',
          lineHeight: '1.8',
          color: '#222',
          textAlign: 'justify',
        }}
      >
        <h1 style={{ textAlign: 'center', fontWeight: 'bold' }}>
          Privacy Policy
        </h1>
        <p
          style={{
            textAlign: 'center',
            fontSize: '18px',
            marginBottom: '40px',
            color: '#555',
          }}
        >
          Effective Date: October 10, 2024
        </p>

        <h4 style={{ fontWeight: 'bold',marginBottom: '10px' }}>
          1. Introduction
        </h4>
        <p>
          Welcome to Napkin.ai. We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit www.napkin.ai and use our services.
        </p>

        <h4 style={{ fontWeight: 'bold', marginTop: '30px', marginBottom: '10px' }}>
          2. Quick Summary
        </h4>
        <ul style={{ listStyle: 'disc', marginLeft: '40px', paddingLeft: '10px' }}>
          <li style={{ marginBottom: '10px' }}>We collect data to provide and improve our services.</li>
          <li style={{ marginBottom: '10px' }}>We use your information to enhance your experience and develop new features.</li>
          <li style={{ marginBottom: '10px' }}>We improved our Ai features using anonymized data submitted to current ai features</li>
          <li style={{ marginBottom: '10px' }}>We share data with service providers and when legally required.</li>
          <li style={{ marginBottom: '10px' }}>You have rights regarding your personal information.</li>
          <li style={{ marginBottom: '10px' }}>We employ security measures to protect your data.</li>
          <li style={{ marginBottom: '10px' }}>This policy may be updated periodically.</li>
        </ul>


        <h4 style={{ fontWeight: 'bold', marginTop: '30px', marginBottom: '10px' }}>
          3. Information We Collect
        </h4>
        <ul style={{ listStyle: 'disc', marginLeft: '40px', paddingLeft: '10px' }}>
          <li style={{ marginBottom: '10px' }}>On our Homepage (www.napkin.ai):Log file data (e.g., IP addresses, browser type, date/time stamps)Cookie and tracking technology data</li>
          <li style={{ marginBottom: '10px' }}>In our WebApp (app.napkin.ai):Google account login information (name, email, profile image)User-generated content in Napkin documents</li>
          <li style={{ marginBottom: '10px' }}>In our Internal Tools:Google login data for employeesAnonymized user data for AI training and quality assessment</li>
        </ul>


         <h4 style={{ fontWeight: 'bold', marginTop: '30px', marginBottom: '10px' }}>
          4. How We Use Your Information
        </h4>

        <ul style={{ listStyle: 'disc', marginLeft: '40px', paddingLeft: '10px' }}>
          <li style={{ marginBottom: '10px' }}>Provide and maintain our services</li>
          <li style={{ marginBottom: '10px' }}>Improve and personalize user experiences</li>
          <li style={{ marginBottom: '10px' }}>Analyze usage patterns Develop new features</li>
          <li style={{ marginBottom: '10px' }}>Communicate updates and marketing information</li>
          <li style={{ marginBottom: '10px' }}>Train and validate AI models from feature usage collection (Asset search and generative AI).</li>
          <li style={{ marginBottom: '10px' }}>Detect and prevent fraud</li>
        </ul>

         <h4 style={{ fontWeight: 'bold', marginTop: '30px', marginBottom: '10px' }}>
          5. How We Share Your Information
        </h4>

        <p><strong>Eligibility:</strong> We may share your information with:

Vetted service providers who assist us in operating our business.
Legal and regulatory authorities when required to comply with applicable laws.
We will not share your personal information with potential buyers during any stage of business transactions. In the event of a merger, acquisition, or sale of all or a portion of our assets, your personal information may be transferred to the acquiring entity. We will ensure that the successor entity is bound by this Privacy Policy or provides you with notice and, if required, seeks your consent before any changes are made regarding your personal information.</p>
        


        <h4 style={{ fontWeight: 'bold', marginTop: '30px', marginBottom: '10px' }}>
          6. Your Data Rights
        </h4>
        <ul style={{ listStyle: 'disc', marginLeft: '40px', paddingLeft: '10px' }}>
          <li style={{ marginBottom: '10px' }}>Access, correct, delete, or transfer your personal data</li>
          <li style={{ marginBottom: '10px' }}>Opt-out of marketing communications</li>
          <li style={{ marginBottom: '10px' }}>Manage cookie settings through your browser</li>
        </ul>



        <h4 style={{ fontWeight: 'bold', marginBottom: '10px' }}>
         7. Data Retention</h4>
        <p>We retain your personal information for as long as necessary to provide our services and comply with legal obligations. The retention period varies depending on the type of data and its purpose.
            Contact us at contact@napkin.ai if you want your data to be deleted or have any questions about our data.</p>



        <h4 style={{ fontWeight: 'bold', marginBottom: '10px' }}>
          8. Security Measures</h4>
        <p>We use HTTPS and implement industry-standard security measures to protect your data. However, no method of transmission over the internet is 100% secure.</p>


        <h4 style={{ fontWeight: 'bold', marginBottom: '10px' }}>
         9. Children's Privacy</h4>
        <p>Our services are not intended for children under 13. We do not knowingly collect data from children under 13.</p>


        <h4 style={{ fontWeight: 'bold', marginBottom: '10px' }}>
         10. International Data Transfers</h4>
        <p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.</p>
         

         <h4 style={{ fontWeight: 'bold', marginBottom: '10px' }}>
       11. Third-Party Links</h4>
        <p>Our website may contain links to third-party sites. This privacy policy does not cover these external sites.</p>
 
         
        <h4 style={{ fontWeight: 'bold', marginBottom: '10px' }}>
         12. Changes to This Policy</h4>
        <p>We may update this policy periodically. We will notify you of any material changes by posting the new policy on this page and updating the "Effective Date."</p>
         
        <h4 style={{ fontWeight: 'bold', marginBottom: '10px' }}>
         13. Contact Information</h4>
        <p>For any questions about these Terms, please contact us at:
            <li>Email: contact@napkin.ai</li>
            By using the Napkin.ai app, you agree to these Terms and Conditions.</p>
         

      </div>
      <Footer />
    </>
  );
};

export default privacy;
