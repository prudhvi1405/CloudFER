import React from 'react';

const Chatbot: React.FC = () => {
  return (
    <div style={styles.body}>
      <div style={styles.chatbotContainer}>
        <h2 style={styles.heading}>Chat with our Assistant about Retail Information</h2>
        <iframe
          style={styles.iframe}
          allow="microphone;"
          src="https://console.dialogflow.com/api-client/demo/embedded/1c12e60f-dfa2-4f2e-95c5-cb518d999b09"
        />
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  body: {
    fontFamily: "'Poppins', sans-serif",
    margin: 0,
    padding: 0,
    backgroundColor: '#e6f0ff', // Lighter blue background for a fresher look
    display: 'flex', // Use flexbox for centering
    justifyContent: 'center', // Centering horizontally
    alignItems: 'center', // Centering vertically
    height: '100vh', // Full viewport height
  },
  chatbotContainer: {
    width: '100%',
    maxWidth: '600px', // Slightly larger max width for more space
    backgroundColor: '#ffffff',
    padding: '30px', // Increased padding for better spacing
    borderRadius: '15px', // Rounded corners for a softer look
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.1)', // Softer and larger shadow for a more elevated look
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease', // Smooth animation for hover effects
  },
  iframe: {
    width: '100%',
    height: '500px', // Increased iframe height for a better user experience
    border: 'none',
    borderRadius: '10px', // Rounded corners for the iframe
  },
  heading: {
    fontSize: '26px', // Larger font size for more prominence
    fontWeight: '600', // Bold font for the heading
    color: '#333', // Darker color for better readability
    marginBottom: '25px', // Increased margin for better spacing
  },
};

export default Chatbot;