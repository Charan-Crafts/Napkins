import React from 'react';
// import Navbar from '../components/Navbar';
import Footer from '../components/Eigth'; // or Footer.jsx if named differently

const TermsPage = () => {
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
          Terms and Conditions
        </h1>
        <p
          style={{
            textAlign: 'center',
            fontSize: '18px',
            marginBottom: '40px',
            color: '#555',
          }}
        >
          Effective Date: May 30, 2025
        </p>

        <h4 style={{ fontWeight: 'bold', marginBottom: '10px' }}>
          1. Acceptance of Terms
        </h4>
        <p>
          By using the Napkin.ai app ("App"), you agree to be bound by these
          Terms and Conditions ("Terms"), including any future updates or
          modifications. If you do not agree to these Terms, please do not use
          the App.
        </p>

        <h4 style={{ fontWeight: 'bold', marginTop: '30px', marginBottom: '10px' }}>
          2. User Content and Usage
        </h4>

        <p>
          <strong>Ownership:</strong> You retain ownership of any content you
          create, upload, or otherwise make available in the App ("User
          Content"). Napkin.ai does not claim ownership of your User Content.
        </p>

        <p>
          <strong>Responsibility:</strong> You are solely responsible for your
          User Content and the consequences of sharing or publishing it.
          Napkin.ai does not endorse any User Content or any opinion,
          recommendation, or advice expressed therein.
        </p>

        <p>
          <strong>Rights You Grant to Napkin.ai:</strong> By creating,
          uploading, or sharing content on Napkin, you grant Napkin.ai a
          non-exclusive, worldwide, royalty-free license to use, host, and
          store your content, solely as necessary to operate and improve our
          services. This includes:
        </p>

        <ul style={{ listStyle: 'disc', marginLeft: '40px', paddingLeft: '10px' }}>
          <li style={{ marginBottom: '10px' }}>
            <strong>Displaying Your Content to You and Your Collaborators:</strong>{' '}
            We may store, render, and display your content, both text and
            visuals, within your teamspace so that you and authorized
            collaborators can view, edit, and collaborate on it.
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>Sharing Your Content at Your Direction:</strong>{' '}
            If you choose to share your content or visuals via link sharing, export, or direct collaborator access, we may display or transmit that content to others only as instructed by you. We do not share your content with third parties unless you explicitly initiate the action.
          </li>
          <li style={{ marginBottom: '10px' }}>
            <strong>Compliance with Legal Requirements:</strong>{' '}
            We may disclose your content if legally required, but only after making reasonable efforts to notify you (unless legally prohibited) and we will share only what is strictly necessary.
          </li>
          We do not use your content for marketing, promotion, or public display unless we get your explicit approval. This license is valid only while your content is stored with us and automatically ends when your content is deleted from our systems.

          {/* Add other bullet points below if needed */}
        </ul>
        <p>
          <strong>Content Usage:</strong> You may use the generated visual content for resale or marketing purposes. However, you are strictly prohibited from reselling generic output from Napkin, including individual icons, illustrations, or collections, especially on stock resale platforms or similar services.
        </p>
        <p>
          <strong>Permitted Use</strong>The App allows content creation similar to what is legally permitted in standard text and visual editors (e.g., Google Docs or Figma).
        </p>

        <h4 style={{ fontWeight: 'bold', marginTop: '30px', marginBottom: '10px' }}>
          3. Account Access and Features
        </h4>

        <p><strong>Login Requirement:</strong> You must be logged in to create content. Currently, We currently support Google login and email/password login.</p>
        <p><strong>Multi-User Feature:</strong>Similar to Google Docs, the App includes a real-time collaboration feature that allows users (with overlapping access rights) to see which other users are viewing the same napkin simultaneously.</p>

         <h4 style={{ fontWeight: 'bold', marginTop: '30px', marginBottom: '10px' }}>
          4. Data Collection for AI Improvement
        </h4>

        <p><strong>Data Collection for AI Improvement: </strong> To help improve Napkin's generative and search features, we may collect data submitted to our visual AI – such as selected text, prompts, and surrounding headers.
               You can choose to opt out of this data collection at any time by visiting your profile settings and disabling the “Allow my content to improve Napkin.ai” option. When opted out, your content is never used to improve our models or product features, and is processed only to support your own sessions.</p>
        <p><strong>Protection of Your Personal Content: </strong> While we collect your input text and surrounding headers to improve our AI model, the data submitted is anonymized and your personal content will remain private. The AI transforms your text into visual descriptions without storing or using it for other users' content generation. Your unique ideas and information will never appear in others' visuals. The AI's knowledge comes from its underlying OpenAI and/or Google models, not from user inputs.</p>
        <p><strong>Original AI-Generated Visual Content: </strong>All visual content created by Napkin.ai is original and based on designs crafted internally by our designers. We do not use or incorporate images scraped from the internet. This ensures that the visuals you receive are unique creations based on your input, free from copyright concerns related to existing internet content.
                By using Napkin.ai, you acknowledge and agree to these data collection and AI content generation practices.</p>



         <h4 style={{ fontWeight: 'bold', marginTop: '30px', marginBottom: '10px' }}>
          5. Eligibility and Usage Limits
        </h4>

        <p><strong>Eligibility:</strong> To use the App, you must be at least 13 years old or the minimum age required in your country to consent to use the Services. If you are under 18 you must have your parent or legal guardian’s permission to use the Services.</p>
        <p><strong>Usage Limits: </strong>Napkin.ai may establish limits on the use of the App without prior notice, including the maximum number of days that User Content will be retained, the maximum amount and size of User Content that can be stored, and the maximum storage space allotted to each user.</p>
        


        <h4 style={{ fontWeight: 'bold', marginTop: '30px', marginBottom: '10px' }}>
          6. Prohibited Activities
        </h4>
        <ul style={{ listStyle: 'disc', marginLeft: '40px', paddingLeft: '10px' }}>
          <li style={{ marginBottom: '10px' }}>Violate any applicable laws or regulations</li>
          <li style={{ marginBottom: '10px' }}>Infringe the intellectual property rights of others</li>
          <li style={{ marginBottom: '10px' }}>Upload or distribute viruses, malware, or other harmful software</li>
          <li style={{ marginBottom: '10px' }}>Use the App to commit fraud or participate in any unlawful activities</li>
          <li style={{ marginBottom: '10px' }}>Upload content that is defamatory, obscene, or otherwise offensive</li>
        </ul>



        <h4 style={{ fontWeight: 'bold', marginBottom: '10px' }}>
          7. Intellectual Property</h4>
        <p>The App, including but not limited to its software, text, graphics, and functionalities, is owned by Napkin.ai and is protected by copyright, trademark, and other intellectual property laws. You are granted a limited, non-exclusive, non-transferable, revocable license to use the App in accordance with these Terms.</p>



        <h4 style={{ fontWeight: 'bold', marginBottom: '10px' }}>
          8. Privacy</h4>
        <p>Your privacy is important to us. Please review our Privacy Policy, which explains how we collect, use, and protect your personal information.</p>


        <h4 style={{ fontWeight: 'bold', marginBottom: '10px' }}>
         9. Termination of Use</h4>
        <p>Napkin.ai reserves the right to suspend or terminate your access to the App at any time, with or without cause or notice. Upon termination, any rights granted to you under these Terms will cease, and you must cease all use of the App.</p>


        <h4 style={{ fontWeight: 'bold', marginBottom: '10px' }}>
         10. Disclaimer of Warranties</h4>
        <p>Napkin.ai provides the App on an "as is" and "as available" basis. We make no representations or warranties of any kind, express or implied, regarding the operation of the App or the information, content, or materials included therein.</p>
         

         <h4 style={{ fontWeight: 'bold', marginBottom: '10px' }}>
        11. Limitation of Liability</h4>
        <p>To the fullest extent permitted by applicable law, Napkin.ai shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses, resulting from your use or inability to use the App.</p>
 
         
        <h4 style={{ fontWeight: 'bold', marginBottom: '10px' }}>
         12. Indemnification</h4>
        <p>You agree to indemnify, defend, and hold harmless Napkin.ai, its affiliates, and their respective officers, directors, employees, and agents from and against any and all claims, liabilities, damages, losses, or expenses, including reasonable attorneys' fees, arising out of or in any way connected with your access to or use of the App, your User Content, or your violation of these Terms.</p>
         

         
        <h4 style={{ fontWeight: 'bold', marginBottom: '10px' }}>
        13. Modifications to Terms and App</h4>
        <p>Napkin.ai reserves the right to modify these Terms at any time. We will provide notice of any material changes by posting the new Terms on our website or through the App. Your continued use of the App after such changes constitutes your acceptance of the new Terms.
            Napkin.ai may update or change the App's features at any time without prior notice.</p>
         


        
        <h4 style={{ fontWeight: 'bold', marginBottom: '10px' }}>
         14. Governing Law</h4>
        <p>These Terms are governed by and construed in accordance with the laws of the State of California, without regard to its conflict of law principles. You agree to submit to the exclusive jurisdiction of the courts located in California for the resolution of any disputes arising out of or relating to these Terms or the App.</p>
         

         
        <h4 style={{ fontWeight: 'bold', marginBottom: '10px' }}>
         15. Contact Information</h4>
        <p>For any questions about these Terms, please contact us at:
            <li>Email: contact@napkin.ai</li>
            By using the Napkin.ai app, you agree to these Terms and Conditions.</p>
         

      </div>
      <Footer />
    </>
  );
};

export default TermsPage;
