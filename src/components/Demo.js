import React, { useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import jsPDF from 'jspdf';
import emailjs from 'emailjs-com';

const MyComponent = () => {
  
  };

  return (
    <div>
      <button onClick={handlePrint}>Print</button>
      <button onClick={handleSendEmail}>Send Email</button>

      <div ref={componentRef}>
        {/* Your printable content goes here */}
        <h1>Printable Content</h1>
        <p>This is the content that will be printed and saved as a PDF.</p>
      </div>
    </div>
  );
};

export default MyComponent;
