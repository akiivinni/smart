import React, { useState } from 'react';
import { useNavigate, useLocation, useMatch } from 'react-router-dom';
import Layout from './layout';
import LocationDropdown1 from '../pages/newdrop';

const AdminPage = () => {
  const [showPopup, setShowPopup] = useState(true);
  const location = useLocation(); 
  const navigate = useNavigate();
  
  
  const match = useMatch('/admin/upload/:country');

  const handleAgree = () => {
    setShowPopup(false); 
  };

  const handleDisagree = () => {
    alert('Please click on Agree button'); 
  };

  const isUploadPage = match !== null;  

  return (
    <>
      <Layout>
        <div>
          {showPopup && (
            <div className="modal-overlay">
              <div className="modal">
                <h2 className="modal-heading">DATA PRIVACY NOTICE</h2>
                <div className="underline"></div>
                <p className="modal-text">
                  In the process of working on <span className="highlight">Smart</span>, you will have access to personal identification information about employees' personal data, which should solely be used for <span className="highlight">Smart Email Notification</span>.
                </p>
                <div className="underline"></div>
                <div className="modal-buttons">
                  <button onClick={handleAgree} className="modal-button agree">Agree</button>
                  <button onClick={handleDisagree} className="modal-button disagree">Disagree</button>
                </div>
              </div>
            </div>
          )}
          
          {/* Conditionally render the dropdown or the upload page */}
          {!showPopup && !isUploadPage && (
            <div>
              <LocationDropdown1 />
            </div>
          )}

          {/* Render the upload page only when the route is /admin/upload/:country */}
          {isUploadPage && (
            <div>
              <h1>Upload Page for {match.params.country}</h1>
           
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};

export default AdminPage;
